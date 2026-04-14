const FALLBACK_PROMPTS = [
  {
    title: "Prompt library unavailable",
    text: "Refresh the page after prompts-data.js loads so the full Veloura prompt library becomes available again.",
    tags: ["system"],
  },
];

const prompts = Array.isArray(window.VELOURA_PROMPTS) && window.VELOURA_PROMPTS.length
  ? window.VELOURA_PROMPTS
  : FALLBACK_PROMPTS;

const promptUtils = window.VELOURA_PROMPT_UTILS || {
  getPromptIndexForDate(dateString, list = prompts) {
    return Number(String(dateString).replaceAll("-", "")) % list.length;
  },
};

const state = {
  promptIndex: 0,
};

const elements = {
  todayLabel: document.getElementById("todayLabel"),
  promptTitle: document.getElementById("promptTitle"),
  dailyPrompt: document.getElementById("dailyPrompt"),
  promptTags: document.getElementById("promptTags"),
  promptCount: document.getElementById("promptCount"),
  shufflePromptButton: document.getElementById("shufflePromptButton"),
  copyPromptButton: document.getElementById("copyPromptButton"),
  statusMessage: document.getElementById("statusMessage"),
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
  return promptUtils.getPromptIndexForDate(todayKey(), prompts);
}

function activePrompt() {
  return prompts[state.promptIndex] ?? prompts[0] ?? FALLBACK_PROMPTS[0];
}

function showStatus(message) {
  elements.statusMessage.textContent = message;
}

function renderPrompt() {
  const prompt = activePrompt();
  elements.promptTitle.textContent = prompt.title;
  elements.dailyPrompt.textContent = prompt.text;
  elements.promptCount.textContent = `${prompts.length} prompts`;
  elements.promptTags.replaceChildren(
    ...prompt.tags.map((tag) => {
      const chip = document.createElement("span");
      chip.className = "prompt-tag";
      chip.textContent = tag;
      return chip;
    }),
  );
}

async function copyPrompt() {
  const prompt = activePrompt();
  const text = `${prompt.title}\n\n${prompt.text}`;

  try {
    await navigator.clipboard.writeText(text);
    showStatus("Prompt copied for your journal.");
  } catch {
    showStatus("Clipboard unavailable in this browser.");
  }
}

function nextPrompt() {
  state.promptIndex = (state.promptIndex + 1) % prompts.length;
  renderPrompt();
  showStatus("Previewing another prompt from the library.");
}

function bindEvents() {
  elements.shufflePromptButton.addEventListener("click", nextPrompt);
  elements.copyPromptButton.addEventListener("click", copyPrompt);
}

function init() {
  state.promptIndex = dailyPromptIndex();
  elements.todayLabel.textContent = readableDate();
  renderPrompt();
  bindEvents();
}

init();
