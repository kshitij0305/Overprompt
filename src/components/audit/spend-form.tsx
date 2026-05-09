"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { generateAudit } from "@/lib/audit-engine";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SpendForm() {
  const [tool, setTool] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [seats, setSeats] = useState("");
  const [useCase, setUseCase] = useState("");
  const [auditResult, setAuditResult] = useState<null | {
    recommendation: string;
    estimatedSavings: number;
    reason: string;
    confidence: string;
    }>(null);
  const handleAudit = () => {
    const audit = generateAudit({
        tool,
        monthlySpend: Number(monthlySpend),
        seats: Number(seats),
        useCase,
    });

    setAuditResult(audit);
  };

  return (
    <section className="flex justify-center py-20">
      <Card className="w-full max-w-2xl rounded-2xl border border-slate-200 shadow-sm">
        <CardContent className="space-y-6 p-8">
          <div>
            <h2 className="text-2xl font-semibold">
              Run Your AI Spend Audit
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Enter your current AI tooling setup to receive optimization
              recommendations.
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Tool
              </label>

              <Select onValueChange={setTool}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a tool" />
                </SelectTrigger>

                <SelectContent className="bg-black text-white">
                  <SelectItem value="chatgpt">
                    ChatGPT
                  </SelectItem>

                  <SelectItem value="claude">
                    Claude
                  </SelectItem>

                  <SelectItem value="cursor">
                    Cursor
                  </SelectItem>

                  <SelectItem value="copilot">
                    GitHub Copilot
                  </SelectItem>

                  <SelectItem value="gemini">
                    Gemini
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Monthly Spend ($)
              </label>

              <Input
                type="number"
                placeholder="200"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(e.target.value)}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Number of Seats
              </label>

              <Input
                type="number"
                placeholder="5"
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Primary Use Case
              </label>

              <Select onValueChange={setUseCase}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a use case" />
                </SelectTrigger>

                <SelectContent className="bg-black text-white">
                  <SelectItem value="coding">
                    Coding
                  </SelectItem>

                  <SelectItem value="writing">
                    Writing
                  </SelectItem>

                  <SelectItem value="research">
                    Research
                  </SelectItem>

                  <SelectItem value="data-analysis">
                    Data Analysis
                  </SelectItem>

                  <SelectItem value="mixed">
                    Mixed
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            onClick={handleAudit}
            className="w-full bg-slate-900 text-white hover:bg-slate-800"
          >
            Generate Audit
          </Button>
          {auditResult && (
  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
    
    <div className="space-y-2">
      <p className="text-sm font-medium text-slate-500">
        Audit Result
      </p>

      <h3 className="text-2xl font-semibold">
        {auditResult.recommendation}
      </h3>

      <p className="text-slate-600">
        {auditResult.reason}
      </p>
    </div>

    <div className="mt-6 flex items-center justify-between">
      
      <div>
        <p className="text-sm text-slate-500">
          Estimated Savings
        </p>

        <p className="text-3xl font-bold">
          ${auditResult.estimatedSavings}/mo
        </p>
      </div>

      <div className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium">
        {auditResult.confidence} confidence
      </div>

    </div>
  </div>
)}
        </CardContent>
      </Card>
    </section>
  );
}