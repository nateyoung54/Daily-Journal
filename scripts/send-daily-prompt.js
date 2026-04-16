const fs = require("node:fs");
const path = require("node:path");
const https = require("node:https");
const { getPromptForDate } = require("../prompts-data.js");

const APP_NAME = "Veloura";
const DEFAULT_TIME = "16:30";
const DEFAULT_TIMEZONE = "America/New_York";
const DEFAULT_STATE_FILE = path.resolve(__dirname, "..", ".github", "daily-prompt-state.json");

function getConfig() {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const scheduledTime = process.env.DAILY_PROMPT_TIME || DEFAULT_TIME;
  const timezone = process.env.DAILY_PROMPT_TIMEZONE || DEFAULT_TIMEZONE;
  const forceSend = process.env.FORCE_SEND === "true";
  const stateFile = process.env.PROMPT_STATE_FILE || DEFAULT_STATE_FILE;

  if (!botToken || !chatId) {
    throw new Error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID.");
  }

  return {
    botToken,
    chatId,
    scheduledTime,
    timezone,
    forceSend,
    stateFile,
  };
}

function getTimeParts(date, timezone) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return Object.fromEntries(
    formatter
      .formatToParts(date)
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value]),
  );
}

function parseScheduledTime(scheduledTime) {
  const [hour, minute] = scheduledTime.split(":");
  return {
    hour: Number(hour),
    minute: Number(minute),
  };
}

function getMinutesSinceMidnight(hour, minute) {
  return Number(hour) * 60 + Number(minute);
}

function hasReachedScheduledTime(nowParts, scheduledTime) {
  const scheduled = parseScheduledTime(scheduledTime);
  const currentMinute = getMinutesSinceMidnight(nowParts.hour, nowParts.minute);
  const scheduledMinute = getMinutesSinceMidnight(scheduled.hour, scheduled.minute);
  return currentMinute >= scheduledMinute;
}

function readState(stateFile) {
  try {
    return JSON.parse(fs.readFileSync(stateFile, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") {
      return {};
    }

    throw error;
  }
}

function writeState(stateFile, nextState) {
  fs.mkdirSync(path.dirname(stateFile), { recursive: true });
  fs.writeFileSync(stateFile, `${JSON.stringify(nextState, null, 2)}\n`);
}

function buildState(localDate, config, prompt) {
  return {
    lastSentDate: localDate,
    lastSentAt: new Date().toISOString(),
    scheduledTime: config.scheduledTime,
    timezone: config.timezone,
    promptTitle: prompt.title,
  };
}

function shouldSendToday(state, localDate, nowParts, scheduledTime, forceSend) {
  if (forceSend) {
    return true;
  }

  if (state.lastSentDate === localDate) {
    return false;
  }

  return hasReachedScheduledTime(nowParts, scheduledTime);
}

function getSkipReason(state, localDate, nowParts, config) {
  if (state.lastSentDate === localDate) {
    return `Skipping send for ${localDate}; prompt already delivered today.`;
  }

  return `Skipping send at ${nowParts.hour}:${nowParts.minute} ${config.timezone}; scheduled for ${config.scheduledTime}.`;
}

async function sendPrompt() {
  const config = getConfig();
  const state = readState(config.stateFile);
  const now = new Date();
  const nowParts = getTimeParts(now, config.timezone);
  const localDate = `${nowParts.year}-${nowParts.month}-${nowParts.day}`;

  if (!shouldSendToday(state, localDate, nowParts, config.scheduledTime, config.forceSend)) {
    console.log(getSkipReason(state, localDate, nowParts, config));
    return;
  }

  const prompt = getPromptForDate(localDate);
  const stateForWrite = buildState(localDate, config, prompt);

  const message = [
    `${APP_NAME} daily prompt`,
    "",
    `${nowParts.month}/${nowParts.day}/${nowParts.year}`,
    "",
    `*${prompt.title}*`,
    prompt.text,
  ].join("\n");

  await requestTelegram(
    `/bot${config.botToken}/sendMessage`,
    JSON.stringify({
      chat_id: config.chatId,
      text: message,
      parse_mode: "Markdown",
      disable_web_page_preview: true,
    }),
  );

  writeState(config.stateFile, stateForWrite);
  console.log(`Sent daily prompt for ${localDate} to Telegram.`);
}

function requestTelegram(path, body) {
  return new Promise((resolve, reject) => {
    const request = https.request(
      {
        hostname: "api.telegram.org",
        path,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
        },
      },
      (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });
        response.on("end", () => {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode < 300) {
            resolve(data);
            return;
          }

          reject(new Error(`Telegram API error (${response.statusCode}): ${data}`));
        });
      },
    );

    request.on("error", reject);
    request.write(body);
    request.end();
  });
}

sendPrompt().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
