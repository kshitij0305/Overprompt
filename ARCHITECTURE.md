# Architecture Overview

## Project Goal

The goal of this project is to build a lightweight SaaS-style application that audits AI tool spending and generates optimization recommendations based on workflow fit, pricing efficiency, and plan utilization.

The application is intentionally designed as a fast-moving MVP rather than a fully productionized enterprise system. The focus is on believable product logic, clean UX, and explainable recommendations instead of overly complex infrastructure.

---

# Tech Stack

## Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Deployment
- Vercel

---

# High-Level Architecture

The application currently follows a simple frontend-first architecture.

User input flows through:
1. UI form components
2. Local React state
3. Audit recommendation engine
4. Dynamic result rendering

At this stage, there is no backend database or authentication layer because the primary goal was validating the core product loop quickly.

---

# Folder Structure

```txt
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   └── audit/
│       └── spend-form.tsx
│
├── lib/
│   ├── audit-engine.ts
│   ├── pricing.ts
│   ├── types.ts
│   └── utils.ts
│
└── data/
    └── pricing-data.ts