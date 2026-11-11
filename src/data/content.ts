import type { IconName } from "../lib/icons";

export const roles = ["AI Engineer", "LLM Engineer", "AI Backend Engineer"] as const;

export const marquee: readonly string[] = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "pgvector",
  "ParadeDB BM25",
  "Redis + Lua",
  "Hybrid RAG",
  "RRF",
  "AsyncIO",
  "Circuit Breakers",
  "Chaos Testing",
  "LLM Evals",
];

export interface SkillGroup {
  title: string;
  icon: IconName;
  items: readonly string[];
}

export const skills: readonly SkillGroup[] = [
  {
    title: "Languages & Core",
    icon: "code",
    items: ["Python", "SQL", "AsyncIO", "Pydantic v2", "pytest", "Ruff"],
  },
  {
    title: "Backend & APIs",
    icon: "server",
    items: [
      "FastAPI",
      "OpenAI-compatible APIs",
      "SQLAlchemy 2 async",
      "Alembic",
      "httpx",
      "Auth & Rate Limiting",
      "Idempotency",
    ],
  },
  {
    title: "Data & Search",
    icon: "database",
    items: ["PostgreSQL", "pgvector (HNSW)", "ParadeDB pg_search (BM25)", "Redis", "Lua Scripting"],
  },
  {
    title: "LLM & Retrieval",
    icon: "sparkles",
    items: [
      "Hybrid RAG",
      "Reciprocal Rank Fusion",
      "Chunking & Embeddings (ONNX Runtime)",
      "PyMuPDF",
      "Structured JSON Output",
      "Citation Verification",
      "Abstention",
      "Groq API",
    ],
  },
  {
    title: "Reliability & Evaluation",
    icon: "chart",
    items: [
      "Backoff + Jitter",
      "Circuit Breakers",
      "Single-flight Caching",
      "Recall@K · MRR · nDCG",
      "LLM-as-a-Judge",
      "Prompt-injection Testing",
      "Chaos & Concurrency Tests",
    ],
  },
  {
    title: "Shipping & Infra",
    icon: "container",
    items: ["Docker & Compose", "GitHub Actions CI/CD", "Caddy HTTPS", "Prometheus Metrics", "Git"],
  },
];

export interface Decision {
  k: string;
  v: string;
}

export interface Project {
  title: string;
  tagline: string;
  status: string;
  tone: "done" | "next";
  bullets: readonly string[];
  decisions: readonly Decision[];
  tags: readonly string[];
  repo?: string; // add the repo URL here and a "View code" button appears
  demo?: string; // add the live URL here and a "Live demo" button appears
}

export const projects: readonly Project[] = [
  {
    title: "Advanced-RAG",
    tagline: "Production PDF question-answering system with hybrid search, verified citations and abstention.",
    status: "Completed",
    tone: "done",
    bullets: [
      "Built a production RAG backend with collection isolation, document status lifecycles, SHA-256 deduplication and scanned-PDF rejection.",
      "Implemented hybrid retrieval: pgvector HNSW dense search plus true BM25 via ParadeDB pg_search, fused with a pure-Python Reciprocal Rank Fusion.",
      "Added structured LLM generation with claim-level citations and normalized quote verification, so the system abstains when evidence is weak.",
      "Built an evaluation harness (Recall@K, MRR, nDCG, LLM-as-a-judge dev loops, held-out test set, ablations) plus a three-stage guardrail and security test suite.",
      "Dockerized with GitHub Actions CI and deployed behind Caddy HTTPS.",
    ],
    decisions: [
      { k: "Lexical search", v: "Real BM25 (pg_search), not Postgres FTS relabeled" },
      { k: "Isolation", v: "Owner + collection filter inside both SQL paths" },
      { k: "Responses", v: "Non-streaming validated JSON so citations can be verified" },
      { k: "Frameworks", v: "No LangChain / LlamaIndex, every line explainable" },
    ],
    tags: ["Python", "FastAPI", "PostgreSQL", "pgvector", "ParadeDB pg_search", "SQLAlchemy", "onnxruntime", "PyMuPDF", "Chainlit", "Docker"],
  },
  {
    title: "ModelGate",
    tagline: "OpenAI-compatible LLM gateway with deterministic routing, atomic budgets and failure-mode engineering.",
    status: "Completed",
    tone: "done",
    bullets: [
      "Built an OpenAI-compatible /v1/chat/completions proxy with tenant isolation, hashed API keys and tiered routing policies.",
      "Engineered atomic daily token budgets in Redis Lua with reserve-then-reconcile and midnight-UTC rollover race protection.",
      "Implemented idempotency locks and distributed single-flight caching to prevent double billing and cache stampedes across workers.",
      "Built exponential backoff with jitter, retry budgets and per-provider circuit breakers with atomic half-open probing.",
      "Validated with a fault-injecting chaos and concurrency suite and a record/replay benchmark harness; instrumented with Prometheus metrics and JSON logs.",
    ],
    decisions: [
      { k: "Routing", v: "Pure deterministic policy function, no ML router" },
      { k: "Budgets", v: "Lua reserve/reconcile with an explicit day_key" },
      { k: "Redis down", v: "Budgets fail closed, cache fails open" },
      { k: "Benchmarks", v: "Record/replay so CI never burns provider quota" },
    ],
    tags: ["Python", "FastAPI", "Redis", "Lua", "PostgreSQL", "httpx", "Prometheus", "Docker", "Chaos Testing"],
  },
];