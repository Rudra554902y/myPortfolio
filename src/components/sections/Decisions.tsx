"use client";

import { motion } from "framer-motion";

export default function Decisions() {
  const decisions = [
    {
      project: "CodeSync.ai",
      choice: "Hybrid Delta Engine + Yjs CRDTs",
      problem: "Transmitting the entire file state on every keystroke exhausts network bandwidth and database write limits, while basic operational transformation (OT) struggles to resolve concurrent editing conflicts without complex centralized authority servers.",
      tradeoff: "We coupled Yjs CRDTs for real-time document typing synchronization with a custom-built DeltaManager on the backend. Socket.IO broadcasts light cursors and typing states, while the DeltaManager computes diff patches, compresses them using gzip (pako), and retains recent actions in a Redis cache. Full checkpoints are written to MongoDB every 20 versions, balancing fast client-side rollbacks with optimized server storage.",
      label: "Distributed State"
    },
    {
      project: "AI PR Review Bot",
      choice: "Chunk-Level AST Hashing vs. File-Level Caching",
      problem: "Pull request edits are usually localized (few lines in a function), but file-level hashing invalidates the cache for the entire file on any change, resulting in expensive, redundant LLM API calls for unaffected code blocks.",
      tradeoff: "Implemented Tree-sitter AST parsing to slice files into individual functions/classes. We compute a hash of each code block's syntax node combined with the model configuration. Redis checks this hash. When a pull request is updated, only the modified functions trigger LLM calls; unchanged functions reuse cached reviews from Redis, reducing API token costs by over 80% on large commits.",
      label: "Compute Optimization"
    },
    {
      project: "AI PR Review Bot",
      choice: "ARQ Queue & Asyncio Webhook Receivers",
      problem: "GitHub expects webhook endpoints to reply with an HTTP 200 OK within 10 seconds. Slicing files, calling parallel LLM APIs, and validation processes often take 15–30 seconds, leading to timeout errors and dropped webhooks.",
      tradeoff: "Built the FastAPI receiver to perform immediate HMAC verification and idempotency checks in Redis, enqueueing the job in an ARQ queue, and replying with a 200 OK within milliseconds. A separate background asyncio worker process pulls the job, fetches the diffs, and manages the API throttling using asyncio.Semaphore.",
      label: "Asynchronous Queueing"
    },
    {
      project: "Ops Agent Hub",
      choice: "FastMCP Tool Separation vs. Hardcoded API Clients",
      problem: "Hardcoding API clients inside LangGraph agent nodes couples the reasoning logic to specific tool libraries, making it difficult to test tools locally or swap external services (like migrating from Slack to Teams).",
      tradeoff: "Implemented Model Context Protocol (FastMCP) to expose tools (database queries, notifications) to the agent. The LangGraph agent outputs structured tool calls following the MCP standard, while the local FastMCP server executes the actual code. This separates LLM reasoning boundaries from side-effect execution blocks, making the architecture highly extensible.",
      label: "Decoupled Orchestration"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 } as any
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } as any
    }
  };

  return (
    <section id="decisions" className="py-24 border-t border-border-custom bg-bg-base">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-[10px] font-mono tracking-widest text-accent-cobalt uppercase">
            04 / Engineering Decisions
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary font-sans leading-tight">
            How I Build: Design & Trade-offs
          </h2>
          <p className="text-sm sm:text-base text-text-secondary font-sans font-light leading-relaxed">
            Real software systems require selecting architectures based on practical constraints, resource limits, and latency budgets.
          </p>
        </div>

        {/* Decisions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {decisions.map((dec) => (
            <motion.div
              key={dec.choice}
              variants={itemVariants}
              className="border border-border-custom bg-bg-base/30 p-6 rounded-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                {/* Meta Labels */}
                <div className="flex items-center justify-between text-[9px] font-mono">
                  <span className="text-accent-cobalt font-bold uppercase tracking-wider">
                    {dec.project}
                  </span>
                  <span className="text-text-secondary border border-border-custom px-1.5 py-0.5 rounded-sm">
                    {dec.label}
                  </span>
                </div>

                {/* Choice Title */}
                <h3 className="text-base font-semibold text-text-primary font-sans">
                  {dec.choice}
                </h3>

                {/* Problem Statement */}
                <div className="pt-2 space-y-1">
                  <span className="text-[9px] font-mono text-text-secondary uppercase tracking-wider block">
                    The Challenge:
                  </span>
                  <p className="text-xs text-text-secondary leading-relaxed font-sans font-light">
                    {dec.problem}
                  </p>
                </div>

                {/* Trade-off Explanation */}
                <div className="pt-2 space-y-1">
                  <span className="text-[9px] font-mono text-text-secondary uppercase tracking-wider block">
                    The Architecture:
                  </span>
                  <p className="text-xs text-text-secondary leading-relaxed font-sans font-light">
                    {dec.tradeoff}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
