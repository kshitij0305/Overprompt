import { Recommendation } from "./types";

type AuditInput = {
  tool: string;
  monthlySpend: number;
  seats: number;
  useCase: string;
};

export function generateAudit(input: AuditInput) {
  const recommendations: Recommendation[] = [];

  const spendPerSeat =
    input.seats > 0
      ? input.monthlySpend / input.seats
      : input.monthlySpend;

  /*
    WORKFLOW FIT
  */

  if (
    input.tool === "cursor" &&
    input.useCase !== "coding"
  ) {
    recommendations.push({
  title: "Workflow mismatch detected",
  description:
    "Cursor is optimized for engineering-heavy workflows. Your selected use case may not fully utilize its capabilities.",
  confidence: "high",
  severity: "high",
  savings: 20,
});
  }

  /*
    SUBSCRIPTION EFFICIENCY
  */

  if (spendPerSeat > 40) {
    recommendations.push({
  title: "High spend per seat",
  description:
    "Current AI tooling cost per seat appears unusually high compared to typical usage patterns.",
  confidence: "medium",
  severity: "medium",
  savings: Math.round(input.monthlySpend * 0.2),
});
  }

  /*
    TEAM SIZE LOGIC
  */

  if (
    input.tool === "chatgpt" &&
    input.seats <= 2 &&
    input.monthlySpend > 50
  ) {
    recommendations.push({
  title: "Review collaboration plan usage",
  description:
    "Your current setup may be overprovisioned for a small team workflow.",
  confidence: "medium",
  severity: "medium",
  savings: 30,
});
  }

  /*
    CLAUDE RESEARCH WORKFLOW
  */

  if (
    input.tool === "claude" &&
    input.useCase === "research"
  ) {
    recommendations.push({
  title: "Strong workflow alignment",
  description:
    "Claude appears appropriately aligned for long-context and research-heavy workflows.",
  confidence: "high",
  severity: "low",
});
  }

  /*
    CURSOR + LIGHTWEIGHT USAGE
  */

  if (
    input.tool === "cursor" &&
    input.monthlySpend <= 20 &&
    input.useCase === "coding"
  ) {
    recommendations.push({
  title: "Current setup appears efficient",
  description:
    "Your tooling configuration appears appropriately matched to your workflow needs.",
  confidence: "high",
  severity: "low",
});
  }

  /*
    FALLBACK
  */

  if (recommendations.length === 0) {
    recommendations.push({
  title: "No major inefficiencies detected",
  description:
    "Current AI tooling setup appears reasonably aligned with the provided workflow.",
  confidence: "medium",
  severity: "low",
});
  }

  const estimatedSavings = recommendations.reduce(
    (acc, rec) => acc + (rec.savings || 0),
    0
  );

  return {
    recommendations,
    estimatedSavings,
  };
}