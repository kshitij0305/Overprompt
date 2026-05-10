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
  tool: string;
  monthlySpend: number;
  seats: number;
  useCase: string;
}

export interface AuditResult {
  recommendation: string;
  estimatedSavings: number;
  reason: string;
  confidence: string;
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
export type Recommendation = {
  title: string;
  description: string;
  confidence: "low" | "medium" | "high";
  savings?: number;
};