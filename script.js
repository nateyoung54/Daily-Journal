const REMINDER_KEY = "veloura-journal-reminder";
const LAST_NOTIFICATION_KEY = "veloura-last-notification-date";
const FALLBACK_PROMPTS = [
  {
    title: "Values and alignment",
    text: "Where in your life are you successful on paper but slightly unfaithful to yourself, and what would it cost to become more honest there?",
    tags: ["values", "identity", "courage"],
  },
  {
    title: "Future self",
    text: "Imagine meeting the version of you from five years in the future. What would they thank you for starting now, and what would they ask you to stop delaying?",
    tags: ["future", "discipline", "clarity"],
  },
  {
    title: "Relationships",
    text: "Which relationship in your life deserves a more intentional version of you, and what emotional risk have you been avoiding inside it?",
    tags: ["love", "friendship", "vulnerability"],
  },
  {
    title: "Career and ambition",
    text: "If your career were an expression of your deepest standards rather than your current momentum, what would need to change next?",
    tags: ["career", "ambition", "standards"],
  },
  {
    title: "Self-trust",
    text: "What promise have you quietly made to yourself that you keep postponing, and what does that postponement teach you about fear or self-trust?",
    tags: ["self-trust", "fear", "follow-through"],
  },
  {
    title: "Inner peace",
    text: "What are you carrying that was useful in a past season of your life but now makes your inner world heavier than it needs to be?",
    tags: ["peace", "healing", "release"],
  },
];

const prompts = Array.isArray(window.VELOURA_PROMPTS) && window.VELOURA_PROMPTS.length
  ? window.VELOURA_PROMPTS
  : FALLBACK_PROMPTS;

const state = {
  timerId: null,
  promptIndex: 0,
};

const elements = {
  todayLabel: document.getElementById("todayLabel"),
  promptTitle: document.getElementById("promptTitle"),
  dailyPrompt: document.getElementById("dailyPrompt"),
  promptTags: document.getElementById("promptTags"),
  shufflePromptButton: document.getElementById("shufflePromptButton"),
  copyPromptButton: document.getElementById("copyPromptButton"),
  reminderTime: document.getElementById("reminderTime"),
  reminderButton: document.getElementById("reminderButton"),
  reminderStatus: document.getElementById("reminderStatus"),
};

function todayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function readableDate(dateString = todayKey()) {
  const date = new Date(`${dateString}T12:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function dailyPromptIndex() {
  return Number(todayKey().replaceAll("-", "")) % prompts.length;
}

function activePrompt() {
  return prompts[state.promptIndex] ?? FALLBACK_PROMPTS[0];
}

function renderPrompt() {
  const prompt = activePrompt();
  elements.promptTitle.textContent = prompt.title;
  elements.dailyPrompt.textContent = prompt.text;
  elements.promptTags.replaceChildren(
    ...prompt.tags.map((tag) => {
      const chip = document.createElement("span");
      chip.className = "prompt-tag";
      chip.textContent = tag;
      return chip;
    }),
  );
}

function formatTime(value) {
  const [hours, minutes] = value.split(":").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(2000, 0, 1, hours, minutes));
}

function showStatus(message = "") {
  elements.reminderStatus.textContent = message;
}

async function copyPrompt() {
  try {
    await navigator.clipboard.writeText(activePrompt().text);
    showStatus("Prompt copied.");
    window.setTimeout(() => {
      const saved = localStorage.getItem(REMINDER_KEY);
      showStatus(saved ? `Daily delivery at ${formatTime(saved)}.` : "");
    }, 1500);
  } catch {
    showStatus("Clipboard unavailable.");
  }
}

function loadReminder() {
  const saved = localStorage.getItem(REMINDER_KEY);
  if (saved) {
    elements.reminderTime.value = saved;
    showStatus(`Daily delivery at ${formatTime(saved)}.`);
  }
}

function sendReminderNotification() {
  const today = todayKey();
  if (localStorage.getItem(LAST_NOTIFICATION_KEY) === today) {
    return;
  }

  new Notification("Veloura", {
    body: prompts[dailyPromptIndex()].text,
  });
  localStorage.setItem(LAST_NOTIFICATION_KEY, today);
}

function scheduleReminder() {
  if (state.timerId) {
    clearTimeout(state.timerId);
  }

  const reminderTime = elements.reminderTime.value;
  localStorage.setItem(REMINDER_KEY, reminderTime);

  if (!("Notification" in window) || Notification.permission !== "granted") {
    showStatus("Browser reminders need notification access.");
    return;
  }

  const [hours, minutes] = reminderTime.split(":").map(Number);
  const now = new Date();
  const next = new Date();
  next.setHours(hours, minutes, 0, 0);

  if (next <= now) {
    next.setDate(next.getDate() + 1);
  }

  state.timerId = window.setTimeout(() => {
    sendReminderNotification();
    scheduleReminder();
  }, next.getTime() - now.getTime());

  showStatus(`Daily delivery at ${formatTime(reminderTime)}.`);
}

async function enableReminder() {
  if (!("Notification" in window)) {
    showStatus("This browser does not support notifications.");
    return;
  }

  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    showStatus("Notification permission was not granted.");
    return;
  }

  scheduleReminder();
}

function nextPrompt() {
  state.promptIndex = (state.promptIndex + 1) % prompts.length;
  renderPrompt();
}

function bindEvents() {
  elements.shufflePromptButton.addEventListener("click", nextPrompt);
  elements.copyPromptButton.addEventListener("click", copyPrompt);
  elements.reminderButton.addEventListener("click", enableReminder);
  elements.reminderTime.addEventListener("change", () => {
    const saved = elements.reminderTime.value;
    localStorage.setItem(REMINDER_KEY, saved);
    showStatus(`Daily delivery at ${formatTime(saved)}.`);
    if ("Notification" in window && Notification.permission === "granted") {
      scheduleReminder();
    }
  });
}

function init() {
  state.promptIndex = dailyPromptIndex();
  elements.todayLabel.textContent = readableDate();
  renderPrompt();
  loadReminder();
  bindEvents();
}

init();
