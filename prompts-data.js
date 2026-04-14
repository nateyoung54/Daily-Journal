const prompts = [
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
  {
    title: "Identity",
    text: "What parts of your personality feel most alive lately, and which parts may have gone quiet because your environment no longer calls them forward?",
    tags: ["identity", "energy", "environment"],
  },
  {
    title: "Direction",
    text: "If you stopped measuring progress by speed and started measuring it by depth, what would you change about this season of your life?",
    tags: ["direction", "depth", "tempo"],
  },
  {
    title: "Belonging",
    text: "Where do you currently feel the need to perform, and what would belonging look like if you no longer had to earn it?",
    tags: ["belonging", "truth", "safety"],
  },
  {
    title: "Legacy",
    text: "What do you hope the people closest to you feel in your presence, and how closely does your current way of living create that feeling?",
    tags: ["legacy", "presence", "relationships"],
  },
  {
    title: "Decision making",
    text: "What decision would become obvious if you trusted your own discernment more than the opinions orbiting around you?",
    tags: ["decisions", "discernment", "confidence"],
  },
  {
    title: "Meaning",
    text: "Which part of your life looks stable from the outside but privately asks for reinvention, tenderness, or a deeper form of meaning?",
    tags: ["meaning", "reinvention", "tenderness"],
  },
];

if (typeof window !== "undefined") {
  window.VELOURA_PROMPTS = prompts;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { prompts };
}
