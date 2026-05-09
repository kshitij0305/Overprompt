export type ToolName =
  | "ChatGPT"
  | "Claude"
  | "Cursor"
  | "GitHub Copilot"
  | "Gemini"
  | "OpenAI API"
  | "Anthropic API";

export type UseCase =
  | "coding"
  | "writing"
  | "research"
  | "data"
  | "mixed";

export interface AuditInput {
  tool: ToolName;
  plan: string;
  monthlySpend: number;
  seats: number;
  useCase: UseCase;
}

export interface AuditRecommendation {
  tool: ToolName;
  currentSpend: number;
  recommendedSpend: number;
  estimatedSavings: number;
  recommendation: string;
  reason: string;
  confidence: "high" | "medium" | "low";
}