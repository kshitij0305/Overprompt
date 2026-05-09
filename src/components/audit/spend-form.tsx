"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function SpendForm() {
  return (
    <section className="flex justify-center py-20">
      <Card className="w-full max-w-2xl rounded-2xl border border-slate-200 shadow-sm">
        <CardContent className="space-y-6 p-8">
          
          <div>
            <h2 className="text-2xl font-semibold">
              Run Your AI Spend Audit
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Enter your current AI tooling setup to receive optimization recommendations.
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Tool
              </label>

              <Input placeholder="e.g. ChatGPT Team" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Monthly Spend ($)
              </label>

              <Input type="number" placeholder="200" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Number of Seats
              </label>

              <Input type="number" placeholder="5" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Primary Use Case
              </label>

              <Input placeholder="coding / research / writing" />
            </div>

          </div>

          <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">
            Generate Audit
          </Button>

        </CardContent>
      </Card>
    </section>
  );
}