export type PricingProfile = {
  label: string;
  baseline: number;
  team?: number;
  premium?: number;
  strongUseCases: string[];
  acceptableUseCases: string[];
};

export const pricing: Record<string, PricingProfile> = {
  chatgpt: {
    label: "ChatGPT",
    baseline: 20,
    team: 30,
    premium: 200,
    strongUseCases: ["writing", "research", "mixed"],
    acceptableUseCases: ["coding", "data"],
  },
  claude: {
    label: "Claude",
    baseline: 20,
    team: 30,
    premium: 100,
    strongUseCases: ["writing", "research"],
    acceptableUseCases: ["coding", "data", "mixed"],
  },
  cursor: {
    label: "Cursor",
    baseline: 20,
    team: 40,
    strongUseCases: ["coding"],
    acceptableUseCases: ["mixed"],
  },
  copilot: {
    label: "GitHub Copilot",
    baseline: 10,
    team: 19,
    premium: 39,
    strongUseCases: ["coding"],
    acceptableUseCases: ["mixed"],
  },
  gemini: {
    label: "Gemini",
    baseline: 20,
    strongUseCases: ["research", "writing", "mixed"],
    acceptableUseCases: ["coding", "data"],
  },
};
