"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { projects } from "@/data/projects";

// Inline brand SVG for compatibility with Lucide React v1+
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 } as any
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any
    }
  };

  return (
    <section id="work" className="py-24 border-t border-border-custom bg-bg-base/20">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-[10px] font-mono tracking-widest text-accent-cobalt uppercase">
            03 / Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary font-sans leading-tight">
            Intelligent Software Systems
          </h2>
          <p className="text-sm sm:text-base text-text-secondary font-sans font-light leading-relaxed">
            Case studies in distributed state, agentic orchestration, and developer workflow automation.
          </p>
        </div>

        {/* Projects Grid/List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-border-custom pt-12 group"
            >
              {/* Left Column: Project Info & Meta (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Category & Index */}
                <div className="flex items-center justify-between text-[10px] font-mono text-accent-cobalt font-semibold tracking-widest uppercase">
                  <span>{project.category}</span>
                  <span>0{idx + 1}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary font-sans">
                  {project.name}
                </h3>

                {/* Project Tagline */}
                <p className="text-sm font-medium text-text-secondary font-mono tracking-tight leading-relaxed">
                  {project.tagline}
                </p>

                {/* Problem Section */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider block">
                    The Problem
                  </span>
                  <p className="text-xs sm:text-sm text-text-secondary font-sans font-light leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution Section */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider block">
                    System Approach
                  </span>
                  <p className="text-xs sm:text-sm text-text-secondary font-sans font-light leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Core Technologies & Concepts */}
                <div className="space-y-3 pt-2">
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono border border-border-custom bg-bg-base px-2.5 py-1 rounded-sm text-text-secondary hover:text-text-primary hover:border-text-primary transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Concepts */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] font-mono text-accent-cobalt font-bold uppercase tracking-wider">
                    {project.keyConcepts.map((concept) => (
                      <span key={concept}>&middot; {concept}</span>
                    ))}
                  </div>
                </div>

                {/* Pitch Excellence Award Contextual Integration */}
                {project.achievement && (
                  <div className="flex items-start space-x-3 bg-amber-500/5 border border-accent-alert/20 p-4 rounded-sm">
                    <Award size={18} className="text-accent-alert flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-xs font-mono font-bold text-accent-alert uppercase">
                        {project.achievement.title}
                      </h4>
                      <p className="text-[11px] text-text-secondary leading-normal font-sans font-light">
                        {project.achievement.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* GitHub & Live Links */}
                <div className="flex items-center space-x-6 pt-2">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-semibold font-mono text-text-primary hover:text-accent-cobalt transition-colors duration-200"
                  >
                    <GithubIcon />
                    <span>GitHub ↗</span>
                  </a>

                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-semibold font-mono text-accent-cobalt hover:underline"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo ↗</span>
                    </a>
                  )}
                </div>

              </div>

              {/* Right Column: Editorial Architecture Diagram (6 cols) */}
              <div className="lg:col-span-6 border border-border-custom bg-bg-base p-6 rounded-sm space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono text-text-secondary uppercase">
                  <span>Architecture Model</span>
                  <span className="text-[9px] text-accent-cobalt">Static Diagram</span>
                </div>
                
                {/* SVG Visualizations */}
                <div className="bg-bg-base/30 rounded border border-border-custom/50 flex items-center justify-center p-4 min-h-[220px]">
                  {project.id === "codesync" && <CodeSyncDiagram />}
                  {project.id === "ops-agent-hub" && <OpsAgentDiagram />}
                  {project.id === "pr-review-bot" && <PRBotDiagram />}
                </div>

                {/* Descriptive flow tag */}
                <p className="text-[11px] font-mono text-text-secondary leading-normal text-center">
                  {project.architecture}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

// ------------------------------------------------------------------
// Static Diagram Components using CSS / HTML flexboxes inside responsive blocks
// ------------------------------------------------------------------

function CodeSyncDiagram() {
  return (
    <div className="w-full max-w-[340px] flex flex-col items-center justify-center space-y-4 font-mono text-[9px]">
      <div className="flex items-center justify-between w-full">
        <div className="border border-border-custom bg-stone-50 px-2 py-1.5 rounded-sm text-center w-[90px]">
          Client Editor
          <span className="block text-[7px] text-text-secondary">(Zustand)</span>
        </div>
        <div className="text-text-secondary">➔</div>
        <div className="border border-accent-cobalt bg-accent-cobalt/5 px-2 py-1.5 rounded-sm text-center w-[100px] text-accent-cobalt font-bold">
          Yjs CRDTs
          <span className="block text-[7px] text-accent-cobalt/80">(Typing Sync)</span>
        </div>
        <div className="text-text-secondary">➔</div>
        <div className="border border-border-custom bg-stone-50 px-2 py-1.5 rounded-sm text-center w-[90px]">
          Socket.IO
          <span className="block text-[7px] text-text-secondary">(WebSockets)</span>
        </div>
      </div>

      <div className="h-6 border-l border-dashed border-border-custom" />

      <div className="border border-border-custom/80 bg-stone-50/50 p-2.5 rounded-sm w-full flex flex-col items-center space-y-2">
        <span className="text-[8px] font-bold text-text-secondary uppercase tracking-wider">
          Hybrid Delta Sync Engine (Δ-Engine)
        </span>
        <div className="flex items-center justify-around w-full">
          <div className="border border-border-custom bg-bg-base px-2 py-1 rounded-sm w-[100px] text-center">
            Redis Cache
            <span className="block text-[7px] text-text-secondary">(Recent 10 edits)</span>
          </div>
          <div className="text-text-secondary">➔</div>
          <div className="border border-border-custom bg-bg-base px-2 py-1 rounded-sm w-[100px] text-center">
            DeltaManager
            <span className="block text-[7px] text-text-secondary">(Diff & pako)</span>
          </div>
          <div className="text-text-secondary">➔</div>
          <div className="border border-border-custom bg-bg-base px-2 py-1 rounded-sm w-[100px] text-center">
            MongoDB
            <span className="block text-[7px] text-text-secondary">(Snapshots/20s)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function OpsAgentDiagram() {
  return (
    <div className="w-full max-w-[340px] flex flex-col items-center justify-center space-y-3 font-mono text-[9px]">
      <div className="border border-border-custom bg-stone-50 px-3 py-1 rounded-sm text-center">
        Ticket Intake
      </div>
      <div className="text-text-secondary">▼</div>
      
      <div className="border border-accent-cobalt bg-accent-cobalt/5 p-2 rounded-sm w-full flex flex-col items-center space-y-2 text-accent-cobalt">
        <span className="text-[8px] font-bold uppercase tracking-wider text-accent-cobalt/90">
          Stateful LangGraph Workflows
        </span>
        <div className="flex items-center justify-between w-full text-text-primary px-1">
          <div className="border border-border-custom bg-bg-base px-1.5 py-1 rounded-sm w-[55px] text-center">
            Triage
          </div>
          <div className="text-text-secondary text-[7px]">➔</div>
          <div className="border border-border-custom bg-bg-base px-1.5 py-1 rounded-sm w-[60px] text-center">
            Knowledge
            <span className="block text-[6px] text-text-secondary">MCP Search</span>
          </div>
          <div className="text-text-secondary text-[7px]">➔</div>
          <div className="border border-border-custom bg-bg-base px-1.5 py-1 rounded-sm w-[55px] text-center">
            Action
            <span className="block text-[6px] text-text-secondary">Draft</span>
          </div>
          <div className="text-text-secondary text-[7px]">➔</div>
          <div className="border border-border-custom bg-bg-base px-1.5 py-1 rounded-sm w-[60px] text-center">
            Validation
          </div>
        </div>
      </div>

      <div className="text-text-secondary">▼</div>

      <div className="flex items-center justify-between w-full">
        <div className="border border-accent-success bg-accent-success/5 px-2 py-1.5 rounded-sm text-center text-accent-success w-[140px]">
          ResolveTicket Node
          <span className="block text-[7px] text-accent-success/80">MCP send_resolution</span>
        </div>
        <div className="text-text-secondary">/ \</div>
        <div className="border border-accent-alert bg-accent-alert/5 px-2 py-1.5 rounded-sm text-center text-accent-alert w-[140px]">
          EscalateTicket Node
          <span className="block text-[7px] text-accent-alert/80">Human Review / Slack</span>
        </div>
      </div>
    </div>
  );
}

function PRBotDiagram() {
  return (
    <div className="w-full max-w-[340px] flex flex-col items-center justify-center space-y-2.5 font-mono text-[9px]">
      <div className="flex items-center justify-between w-full">
        <div className="border border-border-custom bg-stone-50 px-2 py-1 rounded-sm text-center w-[120px]">
          GitHub Webhook
          <span className="block text-[7px] text-text-secondary">(HMAC Verified)</span>
        </div>
        <div className="text-text-secondary">➔</div>
        <div className="border border-border-custom bg-stone-50 px-2 py-1 rounded-sm text-center w-[160px]">
          FastAPI Receiver
          <span className="block text-[7px] text-text-secondary">Redis Idempotency Gate</span>
        </div>
      </div>

      <div className="text-text-secondary">▼</div>

      <div className="flex items-center justify-between w-full">
        <div className="border border-border-custom bg-stone-50 px-2 py-1 rounded-sm text-center w-[140px]">
          ARQ Task Queue
          <span className="block text-[7px] text-text-secondary">(Redis Worker)</span>
        </div>
        <div className="text-text-secondary">➔</div>
        <div className="border border-border-custom bg-stone-50 px-2 py-1 rounded-sm text-center w-[140px]">
          Tree-sitter Chunker
          <span className="block text-[7px] text-text-secondary">(AST code blocks)</span>
        </div>
      </div>

      <div className="text-text-secondary">▼</div>

      <div className="border border-border-custom/80 bg-stone-50/50 p-2 rounded-sm w-full flex flex-col items-center space-y-1.5">
        <span className="text-[8px] font-bold text-text-secondary uppercase tracking-wider">
          Redis Chunk-Level Cache Lookup
        </span>
        <div className="flex items-center justify-around w-full">
          <div className="border border-accent-success bg-accent-success/5 px-2 py-1 rounded-sm text-accent-success text-center w-[130px] font-bold">
            CACHE HIT
            <span className="block text-[7px] text-accent-success/80">Reuse previous suggestion</span>
          </div>
          <div className="border border-accent-alert bg-accent-alert/5 px-2 py-1 rounded-sm text-accent-alert text-center w-[130px] font-bold">
            CACHE MISS
            <span className="block text-[7px] text-accent-alert/80">Claude / asyncio Semaphore</span>
          </div>
        </div>
      </div>

      <div className="text-text-secondary">▼</div>

      <div className="border border-border-custom bg-stone-50 px-3 py-1 rounded-sm text-center">
        GitHub PR Inline Comment posted
      </div>
    </div>
  );
}
