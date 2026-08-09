export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  approach: string;
  architecture: string;
  technologies: string[];
  keyConcepts: string[];
  achievement?: {
    title: string;
    description: string;
  };
  links: {
    github: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: "codesync",
    name: "CodeSync.ai",
    category: "01 / STATE & DISTRIBUTED COLLABORATION",
    tagline: "Real-Time Collaborative Coding IDE & Versioning Platform",
    problem: "Collaborative web IDEs experience conflict resolution delays, slow timeline rollbacks, and high network payloads when transmitting full files during concurrent edits.",
    solution: "Developed a collaborative editor using Yjs CRDTs for typing sync, integrated with a custom Hybrid Delta Sync Engine (Δ-Engine) that compiles compressed changes and schedules snapshots based on cursor jumps and idle times.",
    approach: "Designed a hybrid protocol: Socket.IO transmits active keys and cursor states, while a custom DeltaManager aggregates diffs, compresses them via pako (gzip), and caches active states in Redis, committing full snapshots to MongoDB every 20 edits.",
    architecture: "Vite React Client ➔ Socket.IO Gateway ➔ Express.js API ➔ Redis Cache Layer ➔ MongoDB DeltaSnapshots. Terminal sessions are bound via node-pty processes on the backend.",
    technologies: ["Yjs", "Socket.IO", "Redis", "React", "Node.js", "MongoDB", "node-pty", "Zustand"],
    keyConcepts: ["Collaborative Editing", "CRDT State Merging", "Delta Compression", "Terminal Stream Emulation"],
    achievement: {
      title: "Pitch Excellence Award — IDE Bootcamp Edition 3, Phase 2",
      description: "Recognized for the collaborative coding concept, synchronization architecture, and its pitch/presentation."
    },
    links: {
      github: "https://github.com/Rudra554902y/codesync",
      demo: "https://codesyncai.vercel.app"
    }
  },
  {
    id: "ops-agent-hub",
    name: "Ops Agent Hub",
    category: "02 / INTELLIGENT OPERATIONAL ORCHESTRATION",
    tagline: "AI-Assisted IT Operations & Workflow Engine",
    problem: "Monolithic IT support RAG pipelines suffer from context dilution, hallucination, lack of audit logging, and fail to handle unstructured scanned documents or human escalations gracefully.",
    solution: "A stateful multi-agent execution graph decoupled from tool clients using the Model Context Protocol (MCP), featuring custom OCR parsing and human-in-the-loop validation.",
    approach: "Created a stateful flow graph with 4 distinct agents (Triage, Knowledge, Action, Validation) using LangGraph. Decoupled core reasoning from external execution via a FastMCP server, allowing the agent to dynamically search vector stores and call external Slack/email tools.",
    architecture: "LangGraph StateGraph ➔ FastMCP Server ➔ ChromaDB Persistent Client. Checkpointed state is validated at a final decision node, routing tickets to automated resolution or human-in-the-loop Slack notification systems.",
    technologies: ["LangGraph", "FastMCP", "ChromaDB", "FastAPI", "Google GenAI SDK", "PyMuPDF"],
    keyConcepts: ["Stateful Graph Routing", "Model Context Protocol", "Gemini OCR/Vision Parsing", "Human-in-the-Loop Escalation"],
    links: {
      github: "https://github.com/Rudra554902y/Ops-Agent-Hub"
    }
  },
  {
    id: "pr-review-bot",
    name: "AI PR Review Bot",
    category: "03 / DEVELOPER AUTOMATION",
    tagline: "Event-Driven AST-Based Code Review Pipeline",
    problem: "Automating pull request code reviews incurs high LLM API costs due to redundant code evaluation, while simple file-level caching invalidates review records on minor single-character edits.",
    solution: "An event-driven FastAPI microservice that parses files into AST blocks with Tree-sitter, calculates structural hashes, and validates edits against a Redis chunk-level cache before queueing parallel review tasks via ARQ.",
    approach: "Created a webhook listener that offloads tasks to an ARQ Redis queue. Files are structurally parsed into classes/functions via Tree-sitter. Redis cache keys are mapped to chunk-level AST hashes, letting unchanged code skip LLM calls, saving API costs on large commits.",
    architecture: "GitHub PR Webhook ➔ FastAPI Webhook Receiver ➔ Redis Idempotency Check ➔ ARQ Background Worker ➔ Tree-Sitter Chunker ➔ Redis Cache Lookup ➔ Parallel LLM Factory ➔ GitHub API suggestions.",
    technologies: ["Tree-sitter", "Redis Cache", "ARQ Queue", "FastAPI", "MongoDB", "asyncio.Semaphore"],
    keyConcepts: ["AST Parsing & Chunking", "Chunk-Level Hash Caching", "Asynchronous Workers", "Webhook Security (HMAC)"],
    links: {
      github: "https://github.com/Rudra554902y/pr-review-agent"
    }
  }
];
