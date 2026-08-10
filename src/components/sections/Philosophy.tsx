"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Shield, Database, RefreshCw, Cpu, GitBranch, CheckCircle, Terminal } from "lucide-react";

export default function Philosophy() {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedConcern, setExpandedConcern] = useState<string | null>(null);

  const steps = [
    {
      title: "MODEL",
      desc: "The generative layer. A reasoning compiler translating abstract inputs to potential actions.",
      technical: "Claude / GPT / Gemini Client Factories"
    },
    {
      title: "CONTEXT",
      desc: "Information grounding. Injecting syntax AST blocks and DB queries (RAG) to frame model logic.",
      technical: "ChromaDB / Tree-sitter AST Chunks"
    },
    {
      title: "STATE",
      desc: "Replication engines. Synchronizing editor document trees and user inputs concurrently across websockets.",
      technical: "Yjs CRDTs / Socket.IO Synced State"
    },
    {
      title: "TOOLS",
      desc: "MCP execution. Letting models safely query databases, execute local scripts, and interact with systems.",
      technical: "Model Context Protocol JSON-RPC"
    },
    {
      title: "WORKFLOW",
      desc: "Stateful routing. Managing LangGraph agent states, task worker queues, and async operations.",
      technical: "LangGraph StateGraph / ARQ Redis Queues"
    },
    {
      title: "VALIDATION",
      desc: "Security filters. Gating decisions behind HMAC signature verification, schemas, and human review.",
      technical: "HMAC Audits / Human-in-the-Loop Slack Gates"
    },
    {
      title: "RESULT",
      desc: "Deterministic outcomes. Committing code suggestions, syncing editors, and completing operations.",
      technical: "AST Checkpoints / Webhook Resolution"
    }
  ];

  const concerns = [
    {
      id: "state",
      num: "01",
      title: "STATE",
      subtitle: "Distributed and collaborative state",
      desc: "Synchronizing real-time document editing. Designing hybrid delta replication protocols and CRDT state-merging layers.",
      whyItMatters: "Typing conflicts and full-document retransmits destroy connection latency and exhaust storage limits on active collaborative workspaces.",
      howIApproachIt: "Decouple active real-time typing sync (handling it client-side with Yjs CRDTs) from cold storage writes. Keep a hybrid Delta Manager that compiles patch diffs in Redis and commits compressed snapshots to MongoDB only on idle states or cursor jumps.",
      examples: "CodeSync.ai: Yjs merging for live editor typing, Socket.IO channels for ephemeral cursors, and DeltaManager snap checks."
    },
    {
      id: "orchestration",
      num: "02",
      title: "ORCHESTRATION",
      subtitle: "Coordinating models, tools and workflows",
      desc: "Decoupling intelligence from execution. Building stateful graph routers and standardized protocol hosts.",
      whyItMatters: "Hardcoding tool calls inside model prompts makes backend services fragile, while simple chat-loop pipelines fail to coordinate multi-agent processes.",
      howIApproachIt: "Design graphs (using LangGraph) where each node represents a single task-specialized agent. Use the Model Context Protocol (FastMCP) to expose tools to the agent, keeping the core LLM execution decoupled from system operations.",
      examples: "Ops Agent Hub: LangGraph ticket classifier routing tickets dynamically to ChromaDB knowledge lookups and external Slack notifications."
    },
    {
      id: "automation",
      num: "03",
      title: "AUTOMATION",
      subtitle: "Moving expensive work into reliable pipelines",
      desc: "Executing complex workloads asynchronously. Deploying background workers and idempotency filters.",
      whyItMatters: "API timeouts (e.g. GitHub webhooks require response in 10s) and redundant LLM client invocations generate massive infrastructure costs and user delays.",
      howIApproachIt: "Implement event-driven microservices. The webhook listener validates inputs immediately and enqueues the job into an ARQ queue, enabling the endpoint to return a 200 OK instantly. Background workers poll the queue to execute tasks.",
      examples: "AI PR Review Bot: FastAPI webhook parser with Redis idempotency filters and ARQ asyncio queues executing reviews asynchronously."
    },
    {
      id: "validation",
      num: "04",
      title: "VALIDATION",
      subtitle: "Checking outputs before they become actions",
      desc: "Enforcing security boundaries. Auditing code AST structures and setting up human approval gates.",
      whyItMatters: "AI models are probabilistic and hallucinate. Allowing an LLM to directly write code, query databases, or resolve tickets without verification is highly risky.",
      howIApproachIt: "Build syntactic and operational check gates. Use Tree-sitter parsers to analyze code syntax before execution. For database actions or ticket resolutions, pause graph execution at a gate until approved via Slack notifications.",
      examples: "Ops Agent Hub validation nodes that halt automatic ticket closing; PR Review Bot webhook HMAC check."
    },
    {
      id: "tooling",
      num: "05",
      title: "DEVELOPER TOOLING",
      subtitle: "Making complex engineering workflows easier to operate",
      desc: "Improving development speed. Slicing massive code changes and caching localized chunk results.",
      whyItMatters: "Reviewing large commits wastes developer time and runs up high API tokens. Replicating complete local terminal environments on the web is resource-intensive.",
      howIApproachIt: "Build AST-level chunking to analyze source code at function levels. Cache code chunks based on syntax tree hashes in Redis. Integrate Node pty terminals to replicate active command shells securely in the browser.",
      examples: "PR Review Bot's Tree-sitter chunk caching; CodeSync's node-pty terminal stream integration."
    }
  ];

  return (
    <section id="systems" className="py-24 border-t border-border-custom bg-bg-base">
      <div className="max-w-6xl mx-auto px-6 space-y-28">
        
        {/* PART 1: BEYOND THE MODEL LAYERS (INTERACTIVE SCROLL EXPERIENCE) */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Sticky Visual Panel (Desktop only, hidden on mobile) */}
            <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-32 h-[380px] border border-border-custom bg-bg-base/30 p-6 rounded-sm space-y-4">
              <div className="flex items-center justify-between text-[10px] font-mono text-text-secondary uppercase">
                <span>Execution Pipeline Visual</span>
                <span className="text-accent-cobalt font-bold">Layer 0{activeStep + 1}</span>
              </div>
              
              <div className="h-[260px] bg-bg-base border border-border-custom/50 rounded flex items-center justify-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex flex-col items-center justify-center p-6 text-center"
                  >
                    {activeStep === 0 && <ModelVisual />}
                    {activeStep === 1 && <ContextVisual />}
                    {activeStep === 2 && <StateVisual />}
                    {activeStep === 3 && <ToolsVisual />}
                    {activeStep === 4 && <WorkflowVisual />}
                    {activeStep === 5 && <ValidationVisual />}
                    {activeStep === 6 && <ResultVisual />}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="text-center">
                <p className="text-[10px] font-mono text-accent-cobalt font-bold uppercase">
                  Current Subsystem: {steps[activeStep].technical}
                </p>
              </div>
            </div>

            {/* Right Column: Scroll Content (MODEL, CONTEXT, etc.) */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4 max-w-lg lg:pb-8">
                <span className="text-[10px] font-mono tracking-widest text-accent-cobalt uppercase">
                  01 / Engineering Philosophy
                </span>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary font-sans leading-tight">
                  Beyond the Model.
                </h2>
                <p className="text-sm text-text-secondary font-sans font-light leading-relaxed">
                  A large language model is only one component of an intelligent system. 
                  The engineering around it determines how context is retrieved, state is maintained, actions are executed, workflows are coordinated, and results are validated.
                </p>
              </div>

              {/* Vertical sequence - triggers active step in sticky panel */}
              <div className="relative pl-2 lg:pl-0 space-y-8">
                {/* Connecting line */}
                <div className="absolute left-[13px] top-4 bottom-4 w-[1px] bg-border-custom" />

                {steps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <motion.div
                      key={step.title}
                      onViewportEnter={() => setActiveStep(idx)}
                      viewport={{ margin: "-180px 0px -180px 0px" }}
                      className="flex items-start space-x-6 relative pl-2 group cursor-pointer"
                      onClick={() => setActiveStep(idx)}
                    >
                      {/* Interactive dot node */}
                      <div className={`relative z-10 w-6 h-6 rounded-full bg-bg-base border transition-all duration-300 flex items-center justify-center ${
                        isActive ? "border-accent-cobalt scale-110 shadow-sm" : "border-border-custom group-hover:border-text-secondary"
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                          isActive ? "bg-accent-cobalt" : "bg-text-secondary group-hover:bg-text-primary"
                        }`} />
                      </div>

                      {/* Content block */}
                      <div className="space-y-1 flex-1">
                        <div className="flex items-baseline space-x-4">
                          <h3 className={`text-sm font-mono font-bold tracking-wider transition-colors duration-300 ${
                            isActive ? "text-accent-cobalt" : "text-text-primary"
                          }`}>
                            {step.title}
                          </h3>
                          <span className="text-[9px] font-mono text-text-secondary uppercase">
                            Layer 0{idx + 1}
                          </span>
                        </div>
                        <p className={`text-xs sm:text-sm leading-relaxed font-sans transition-all duration-300 ${
                          isActive ? "text-text-primary font-normal" : "text-text-secondary font-light"
                        }`}>
                          {step.desc}
                        </p>
                        {/* Mobile active pill */}
                        <div className="lg:hidden mt-2">
                          <span className="inline-block text-[8px] font-mono text-accent-cobalt bg-accent-cobalt/5 border border-accent-cobalt/10 px-2 py-0.5 rounded-sm">
                            {step.technical}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* PART 2: HOW I THINK ABOUT SYSTEMS (INTERACTIVE ROW ACCORDION) */}
        <div className="border-t border-border-custom pt-24 space-y-12">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[10px] font-mono tracking-widest text-accent-cobalt uppercase">
              02 / Core Themes
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary font-sans leading-tight">
              How I Think About Systems
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary font-sans font-light leading-relaxed">
              Real-world systems face latency, replication, and reliability limits. Click on any concern to view details and trade-offs.
            </p>
          </div>

          {/* Accordion Rows */}
          <div className="divide-y divide-border-custom border-t border-b border-border-custom">
            {concerns.map((con) => {
              const isExpanded = expandedConcern === con.id;
              return (
                <div
                  key={con.id}
                  className="hover:bg-stone-50/50 transition-colors duration-200"
                >
                  {/* Accordion Header Row */}
                  <button
                    onClick={() => setExpandedConcern(isExpanded ? null : con.id)}
                    className="w-full text-left py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-2 group cursor-pointer focus:outline-none focus:bg-stone-50"
                  >
                    {/* ID and Title */}
                    <div className="md:col-span-4 flex items-baseline space-x-4">
                      <span className="text-xs font-mono text-accent-cobalt font-bold group-hover:translate-x-0.5 transition-transform duration-200">
                        {con.num}
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold tracking-tight text-text-primary font-sans flex items-center gap-2">
                          <span>{con.title}</span>
                          <span className="text-accent-cobalt opacity-0 group-hover:opacity-100 transition-opacity duration-200">➔</span>
                        </h3>
                        <span className="text-[9px] font-mono text-text-secondary uppercase">
                          {con.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Summary Description */}
                    <div className="md:col-span-7">
                      <p className="text-xs sm:text-sm text-text-secondary font-sans font-light leading-relaxed">
                        {con.desc}
                      </p>
                    </div>

                    {/* Expand Arrow Indicator */}
                    <div className="md:col-span-1 flex justify-end">
                      <ChevronDown
                        size={16}
                        className={`text-text-secondary transition-transform duration-300 ${
                          isExpanded ? "transform rotate-180 text-accent-cobalt" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Accordion Expandable Content Panel */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm border-t border-border-custom/50 pt-6">
                          {/* Col 1: Why it matters */}
                          <div className="space-y-2">
                            <h4 className="font-mono text-[9px] text-text-secondary uppercase tracking-widest font-bold">
                              Why it matters
                            </h4>
                            <p className="text-text-secondary leading-relaxed font-sans font-light">
                              {con.whyItMatters}
                            </p>
                          </div>
                          {/* Col 2: Approach */}
                          <div className="space-y-2">
                            <h4 className="font-mono text-[9px] text-text-secondary uppercase tracking-widest font-bold">
                              How I Approach It
                            </h4>
                            <p className="text-text-secondary leading-relaxed font-sans font-light">
                              {con.howIApproachIt}
                            </p>
                          </div>
                          {/* Col 3: Tech / Examples */}
                          <div className="space-y-2 bg-[#FAF9F6] border border-border-custom/60 p-4 rounded-sm">
                            <h4 className="font-mono text-[9px] text-accent-cobalt uppercase tracking-widest font-bold">
                              Systems Implementation
                            </h4>
                            <p className="text-text-secondary leading-relaxed font-sans font-light">
                              {con.examples}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

// ------------------------------------------------------------------
// Sticky SVGs & Sub-visual animations (pure inline graphics)
// ------------------------------------------------------------------

function ModelVisual() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Pulsing Concentric waves */}
        <motion.div
          animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 border-2 border-accent-cobalt rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          className="absolute inset-0 border border-accent-cobalt rounded-full"
        />
        <div className="w-12 h-12 bg-text-primary border border-border-custom text-bg-base rounded-full flex items-center justify-center font-mono text-[10px] font-bold z-10 shadow-sm">
          MODEL
        </div>
      </div>
      <p className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">
        Generative Core Reasoning
      </p>
    </div>
  );
}

function ContextVisual() {
  return (
    <div className="flex flex-col items-center space-y-4 font-mono text-[9px] w-full max-w-[280px]">
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col items-center space-y-1">
          <Database size={24} className="text-text-secondary" />
          <span>Vector DB</span>
        </div>
        <div className="flex-1 h-[2px] border-t border-dashed border-border-custom relative mx-2">
          {/* Pulsing data dots */}
          <motion.div
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1 w-1.5 h-1.5 bg-accent-cobalt rounded-full"
          />
        </div>
        <div className="w-12 h-12 border border-accent-cobalt rounded flex items-center justify-center text-center p-1 bg-accent-cobalt/5">
          Context
          Filter
        </div>
        <div className="flex-1 h-[2px] border-t border-dashed border-border-custom relative mx-2">
          <motion.div
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }}
            className="absolute -top-1 w-1.5 h-1.5 bg-accent-cobalt rounded-full"
          />
        </div>
        <div className="flex flex-col items-center space-y-1">
          <Terminal size={24} className="text-text-secondary" />
          <span>AST Code</span>
        </div>
      </div>
      <p className="text-[10px] uppercase tracking-wider text-text-secondary mt-2">
        Semantic Retrieval Grounding
      </p>
    </div>
  );
}

function StateVisual() {
  return (
    <div className="flex flex-col items-center space-y-4 font-mono text-[9px] w-full max-w-[280px]">
      <div className="flex items-center justify-between w-full px-2">
        <div className="border border-border-custom p-2 rounded-sm text-center w-[75px] bg-stone-50">
          Client A
          <span className="block text-[6px] text-text-secondary">Editor state</span>
        </div>
        <div className="flex flex-col items-center justify-center px-2 flex-1 relative h-10">
          {/* Left Arrow Sync */}
          <motion.div
            animate={{ x: [-15, 15], opacity: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-accent-cobalt text-[12px]"
          >
            ⇄
          </motion.div>
          <span className="text-[6px] text-accent-cobalt uppercase font-bold">Delta Sync</span>
        </div>
        <div className="border border-border-custom p-2 rounded-sm text-center w-[75px] bg-stone-50">
          Client B
          <span className="block text-[6px] text-text-secondary">Editor state</span>
        </div>
      </div>
      <div className="border border-accent-cobalt bg-accent-cobalt/5 px-3 py-1.5 rounded-sm w-[150px] text-center text-accent-cobalt">
        Yjs Document Tree
        <span className="block text-[7px] text-text-secondary mt-0.5">Conflict-free Merging</span>
      </div>
    </div>
  );
}

function ToolsVisual() {
  return (
    <div className="flex flex-col items-center space-y-3 font-mono text-[9px] w-full max-w-[280px]">
      <div className="border border-border-custom px-3 py-1.5 rounded-sm bg-stone-50 w-full flex items-center justify-between">
        <span>Model Client</span>
        <span className="text-accent-cobalt">➔ JSON-RPC Request ➔</span>
        <span>MCP Tool</span>
      </div>
      <div className="text-text-secondary flex justify-center text-[12px]">▼</div>
      <div className="border border-accent-cobalt bg-accent-cobalt/5 p-2 rounded-sm w-full space-y-1">
        <div className="flex justify-between font-bold text-accent-cobalt">
          <span>Read Database</span>
          <span className="text-accent-success">[GRANTED]</span>
        </div>
        <p className="text-[7px] text-text-secondary">
          schema_validation: OK | query_execution: SUCCESS
        </p>
      </div>
    </div>
  );
}

function WorkflowVisual() {
  return (
    <div className="flex flex-col items-center space-y-4 font-mono text-[9px] w-full max-w-[260px]">
      <div className="flex justify-between items-center w-full">
        <div className="w-8 h-8 rounded-full border border-border-custom flex items-center justify-center bg-stone-50">
          Input
        </div>
        <div className="text-text-secondary">➔</div>
        
        <div className="relative border border-accent-cobalt bg-accent-cobalt/5 p-2 rounded-sm w-[90px] text-center space-y-1">
          <div className="font-bold text-accent-cobalt text-[8px]">LangGraph</div>
          <div className="flex justify-around items-center">
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-accent-cobalt"
            />
            <span className="text-[6px] text-text-secondary">Triage</span>
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-accent-cobalt"
            />
          </div>
        </div>
        
        <div className="text-text-secondary">➔</div>
        <div className="w-8 h-8 rounded-full border border-accent-success bg-accent-success/5 text-accent-success flex items-center justify-center font-bold">
          OK
        </div>
      </div>
      <p className="text-[9px] text-text-secondary uppercase tracking-wider text-center">
        Stateful Graph Action Routing
      </p>
    </div>
  );
}

function ValidationVisual() {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-2 border-dashed border-accent-success rounded-full flex items-center justify-center"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Shield size={24} className="text-accent-success" />
        </div>
      </div>
      <span className="text-xs font-mono font-bold text-accent-success uppercase tracking-wider">
        HMAC & Schema Validated
      </span>
      <p className="text-[8px] font-mono text-text-secondary">
        Gate execution pending human sign-off
      </p>
    </div>
  );
}

function ResultVisual() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 font-mono text-[9px] w-full max-w-[200px]">
      <div className="w-full space-y-2 border border-border-custom bg-stone-50 p-3 rounded-sm text-left">
        <div className="flex items-center space-x-2 text-accent-success font-bold">
          <CheckCircle size={12} />
          <span>COMMIT_VERIFICATION</span>
        </div>
        <div className="h-1 bg-border-custom rounded overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-full bg-accent-success"
          />
        </div>
        <p className="text-[7px] text-text-secondary">
          File chunks replicated: 100% | Caches active: OK
        </p>
      </div>
      <span className="text-[9px] uppercase tracking-wider text-text-primary font-bold">
        Systems Output Verified
      </span>
    </div>
  );
}
