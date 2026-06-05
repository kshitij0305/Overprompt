import { pricing, PricingProfile } from "@/data/pricing-data";

import { Recommendation } from "./types";

type AuditInput = {
  tool: string;
  monthlySpend: number;
  seats: number;
  useCase: string;
};

type ScoredRecommendation = Recommendation & {
  score: number;
};

const SEVERITY_SCORE = {
  high: 3,
  medium: 2,
  low: 1,
} satisfies Record<Recommendation["severity"], number>;

function normalizeUseCase(useCase: string) {
  return useCase === "data-analysis" ? "data" : useCase;
}

function getPricingProfile(tool: string): PricingProfile {
  return (
    pricing[tool] ?? {
      label: "Selected tool",
      baseline: 20,
      team: 30,
      strongUseCases: ["mixed"],
      acceptableUseCases: ["coding", "writing", "research", "data"],
    }
  );
}

function getWorkflowFit(profile: PricingProfile, useCase: string) {
  if (profile.strongUseCases.includes(useCase)) {
    return "strong";
  }

  if (profile.acceptableUseCases.includes(useCase)) {
    return "acceptable";
  }

  return "weak";
}

function roundSavings(value: number) {
  return Math.max(0, Math.round(value / 5) * 5);
}

function severityFromSavings(
  savings: number,
  monthlySpend: number
): Recommendation["severity"] {
  const savingsRatio = monthlySpend > 0 ? savings / monthlySpend : 0;

  if (savings >= 100 || savingsRatio >= 0.35) {
    return "high";
  }

  if (savings >= 30 || savingsRatio >= 0.18) {
    return "medium";
  }

  return "low";
}

function addRecommendation(
  recommendations: ScoredRecommendation[],
  recommendation: Recommendation
) {
  const savingsScore = recommendation.savings ?? 0;

  recommendations.push({
    ...recommendation,
    score: SEVERITY_SCORE[recommendation.severity] * 100 + savingsScore,
  });
}

export function generateAudit(input: AuditInput) {
  const recommendations: ScoredRecommendation[] = [];
  const monthlySpend = Math.max(0, input.monthlySpend);
  const seats = Math.max(1, input.seats || 1);
  const spendPerSeat = monthlySpend / seats;
  const useCase = normalizeUseCase(input.useCase);
  const profile = getPricingProfile(input.tool);
  const workflowFit = getWorkflowFit(profile, useCase);
  const expectedSeatPrice =
    seats >= 3 && profile.team ? profile.team : profile.baseline;
  const expectedMonthlySpend = expectedSeatPrice * seats;
  const overage = monthlySpend - expectedMonthlySpend;
  const overageRatio =
    expectedMonthlySpend > 0 ? monthlySpend / expectedMonthlySpend : 1;

  if (overage >= 15 && overageRatio >= 1.25) {
    const savings = roundSavings(overage * 0.75);

    addRecommendation(recommendations, {
      title: "Plan cost exceeds benchmark",
      description: `${profile.label} spend is running above the expected ${seats >= 3 ? "team" : "individual"} plan benchmark for this seat count.`,
      confidence: overageRatio >= 1.6 ? "high" : "medium",
      severity: severityFromSavings(savings, monthlySpend),
      savings,
    });
  }

  if (workflowFit === "weak") {
    const savings = roundSavings(
      Math.min(monthlySpend * 0.3, Math.max(15, profile.baseline * seats))
    );

    addRecommendation(recommendations, {
      title: "Workflow mismatch detected",
      description: `${profile.label} is not strongly aligned with the selected workflow, so part of the current spend may be underutilized.`,
      confidence: input.tool === "cursor" || input.tool === "copilot" ? "high" : "medium",
      severity: severityFromSavings(savings, monthlySpend),
      savings,
    });
  }

  if (seats <= 2 && profile.team && monthlySpend > profile.team * 2) {
    const rightSizedSpend = profile.baseline * seats;
    const savings = roundSavings((monthlySpend - rightSizedSpend) * 0.6);

    addRecommendation(recommendations, {
      title: "Review collaboration plan usage",
      description: "The seat count is small enough that a collaboration-oriented plan may not be fully justified.",
      confidence: "medium",
      severity: severityFromSavings(savings, monthlySpend),
      savings,
    });
  }

  if (
    profile.premium &&
    spendPerSeat >= profile.premium * 0.75 &&
    workflowFit !== "strong"
  ) {
    const savings = roundSavings(
      Math.max(0, (spendPerSeat - profile.baseline) * seats * 0.5)
    );

    addRecommendation(recommendations, {
      title: "Premium tier may be underused",
      description: "The spend level resembles a premium plan, but the selected workflow does not clearly require that level of capacity.",
      confidence: "medium",
      severity: severityFromSavings(savings, monthlySpend),
      savings,
    });
  }

  if (
    recommendations.length === 0 &&
    workflowFit === "strong" &&
    monthlySpend <= expectedMonthlySpend * 1.15
  ) {
    addRecommendation(recommendations, {
      title: "Current setup appears efficient",
      description: `${profile.label} appears well matched to the selected workflow and seat count.`,
      confidence: "high",
      severity: "low",
    });
  }

  if (recommendations.length === 0) {
    addRecommendation(recommendations, {
      title: "No major inefficiencies detected",
      description: "Current AI tooling setup appears reasonably aligned with the provided workflow.",
      confidence: "medium",
      severity: "low",
    });
  }

  const sortedRecommendations = recommendations
    .sort((a, b) => b.score - a.score)
    .map<Recommendation>((recommendation) => ({
      title: recommendation.title,
      description: recommendation.description,
      confidence: recommendation.confidence,
      severity: recommendation.severity,
      savings: recommendation.savings,
    }));

  const totalSavings = sortedRecommendations.reduce(
    (acc, rec) => acc + (rec.savings || 0),
    0
  );

  return {
    recommendations: sortedRecommendations,
    estimatedSavings: roundSavings(Math.min(totalSavings, monthlySpend * 0.6)),
  };
}
