"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, AlertTriangle, Lightbulb } from "lucide-react";

export default function Decisions() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const decisions = [
    {
      project: "CodeSync.ai",
      choice: "Hybrid Delta Engine + Yjs CRDTs",
      label: "Distributed State",
      why: "To resolve typing conflicts in real-time without bottlenecking client-side latency or overloading database write limits.",
      problem: "Transmitting full file blocks on every keystroke exhausts network throughput. Standard operational transformations (OT) require a complex centralized coordinator, whereas CRDTs scale well but consume high memory if tracking versions continuously.",
      tradeoff: "Saves active synchronization as Yjs binary state trees in Redis memory, and commits compressed gzip delta patches (using pako) to MongoDB. A snapshot checkpoint is committed only every 20 versions, reducing DB write calls by 95% while keeping history rollbacks fast.",
      alternative: "Operational Transformation (OT) via ShareDB. Rejected due to the high server CPU overhead and need for central database synchronization on every change.",
      whenToUse: "When building collaborative developer tools, shared editor canvases, or whiteboards requiring multi-user text merges with high availability."
    },
    {
      project: "AI PR Review Bot",
      choice: "Chunk-Level AST Hashing vs. File-Level Caching",
      label: "Compute Optimization",
      why: "To reduce expensive LLM API token costs by avoiding redundant reviews on unchanged sections of code during commits.",
      problem: "Standard review pipelines cache results at the file level. A single character edit invalidates the cache for the entire file, forcing the system to re-review unchanged classes and functions.",
      tradeoff: "Use Tree-sitter AST parsers to slice code files into independent function/class blocks, hashing each structure. Unchanged nodes skip LLM validation, saving over 80% of token API costs on large pull request modifications.",
      alternative: "Simple line-diff hashing. Rejected because formatting changes (like indentation or line breaks) invalidate line-based checks, whereas AST hashes represent structural changes.",
      whenToUse: "When running automated code analysis, security auditing, or linting jobs where API tokens scale with commit volume."
    },
    {
      project: "AI PR Review Bot",
      choice: "ARQ Queue & Asyncio Webhook Receivers",
      label: "Asynchronous Queueing",
      why: "To prevent webhook timeouts and ensure review task completion regardless of network latency or model limits.",
      problem: "GitHub webhooks require an HTTP response within 10 seconds. Slicing repos, compiling changes, and calling LLM APIs takes 15–30 seconds, causing GitHub to flag the gateway with timeout errors.",
      tradeoff: "FastAPI receiver verifies the HMAC signature and writes an idempotency key to Redis, instantly returning a 200 OK. It delegates the review workload to an ARQ queue managed by asyncio background workers.",
      alternative: "Direct threading or multi-processing inside the web server. Rejected because server restarts terminate active threads, losing pending reviews, and lack rate limiting.",
      whenToUse: "When building event-driven API gateways, webhook listeners, or message receivers that interface with slower downstream APIs."
    },
    {
      project: "Ops Agent Hub",
      choice: "FastMCP Tool Separation vs. Hardcoded Clients",
      label: "Decoupled Orchestration",
      why: "To separate agent decision graphs from tool code, making it easy to test scripts and swap integrations.",
      problem: "Hardcoding API clients inside agent nodes binds the graph logic to specific libraries, making testing difficult and locking the app into single tool providers.",
      tradeoff: "Implement the Model Context Protocol (FastMCP) to expose tools to the agent via JSON-RPC schemas. The LangGraph agent outputs structured tool calls, while the local FastMCP server executes the code.",
      alternative: "Direct SDK invocations (e.g. google-genai tool declarations). Rejected due to tight coupling and lack of secure local execution isolation.",
      whenToUse: "When building multi-agent workflows that read directories, query databases, or execute command line tools dynamically."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 } as any
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any
    }
  };

  return (
    <section id="decisions" className="py-24 border-t border-border-custom bg-bg-base">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-[10px] font-mono tracking-widest text-accent-cobalt uppercase">
            04 / Architecture Logs
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary font-sans leading-tight">
            Engineering Decisions & Trade-offs
          </h2>
          <p className="text-sm sm:text-base text-text-secondary font-sans font-light leading-relaxed">
            Real software systems require selecting architectures based on practical constraints, resource limits, and latency budgets. Click a decision to expand the logs.
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
          {decisions.map((dec, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <motion.div
                key={dec.choice}
                variants={itemVariants}
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                className={`border rounded-sm p-6 cursor-pointer select-none transition-all duration-300 flex flex-col justify-between ${
                  isExpanded 
                    ? "border-text-primary bg-stone-50/50 shadow-sm" 
                    : "border-border-custom bg-bg-base/30 hover:border-text-secondary"
                }`}
              >
                <div className="space-y-4">
                  {/* Card Header Meta */}
                  <div className="flex items-center justify-between text-[9px] font-mono">
                    <span className="text-accent-cobalt font-bold uppercase tracking-wider">
                      {dec.project}
                    </span>
                    <span className="text-text-secondary border border-border-custom px-1.5 py-0.5 rounded-sm">
                      {dec.label}
                    </span>
                  </div>

                  {/* Choice Title */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-semibold text-text-primary font-sans leading-tight">
                      {dec.choice}
                    </h3>
                    <ChevronDown
                      size={16}
                      className={`text-text-secondary flex-shrink-0 transition-transform duration-300 mt-1 ${
                        isExpanded ? "transform rotate-180 text-accent-cobalt" : ""
                      }`}
                    />
                  </div>

                  {/* Why / Impact Statement */}
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-text-secondary uppercase tracking-wider block">
                      The Objective
                    </span>
                    <p className="text-xs text-text-primary font-sans font-medium leading-relaxed">
                      {dec.why}
                    </p>
                  </div>

                  {/* Problem Description */}
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-text-secondary uppercase tracking-wider block">
                      The Constraint
                    </span>
                    <p className="text-xs text-text-secondary leading-relaxed font-sans font-light">
                      {dec.problem}
                    </p>
                  </div>

                  {/* Expanded log panels */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden space-y-4 pt-4 border-t border-border-custom/50 mt-4 text-xs"
                      >
                        {/* Trade-off detail */}
                        <div className="flex items-start space-x-2.5">
                          <AlertTriangle size={14} className="text-accent-alert flex-shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <span className="font-mono text-[9px] text-text-secondary uppercase tracking-wider block">
                              Trade-off Details
                            </span>
                            <p className="text-text-secondary leading-relaxed font-light">
                              {dec.tradeoff}
                            </p>
                          </div>
                        </div>

                        {/* Alternative */}
                        <div className="flex items-start space-x-2.5">
                          <HelpCircle size={14} className="text-text-secondary flex-shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <span className="font-mono text-[9px] text-text-secondary uppercase tracking-wider block">
                              Alternative Evaluated
                            </span>
                            <p className="text-text-secondary leading-relaxed font-light">
                              {dec.alternative}
                            </p>
                          </div>
                        </div>

                        {/* When to use */}
                        <div className="flex items-start space-x-2.5">
                          <Lightbulb size={14} className="text-accent-success flex-shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <span className="font-mono text-[9px] text-accent-success uppercase tracking-wider block">
                              When I would use this
                            </span>
                            <p className="text-text-secondary leading-relaxed font-light">
                              {dec.whenToUse}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
