const prompts = Object.freeze([
  {
    title: "State of mind",
    text: "What has felt most present in your inner life lately, and what have you been too busy to properly notice about how you are actually doing?",
    tags: ["check-in", "self-awareness", "present"],
  },
  {
    title: "Energy audit",
    text: "Which parts of your current life consistently leave you more energized, and which parts quietly drain you even when they look productive from the outside?",
    tags: ["energy", "clarity", "present"],
  },
  {
    title: "Assumption check",
    text: "What assumption are you currently making about your work, your future, or yourself that may be shaping your choices more than it deserves to?",
    tags: ["assumptions", "clarity", "thinking"],
  },
  {
    title: "Quiet enjoyment",
    text: "What have you genuinely been enjoying lately, and where have you been dismissing that enjoyment because it does not seem important enough to count?",
    tags: ["joy", "awareness", "present"],
  },
  {
    title: "Restlessness",
    text: "Where in your life do you feel a subtle restlessness right now, and what might that feeling be trying to tell you before it becomes louder?",
    tags: ["signals", "intuition", "present"],
  },
  {
    title: "Writing voice",
    text: "If you wrote more often without trying to impress anyone, what subjects, observations, or questions would you naturally keep returning to?",
    tags: ["writing", "self-discovery", "voice"],
  },
  {
    title: "Future gratitude",
    text: "Imagine yourself one year from now feeling quietly proud of this season. What would that version of you be grateful you started paying attention to today?",
    tags: ["future", "gratitude", "direction"],
  },
  {
    title: "Unquestioned pace",
    text: "What part of your life have you accepted as fast, busy, or intense by default, and what would change if you challenged that pace instead of adapting to it?",
    tags: ["tempo", "assumptions", "design"],
  },
  {
    title: "Missed pattern",
    text: "What pattern keeps repeating in your life or work that may connect dots you have noticed separately but not yet interpreted together?",
    tags: ["patterns", "insight", "connection"],
  },
  {
    title: "Business curiosity",
    text: "What problem do you keep noticing in your own life that might be frustrating enough, repeated enough, or meaningful enough to become a business idea?",
    tags: ["business", "ideas", "observation"],
  },
  {
    title: "False urgency",
    text: "What currently feels urgent but may not actually be important, and what important thing keeps getting postponed because urgency keeps winning?",
    tags: ["priorities", "clarity", "discipline"],
  },
  {
    title: "Present self",
    text: "What does your life look like on the surface right now, and what is the truer internal version of that story that only you can see?",
    tags: ["self-awareness", "truth", "present"],
  },
  {
    title: "Idea capture",
    text: "What kinds of ideas come to you most often when you are walking, resting, or showering, and what would it look like to build a real system for not losing them?",
    tags: ["ideas", "systems", "writing"],
  },
  {
    title: "Identity drift",
    text: "Which parts of yourself have become more defined recently, and which parts may be fading because your current routines no longer make space for them?",
    tags: ["identity", "routines", "growth"],
  },
  {
    title: "Useful discomfort",
    text: "What discomfort in your life right now might actually be evidence that you are approaching something important rather than evidence that you should retreat?",
    tags: ["courage", "growth", "discernment"],
  },
  {
    title: "Creative tension",
    text: "What have you been wanting to write, build, or say that keeps pressing on you, and what has made it easier to defer than to begin?",
    tags: ["writing", "creation", "resistance"],
  },
  {
    title: "Signal versus noise",
    text: "What inputs have been shaping your thinking lately, and which of them are clarifying your mind versus crowding it?",
    tags: ["attention", "clarity", "inputs"],
  },
  {
    title: "Personal metric",
    text: "If you stopped measuring this season by output alone, what more honest measure of progress would help you understand whether life is actually going well?",
    tags: ["metrics", "reflection", "design"],
  },
  {
    title: "Idea lens",
    text: "What kinds of inefficiencies, emotional pain points, or broken experiences do you notice faster than other people, and what might that reveal about the kinds of businesses you should explore?",
    tags: ["business", "patterns", "strengths"],
  },
  {
    title: "Relationship with time",
    text: "How have you been relating to time lately: chasing it, wasting it, fearing it, honoring it, or filling it, and what does that reveal about your current state?",
    tags: ["time", "awareness", "present"],
  },
  {
    title: "Open loop",
    text: "What unanswered question about your life keeps quietly returning, and what would happen if you gave it more respect instead of brushing past it again?",
    tags: ["questions", "self-discovery", "attention"],
  },
  {
    title: "Future experiment",
    text: "What is one small experiment you could run in the next two weeks that would teach you something real about your interests, your writing, or a possible business direction?",
    tags: ["future", "experiments", "action"],
  },
  {
    title: "Emotional weather",
    text: "What emotional tone has been following you most days recently, and what situations seem to intensify or soften it?",
    tags: ["emotions", "patterns", "present"],
  },
  {
    title: "Deeper honesty",
    text: "Where are you currently telling a convenient story about your life that protects you from a more uncomfortable but useful truth?",
    tags: ["truth", "assumptions", "depth"],
  },
  {
    title: "Writing practice",
    text: "If writing became a regular part of your life, what role would you want it to play: self-understanding, idea generation, creative expression, public thinking, or something else?",
    tags: ["writing", "system", "future"],
  },
  {
    title: "Hidden appetite",
    text: "What do you want more of in this season that you have not fully admitted to yourself yet?",
    tags: ["desire", "clarity", "future"],
  },
  {
    title: "Current season",
    text: "What is this season of your life really about beneath the schedule, tasks, and noise, and what lesson seems to be asking for your attention?",
    tags: ["meaning", "present", "direction"],
  },
  {
    title: "Ignored evidence",
    text: "What evidence about yourself have you already gathered through lived experience that contradicts a limiting belief you still carry?",
    tags: ["beliefs", "self-trust", "evidence"],
  },
  {
    title: "Natural output",
    text: "When you feel most alive intellectually, what are you doing: noticing patterns, explaining ideas, building systems, telling stories, solving problems, or something else?",
    tags: ["strengths", "writing", "work"],
  },
  {
    title: "Business instinct",
    text: "If you had to bet on one area of your curiosity becoming commercially meaningful over the next few years, what would you choose and why?",
    tags: ["business", "future", "judgment"],
  },
  {
    title: "What to stop",
    text: "What habit of thought, routine, or commitment has outlived its usefulness but still occupies space in your life because ending it would require clarity?",
    tags: ["editing", "clarity", "courage"],
  },
  {
    title: "Dot connection",
    text: "What experiences, interests, skills, and frustrations from different parts of your life may actually belong to the same larger thread?",
    tags: ["patterns", "career", "connection"],
  },
  {
    title: "Conversation with self",
    text: "If you treated your journal less like a record and more like a conversation, what are you most needing it to help you understand right now?",
    tags: ["journaling", "writing", "self-discovery"],
  },
  {
    title: "Work that fits",
    text: "What kind of work would feel more like a natural extension of who you are becoming, instead of just a continuation of who you have been?",
    tags: ["career", "identity", "future"],
  },
  {
    title: "Unlived idea",
    text: "What idea about how you want to live has remained mostly theoretical, and what would begin to make it real?",
    tags: ["future", "action", "alignment"],
  },
  {
    title: "Gentle inventory",
    text: "What feels healthy, alive, and quietly good in your life right now that deserves more appreciation before your attention moves on again?",
    tags: ["gratitude", "present", "balance"],
  },
  {
    title: "Stance",
    text: "What is something you already know about your life that you keep treating like an open question because deciding would force change?",
    tags: ["decision", "clarity", "courage"],
  },
  {
    title: "Current appetite",
    text: "What are you hungry for intellectually, creatively, emotionally, or spiritually right now, and how much space does your life actually make for it?",
    tags: ["desire", "energy", "present"],
  },
  {
    title: "Borrowed goals",
    text: "Which goals in your life feel genuinely chosen, and which may have been absorbed from other people without enough examination?",
    tags: ["goals", "assumptions", "identity"],
  },
  {
    title: "Writing material",
    text: "What have you been noticing recently that could become a worthwhile paragraph, essay, or idea if you trusted it enough to develop it?",
    tags: ["writing", "ideas", "observation"],
  },
  {
    title: "Inner friction",
    text: "Where are you experiencing friction in your life right now, and what if that friction is information rather than inconvenience?",
    tags: ["signals", "patterns", "awareness"],
  },
  {
    title: "Self-respect",
    text: "What would a more self-respecting version of you stop tolerating, and what would that shift quietly improve?",
    tags: ["self-respect", "boundaries", "clarity"],
  },
  {
    title: "Interesting problems",
    text: "What kinds of problems reliably pull your attention, and what does that reveal about what you may be built to explore more deeply?",
    tags: ["curiosity", "patterns", "work"],
  },
  {
    title: "Narrative audit",
    text: "What story have you been telling yourself about this season of life, and what parts of that story feel fully true versus emotionally convenient?",
    tags: ["story", "truth", "reflection"],
  },
  {
    title: "Underused strength",
    text: "What strength do you possess that your current routines barely use, and how might your days feel different if that strength had more room?",
    tags: ["strengths", "routines", "design"],
  },
  {
    title: "Attention trail",
    text: "If someone looked only at what has held your attention over the last month, what would they conclude you truly care about?",
    tags: ["attention", "values", "clarity"],
  },
  {
    title: "Private conviction",
    text: "What do you privately believe about how you want to live that you have not yet organized your life around?",
    tags: ["beliefs", "alignment", "future"],
  },
  {
    title: "Momentum source",
    text: "When you feel real momentum, where does it usually come from: clarity, pressure, excitement, structure, fear, or something else?",
    tags: ["momentum", "self-knowledge", "patterns"],
  },
  {
    title: "Future material",
    text: "What are you living through right now that might later become meaningful material for your writing or thinking?",
    tags: ["writing", "meaning", "present"],
  },
  {
    title: "Low-grade dissatisfaction",
    text: "What part of your life is not dramatically wrong but quietly not right, and why have you accepted that gap for as long as you have?",
    tags: ["dissatisfaction", "truth", "depth"],
  },
  {
    title: "Directional signal",
    text: "What recurring thought, image, desire, or frustration keeps pointing you in a direction you have not fully honored yet?",
    tags: ["direction", "intuition", "future"],
  },
  {
    title: "Sharp observation",
    text: "What have you seen recently about people, work, technology, or culture that feels true but under-discussed?",
    tags: ["observation", "writing", "ideas"],
  },
  {
    title: "Emotional truth",
    text: "What emotion have you been translating too quickly into productivity, humor, distraction, or analysis instead of actually feeling it?",
    tags: ["emotions", "awareness", "honesty"],
  },
  {
    title: "System gap",
    text: "Where do you most need a better system in your life right now, and what would that system protect or unlock for you?",
    tags: ["systems", "clarity", "design"],
  },
  {
    title: "Useful question",
    text: "What question, if you kept returning to it for the next month, might significantly improve the way you live or think?",
    tags: ["questions", "thinking", "growth"],
  },
  {
    title: "Present witness",
    text: "What have you experienced recently that you do not want to forget, and what would it mean to become a better witness to your own life?",
    tags: ["presence", "memory", "writing"],
  },
  {
    title: "Risk worth taking",
    text: "What kind of risk feels increasingly necessary for your growth, even if it still feels premature or inconvenient?",
    tags: ["risk", "growth", "future"],
  },
  {
    title: "Thought pattern",
    text: "Which thought pattern shows up often enough that it may deserve to be studied rather than obeyed?",
    tags: ["mindset", "patterns", "awareness"],
  },
  {
    title: "Unmade choice",
    text: "What decision are you still trying to avoid by gathering more thoughts instead of choosing a direction?",
    tags: ["decision", "clarity", "action"],
  },
  {
    title: "Creative honesty",
    text: "What would you create more consistently if you stopped assuming it needed to be impressive before it could be worth making?",
    tags: ["creation", "writing", "resistance"],
  },
  {
    title: "Lifestyle design",
    text: "If you were designing your days around the kind of mind and life you want, what would you add, remove, or protect first?",
    tags: ["design", "habits", "future"],
  },
  {
    title: "Real satisfaction",
    text: "What makes a day feel genuinely satisfying to you, and how often are you structuring life around that knowledge?",
    tags: ["satisfaction", "awareness", "design"],
  },
  {
    title: "Blind spot",
    text: "What possibility might be available to you now that you keep overlooking because it does not match the plan you originally had?",
    tags: ["possibility", "assumptions", "future"],
  },
  {
    title: "Thought worth sharing",
    text: "What idea or observation feels true enough that you could imagine shaping it into something worth sharing with other people?",
    tags: ["writing", "voice", "ideas"],
  },
  {
    title: "Deeper preference",
    text: "What do your actual preferences reveal about you that your stated preferences sometimes hide?",
    tags: ["preferences", "identity", "truth"],
  },
  {
    title: "Emotional pattern",
    text: "What situations most reliably trigger defensiveness, envy, urgency, or contraction in you, and what might they be pointing toward?",
    tags: ["emotions", "patterns", "insight"],
  },
  {
    title: "Useful boredom",
    text: "Where have you been reaching for stimulation too quickly, and what might emerge if you stayed with a little more boredom or quiet?",
    tags: ["attention", "silence", "creativity"],
  },
  {
    title: "Second-order desire",
    text: "What do you want underneath what you say you want?",
    tags: ["desire", "depth", "clarity"],
  },
  {
    title: "Invisible progress",
    text: "What progress may already be happening in your life that is easy to miss because it is internal, subtle, or not easily measured?",
    tags: ["progress", "self-awareness", "balance"],
  },
  {
    title: "Conversation starter",
    text: "If your next piece of writing began as a conversation with yourself, what topic would feel both honest and alive enough to begin with?",
    tags: ["writing", "voice", "journaling"],
  },
  {
    title: "Threshold",
    text: "What in your life feels like it is approaching a threshold, and what would crossing it require from you?",
    tags: ["transition", "future", "courage"],
  },
  {
    title: "Core motive",
    text: "What motive has been driving you lately more than you want to admit: curiosity, fear, ambition, approval, security, love, or something else?",
    tags: ["motives", "truth", "self-discovery"],
  },
  {
    title: "Better question",
    text: "What if the right question is not 'What should I do next?' but something more precise; what might that better question be?",
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
