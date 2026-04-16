const prompts = Object.freeze([
  {
    title: "State of mind",
    text: "How are you really doing right now?",
    tags: ["check-in", "self-awareness", "present"],
  },
  {
    title: "Energy audit",
    text: "What gives you energy right now, and what drains it?",
    tags: ["energy", "clarity", "present"],
  },
  {
    title: "Assumption check",
    text: "What assumption about yourself, your future, or your work might be shaping your choices?",
    tags: ["assumptions", "clarity", "thinking"],
  },
  {
    title: "Quiet enjoyment",
    text: "What have you been quietly enjoying lately?",
    tags: ["joy", "awareness", "present"],
  },
  {
    title: "Restlessness",
    text: "Where do you feel restless right now, and what might that be pointing to?",
    tags: ["signals", "intuition", "present"],
  },
  {
    title: "Writing voice",
    text: "If you wrote without trying to impress anyone, what would you write about?",
    tags: ["writing", "self-discovery", "voice"],
  },
  {
    title: "Future gratitude",
    text: "A year from now, what might you be glad you paid attention to today?",
    tags: ["future", "gratitude", "direction"],
  },
  {
    title: "Unquestioned pace",
    text: "What part of your life feels too fast, and what would slow it down?",
    tags: ["tempo", "assumptions", "design"],
  },
  {
    title: "Missed pattern",
    text: "What pattern keeps repeating in your life or work?",
    tags: ["patterns", "insight", "connection"],
  },
  {
    title: "Business curiosity",
    text: "What problem in your life keeps showing up as a possible business idea?",
    tags: ["business", "ideas", "observation"],
  },
  {
    title: "False urgency",
    text: "What feels urgent but is not that important?",
    tags: ["priorities", "clarity", "discipline"],
  },
  {
    title: "Present self",
    text: "What does your life look like on the outside, and how does it feel on the inside?",
    tags: ["self-awareness", "truth", "present"],
  },
  {
    title: "Idea capture",
    text: "What ideas do you keep having, and how could you stop losing them?",
    tags: ["ideas", "systems", "writing"],
  },
  {
    title: "Identity drift",
    text: "Which parts of you are growing, and which are getting less space?",
    tags: ["identity", "routines", "growth"],
  },
  {
    title: "Useful discomfort",
    text: "What discomfort might be a sign that you are near something important?",
    tags: ["courage", "growth", "discernment"],
  },
  {
    title: "Creative tension",
    text: "What have you been wanting to make or say, and what keeps delaying it?",
    tags: ["writing", "creation", "resistance"],
  },
  {
    title: "Signal versus noise",
    text: "What is helping you think clearly right now, and what is just noise?",
    tags: ["attention", "clarity", "inputs"],
  },
  {
    title: "Personal metric",
    text: "If you were not measuring life by output, what would count as progress?",
    tags: ["metrics", "reflection", "design"],
  },
  {
    title: "Idea lens",
    text: "What problems do you notice faster than other people?",
    tags: ["business", "patterns", "strengths"],
  },
  {
    title: "Relationship with time",
    text: "How have you been relating to time lately?",
    tags: ["time", "awareness", "present"],
  },
  {
    title: "Open loop",
    text: "What question about your life keeps coming back?",
    tags: ["questions", "self-discovery", "attention"],
  },
  {
    title: "Future experiment",
    text: "What small experiment could you run in the next two weeks?",
    tags: ["future", "experiments", "action"],
  },
  {
    title: "Emotional weather",
    text: "What emotion has been with you most lately, and what affects it?",
    tags: ["emotions", "patterns", "present"],
  },
  {
    title: "Deeper honesty",
    text: "Where might you be avoiding a useful truth?",
    tags: ["truth", "assumptions", "depth"],
  },
  {
    title: "Writing practice",
    text: "If writing became a regular part of your life, what would you want it to do for you?",
    tags: ["writing", "system", "future"],
  },
  {
    title: "Hidden appetite",
    text: "What do you want more of right now?",
    tags: ["desire", "clarity", "future"],
  },
  {
    title: "Current season",
    text: "What is this season of your life really about?",
    tags: ["meaning", "present", "direction"],
  },
  {
    title: "Ignored evidence",
    text: "What evidence in your life challenges a limiting belief you still carry?",
    tags: ["beliefs", "self-trust", "evidence"],
  },
  {
    title: "Natural output",
    text: "When do you feel most mentally alive?",
    tags: ["strengths", "writing", "work"],
  },
  {
    title: "Business instinct",
    text: "What area of your curiosity feels most likely to become useful work?",
    tags: ["business", "future", "judgment"],
  },
  {
    title: "What to stop",
    text: "What no longer fits your life but is still taking up space?",
    tags: ["editing", "clarity", "courage"],
  },
  {
    title: "Dot connection",
    text: "What parts of your life might belong to the same larger thread?",
    tags: ["patterns", "career", "connection"],
  },
  {
    title: "Conversation with self",
    text: "What do you most want your journal to help you understand?",
    tags: ["journaling", "writing", "self-discovery"],
  },
  {
    title: "Work that fits",
    text: "What kind of work feels more natural for the person you are becoming?",
    tags: ["career", "identity", "future"],
  },
  {
    title: "Unlived idea",
    text: "What idea about how you want to live still needs to become real?",
    tags: ["future", "action", "alignment"],
  },
  {
    title: "Gentle inventory",
    text: "What feels quietly good in your life right now?",
    tags: ["gratitude", "present", "balance"],
  },
  {
    title: "Stance",
    text: "What do you already know but keep avoiding?",
    tags: ["decision", "clarity", "courage"],
  },
  {
    title: "Current appetite",
    text: "What are you hungry for right now, and are you making room for it?",
    tags: ["desire", "energy", "present"],
  },
  {
    title: "Borrowed goals",
    text: "Which goals feel chosen by you, and which feel borrowed?",
    tags: ["goals", "assumptions", "identity"],
  },
  {
    title: "Writing material",
    text: "What have you noticed lately that could become a piece of writing?",
    tags: ["writing", "ideas", "observation"],
  },
  {
    title: "Inner friction",
    text: "Where do you feel friction right now, and what might it be telling you?",
    tags: ["signals", "patterns", "awareness"],
  },
  {
    title: "Self-respect",
    text: "What would a more self-respecting version of you stop tolerating?",
    tags: ["self-respect", "boundaries", "clarity"],
  },
  {
    title: "Interesting problems",
    text: "What kinds of problems naturally hold your attention?",
    tags: ["curiosity", "patterns", "work"],
  },
  {
    title: "Narrative audit",
    text: "What story are you telling yourself about this season of life?",
    tags: ["story", "truth", "reflection"],
  },
  {
    title: "Underused strength",
    text: "What strength of yours is not getting enough use right now?",
    tags: ["strengths", "routines", "design"],
  },
  {
    title: "Attention trail",
    text: "What does your recent attention say you care about?",
    tags: ["attention", "values", "clarity"],
  },
  {
    title: "Private conviction",
    text: "What do you believe about how you want to live?",
    tags: ["beliefs", "alignment", "future"],
  },
  {
    title: "Momentum source",
    text: "Where does your real momentum usually come from?",
    tags: ["momentum", "self-knowledge", "patterns"],
  },
  {
    title: "Future material",
    text: "What are you living through right now that may matter later?",
    tags: ["writing", "meaning", "present"],
  },
  {
    title: "Low-grade dissatisfaction",
    text: "What in your life is quietly not working?",
    tags: ["dissatisfaction", "truth", "depth"],
  },
  {
    title: "Directional signal",
    text: "What thought, desire, or frustration keeps pointing you somewhere?",
    tags: ["direction", "intuition", "future"],
  },
  {
    title: "Sharp observation",
    text: "What have you noticed lately that feels true and worth saying?",
    tags: ["observation", "writing", "ideas"],
  },
  {
    title: "Emotional truth",
    text: "What feeling have you been analyzing instead of feeling?",
    tags: ["emotions", "awareness", "honesty"],
  },
  {
    title: "System gap",
    text: "Where do you need a better system right now?",
    tags: ["systems", "clarity", "design"],
  },
  {
    title: "Useful question",
    text: "What question would be worth returning to for the next month?",
    tags: ["questions", "thinking", "growth"],
  },
  {
    title: "Present witness",
    text: "What recent experience do you not want to forget?",
    tags: ["presence", "memory", "writing"],
  },
  {
    title: "Risk worth taking",
    text: "What risk feels worth taking for your growth?",
    tags: ["risk", "growth", "future"],
  },
  {
    title: "Thought pattern",
    text: "What thought pattern should you study instead of obey?",
    tags: ["mindset", "patterns", "awareness"],
  },
  {
    title: "Unmade choice",
    text: "What decision are you avoiding?",
    tags: ["decision", "clarity", "action"],
  },
  {
    title: "Creative honesty",
    text: "What would you make if it did not need to impress anyone?",
    tags: ["creation", "writing", "resistance"],
  },
  {
    title: "Lifestyle design",
    text: "If you could redesign your days, what would you add, remove, or protect?",
    tags: ["design", "habits", "future"],
  },
  {
    title: "Real satisfaction",
    text: "What actually makes a day feel satisfying to you?",
    tags: ["satisfaction", "awareness", "design"],
  },
  {
    title: "Blind spot",
    text: "What possibility might you be overlooking right now?",
    tags: ["possibility", "assumptions", "future"],
  },
  {
    title: "Thought worth sharing",
    text: "What idea feels worth sharing with other people?",
    tags: ["writing", "voice", "ideas"],
  },
  {
    title: "Deeper preference",
    text: "What do your real preferences say about you?",
    tags: ["preferences", "identity", "truth"],
  },
  {
    title: "Emotional pattern",
    text: "What situations reliably trigger you, and what might they be showing you?",
    tags: ["emotions", "patterns", "insight"],
  },
  {
    title: "Useful boredom",
    text: "Where might a little more boredom or quiet help you?",
    tags: ["attention", "silence", "creativity"],
  },
  {
    title: "Second-order desire",
    text: "What do you want underneath what you say you want?",
    tags: ["desire", "depth", "clarity"],
  },
  {
    title: "Invisible progress",
    text: "What quiet progress in your life might be easy to miss?",
    tags: ["progress", "self-awareness", "balance"],
  },
  {
    title: "Conversation starter",
    text: "If you started writing today, what topic would you begin with?",
    tags: ["writing", "voice", "journaling"],
  },
  {
    title: "Threshold",
    text: "What in your life feels close to a threshold?",
    tags: ["transition", "future", "courage"],
  },
  {
    title: "Core motive",
    text: "What motive has been driving you lately?",
    tags: ["motives", "truth", "self-discovery"],
  },
  {
    title: "Better question",
    text: "What better question do you need to ask right now?",
    tags: ["questions", "clarity", "thinking"],
  },
]);

function getPromptIndexForDate(dateString, list = prompts) {
  const normalized = Number(String(dateString).replaceAll("-", ""));
  return normalized % list.length;
}

function getPromptForDate(dateString, list = prompts) {
  return list[getPromptIndexForDate(dateString, list)];
}

if (typeof window !== "undefined") {
  window.VELOURA_PROMPTS = prompts;
  window.VELOURA_PROMPT_UTILS = {
    getPromptForDate,
    getPromptIndexForDate,
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    prompts,
    getPromptForDate,
    getPromptIndexForDate,
  };
}
