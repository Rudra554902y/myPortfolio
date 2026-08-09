export interface SkillGroup {
  domain: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    domain: "SYSTEMS",
    skills: [
      "REST & RESTful API Design",
      "Real-time Communication (Socket.IO / WebSockets)",
      "Asynchronous Concurrency (Python asyncio / Semaphores)",
      "Event-Driven Architecture (ARQ / Task Queuing)",
      "Distributed State Management & Synchronization"
    ]
  },
  {
    domain: "INTELLIGENT SYSTEMS",
    skills: [
      "Retrieval-Augmented Generation (RAG) Architectures",
      "Decoupled LLM Integration (Claude, GPT, Gemini Client Factories)",
      "Multi-Agent Graph Orchestration (LangGraph)",
      "Model Context Protocol (FastMCP Server/Tool Execution)",
      "Multimodal Ingestion (OCR & Vision Fallback Loading)",
      "Human-in-the-Loop State Gates"
    ]
  },
  {
    domain: "DEVELOPER TOOLS",
    skills: [
      "AST Analysis & Parsing (Tree-sitter)",
      "GitHub API & Webhook Automations",
      "Collaborative Code Sync Engines",
      "Terminal Integration & Streams (node-pty)",
      "Structured JSON Validation & Logging Observability"
    ]
  },
  {
    domain: "APPLICATION ENGINEERING",
    skills: [
      "React.js & Next.js (TypeScript)",
      "FastAPI (Python 3.12)",
      "Node.js & Express.js",
      "Zustand State Management",
      "Vanilla CSS & Tailwind CSS"
    ]
  },
  {
    domain: "DATA & INFRASTRUCTURE",
    skills: [
      "Redis (In-Memory Caching & Idempotency Storage)",
      "ChromaDB & FAISS (Vector Vector-stores)",
      "MongoDB (Asynchronous Motor Drivers)",
      "SQLite (Local Persistent State)",
      "Git & GitHub Version Control",
      "Docker Containerization"
    ]
  }
];
