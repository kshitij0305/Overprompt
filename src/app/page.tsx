import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SpendForm } from "@/components/audit/spend-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col px-6 py-8">
        
        {/* Navbar */}
        <nav className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-xl font-semibold">Overprompt</h1>
            <h4 className="text-sm font-medium text-slate-600">
              AI Spend Audit
            </h4>
          </div>

          <Button className="bg-slate-900 text-white hover:bg-slate-800">Run Audit</Button>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center py-24 text-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl font-bold leading-tight tracking-tight">
              Your AI Stack Is Probably Overpriced
            </h1>

            <p className="text-lg text-slate-600">
              Audit ChatGPT, Claude, Cursor, Copilot, and API spend
              to uncover unnecessary costs and optimization opportunities.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
                Run Free Audit
              </Button>

              <Button variant="outline"  size="lg">
                View Sample Report
              </Button>
            </div>
          </div>
        </section>

        {/* Preview Card */}
        <section className="flex justify-center shadow-2xl p-12 mt-12">
          <Card className="w-full max-w-2xl rounded-2xl border border-slate-200 shadow-sm">
            <CardContent className="space-y-6 p-8">
              <p className="text-sm font-medium text-slate-500">
                Audit Preview</p>
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Potential Savings
                </p>

                <h2 className="mt-2 text-5xl font-bold">
                  $1,482/mo
                </h2>

                <p className="mt-2 text-slate-600">
                  Estimated annual savings: $17,784
                </p>
              </div>

              <div className="space-y-4">
                
                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="font-medium">
                    Downgrade ChatGPT Team → Plus
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    Collaboration features appear underutilized for a 2-person workflow.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="font-medium">
                    Consolidate Claude subscriptions
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    Multiple overlapping plans detected across similar use cases.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="font-medium">
                    Optimize OpenAI API usage
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    Current API spend exceeds estimated workload requirements.
                  </p>
                </div>

              </div>
            </CardContent>
          </Card>
        </section>
        <SpendForm />

      </div>
    </main>
  );
}