const https = require("node:https");
const { getPromptForDate } = require("../prompts-data.js");

const APP_NAME = "Veloura";
const DEFAULT_TIME = "20:30";
const DEFAULT_TIMEZONE = "America/New_York";
const SEND_WINDOW_MINUTES = 20;

function getConfig() {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const scheduledTime = process.env.DAILY_PROMPT_TIME || DEFAULT_TIME;
  const timezone = process.env.DAILY_PROMPT_TIMEZONE || DEFAULT_TIMEZONE;
  const forceSend = process.env.FORCE_SEND === "true";

  if (!botToken || !chatId) {
    throw new Error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID.");
  }

  return {
    botToken,
    chatId,
    scheduledTime,
    timezone,
    forceSend,
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

function shouldSendNow(nowParts, scheduledTime) {
  const [hour, minute] = scheduledTime.split(":");
  if (nowParts.hour !== hour) {
    return false;
  }

  const currentMinute = Number(nowParts.minute);
  const scheduledMinute = Number(minute);
  return currentMinute >= scheduledMinute && currentMinute < scheduledMinute + SEND_WINDOW_MINUTES;
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

async function sendPrompt() {
  const config = getConfig();
  const now = new Date();
  const nowParts = getTimeParts(now, config.timezone);
  const localDate = `${nowParts.year}-${nowParts.month}-${nowParts.day}`;

  if (!config.forceSend && !shouldSendNow(nowParts, config.scheduledTime)) {
    console.log(
      `Skipping send at ${nowParts.hour}:${nowParts.minute} ${config.timezone}; scheduled for ${config.scheduledTime}.`,
    );
    return;
  }

  const prompt = getPromptForDate(localDate);
  const message = [
    `${APP_NAME} daily prompt`,
    "",
    `${nowParts.month}/${nowParts.day}/${nowParts.year}`,
    "",
    `*${prompt.title}*`,
    prompt.text,
    "",
    `Tags: ${prompt.tags.join(", ")}`,
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

  console.log(`Sent daily prompt for ${localDate} to Telegram.`);
}

sendPrompt().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
