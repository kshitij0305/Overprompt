interface AuditInput {
  tool: string;
  monthlySpend: number;
  seats: number;
  useCase: string;
}

export function generateAudit(input: AuditInput) {
  const { tool, monthlySpend, seats, useCase } = input;

  if (tool === "chatgpt" && seats <= 2) {
    return {
      recommendation: "Switch to ChatGPT Plus",
      estimatedSavings: 20,
      reason:
        "Team collaboration features appear underutilized for a small workflow.",
      confidence: "high",
    };
  }

  if (tool === "claude" && monthlySpend > 100) {
    return {
      recommendation: "Consolidate Claude subscriptions",
      estimatedSavings: 40,
      reason:
        "Current Claude usage suggests overlapping subscription tiers.",
      confidence: "medium",
    };
  }

  if (tool === "cursor" && useCase === "writing") {
    return {
      recommendation: "Consider ChatGPT Plus instead",
      estimatedSavings: 15,
      reason:
        "Cursor is optimized for development workflows rather than writing-heavy usage.",
      confidence: "medium",
    };
  }

  return {
    recommendation: "Current setup appears reasonably optimized",
    estimatedSavings: 0,
    reason:
      "No significant savings opportunities detected based on the provided inputs.",
    confidence: "low",
  };
}