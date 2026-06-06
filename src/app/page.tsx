import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { SpendForm } from "@/components/audit/spend-form";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import {
  ArrowRight,
  BadgeDollarSign,
  CircleAlert,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-slate-900">

      <div className="mx-auto flex max-w-6xl flex-col px-6 py-8">

        {/* Navbar */}
        <nav className="flex items-center justify-between">

          <div className="space-y-1">
            <h1 className="text-xl font-semibold tracking-tight">
              Overprompt
            </h1>

            <h4 className="text-sm font-medium text-slate-600">
              AI Spend Audit
            </h4>
          </div>

          <a href="#audit-form">
            <Button className="bg-slate-900 text-white hover:bg-slate-800">
              Run Audit
            </Button>
          </a>

        </nav>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center py-32 text-center">

          {/* Background Glow */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-72 w-72 rounded-full bg-slate-300/30 blur-3xl" />
          </div>

          <div className="max-w-3xl space-y-8">

            {/* Badge */}
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">

              <ShieldCheck className="h-4 w-4" />

              Vendor-neutral AI spend optimization

            </div>

            {/* Heading */}
            <h1 className="text-6xl font-bold leading-tight tracking-tight">

              Your AI Stack Is Probably

              <span className="block text-slate-700">
                Overpriced
              </span>

            </h1>

            {/* Subtext */}
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">

              Audit ChatGPT, Claude, Cursor, Copilot, and API spend
              to uncover redundant subscriptions, workflow mismatches,
              and hidden optimization opportunities.

            </p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-4">

              <a href="#audit-form">
                <Button
                  size="lg"
                  className="gap-2 bg-slate-900 px-6 text-white hover:bg-slate-800"
                >
                  Run Free Audit

                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>

              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 bg-white hover:bg-slate-50"
              >
                View Sample Report
              </Button>

            </div>

          </div>

        </section>

        {/* Preview Section */}
        <section className="mt-8 rounded-[2rem] bg-white/70 p-10 shadow-xl backdrop-blur-sm">

          <div className="mb-10 text-center">

            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Audit Preview
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Example Optimization Report
            </h2>

          </div>

          <div className="flex justify-center">

            <Card className="w-full max-w-3xl rounded-3xl border border-slate-200 shadow-lg">

              <CardContent className="space-y-8 p-8">

                {/* Savings Header */}
                <div className="space-y-3">

                  <div className="flex items-center gap-2 text-slate-500">

                    <BadgeDollarSign className="h-5 w-5" />

                    <p className="text-sm font-medium">
                      Potential Savings
                    </p>

                  </div>

                  <h2 className="text-5xl font-bold tracking-tight">
                    $1,482/month
                  </h2>

                  <p className="text-slate-600">
                    Estimated annual savings: $17,784
                  </p>

                </div>

                {/* Recommendation Cards */}
                <div className="space-y-4">

                  {/* High Severity */}
                  <div className="rounded-2xl border border-red-200 bg-red-50 p-5">

                    <div className="flex items-center justify-between">

                      <p className="font-semibold">
                        Downgrade ChatGPT Team → Plus
                      </p>

                      <span className="rounded-full border border-red-300 px-3 py-1 text-xs font-medium text-red-600">
                        High Severity
                      </span>

                    </div>

                    <p className="mt-2 text-sm text-slate-600">
                      Collaboration features appear underutilized for a
                      2-person workflow.
                    </p>

                  </div>

                  {/* Medium Severity */}
                  <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-5">

                    <div className="flex items-center justify-between">

                      <p className="font-semibold">
                        Consolidate Claude subscriptions
                      </p>

                      <span className="rounded-full border border-yellow-300 px-3 py-1 text-xs font-medium text-yellow-700">
                        Medium Severity
                      </span>

                    </div>

                    <p className="mt-2 text-sm text-slate-600">
                      Multiple overlapping plans detected across similar
                      workflows and research usage patterns.
                    </p>

                  </div>

                  {/* Low Severity */}
                  <div className="rounded-2xl border border-green-200 bg-green-50 p-5">

                    <div className="flex items-center justify-between">

                      <p className="font-semibold">
                        Optimize OpenAI API usage
                      </p>

                      <span className="rounded-full border border-green-300 px-3 py-1 text-xs font-medium text-green-700">
                        Low Severity
                      </span>

                    </div>

                    <p className="mt-2 text-sm text-slate-600">
                      Current API spend slightly exceeds estimated workload
                      requirements.
                    </p>

                  </div>

                </div>

                {/* Footer Note */}
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">

                  <CircleAlert className="mt-0.5 h-5 w-5 text-slate-500" />

                  <p className="text-sm leading-6 text-slate-600">
                    Recommendations are generated using deterministic
                    optimization heuristics based on workflow alignment,
                    pricing efficiency, and subscriptions overlap analysis.
                  </p>

                </div>

              </CardContent>

            </Card>

          </div>

        </section>

        {/* Spend Form */}
        <SpendForm />

        <Analytics />
        <SpeedInsights />

      </div>

    </main>
  );
}