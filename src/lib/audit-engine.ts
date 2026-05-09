import { AuditInput, AuditResult } from "./types";
export function generateAudit(input: AuditInput): AuditResult {
  const { tool, monthlySpend, seats, useCase } = input;

  if (
    (tool === "chatgpt" || tool === "claude") &&
    seats <= 2 &&
    monthlySpend > 50
  ) {
    return {
      recommendation: "Downgrade to individual plans",
      estimatedSavings: 20,
      reason:
        "Collaboration-focused pricing tiers may be unnecessary for small teams.",
      confidence: "high",
    };
  }

  if (tool === "cursor" && useCase !== "coding") {
    return {
      recommendation: "Evaluate workflow-specific alternatives",
      estimatedSavings: 15,
      reason:
        "Cursor's pricing is most efficient for engineering-focused workflows.",
      confidence: "medium",
    };
  }

  if (monthlySpend / seats > 100) {
    return {
      recommendation: "Review enterprise-tier utilization",
      estimatedSavings: 40,
      reason:
        "Current spend per seat appears high relative to typical usage patterns.",
      confidence: "medium",
    };
  }

  return {
    recommendation: "Current setup appears reasonably optimized",
    estimatedSavings: 0,
    reason:
      "No significant savings opportunities detected from the provided inputs.",
    confidence: "low",
  };
}