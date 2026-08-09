"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  const steps = [
    {
      title: "MODEL",
      desc: "The generative layer. A reasoning compiler translating abstract inputs to outcomes."
    },
    {
      title: "CONTEXT",
      desc: "Information boundaries. Injecting syntax AST blocks and DB queries (RAG) to ground computation."
    },
    {
      title: "STATE",
      desc: "Replication engines. Synchronizing editor document trees and typing inputs concurrently."
    },
    {
      title: "TOOLS",
      desc: "MCP execution. Letting models query systems, execute tasks, and communicate via JSON-RPC."
    },
    {
      title: "WORKFLOW",
      desc: "Stateful routing. Managing LangGraph agents, job queues, and background processors."
    },
    {
      title: "VALIDATION",
      desc: "Security filters. Confirming webhook HMAC signatures, schemas, and human review boundaries."
    },
    {
      title: "RESULT",
      desc: "Deterministic outcomes. Committing pull request feedback, syncing documents, and resolving events."
    }
  ];

  const concerns = [
    {
      num: "01",
      title: "STATE",
      subtitle: "Distributed and collaborative state",
      desc: "Managing real-time document replication. Designing delta synchronization and Yjs CRDTs to replicate edits across collaborative clients with low latency and consistent versioning."
    },
    {
      num: "02",
      title: "ORCHESTRATION",
      subtitle: "Coordinating models, tools and workflows",
      desc: "Coordinating workflows. Deploying LangGraph graphs and Model Context Protocol (MCP) hosts to decouple model intelligence from actual tool execution environments."
    },
    {
      num: "03",
      title: "AUTOMATION",
      subtitle: "Moving expensive work into reliable pipelines",
      desc: "Offloading tasks. Building FastAPI webhooks and ARQ background queues to execute compute-heavy AST analysis and review pipelines without blocking client operations."
    },
    {
      num: "04",
      title: "VALIDATION",
      subtitle: "Checking outputs before they become actions",
      desc: "Enforcing security checks. Utilizing Tree-sitter AST hashing to audit codebase changes and configuring human-in-the-loop gates to validate critical agent operations."
    },
    {
      num: "05",
      title: "DEVELOPER TOOLING",
      subtitle: "Making complex engineering workflows easier to operate",
      desc: "Optimizing development. Replicating terminals via node-pty, caching chunk-level code differences, and automating pull request feedback cycles."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } as any
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
    <section id="systems" className="py-24 border-t border-border-custom bg-bg-base">
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        
        {/* PART 1: BEYOND THE MODEL LAYERS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-6">
            <span className="text-[10px] font-mono tracking-widest text-accent-cobalt uppercase">
              01 / Engineering Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary font-sans leading-tight">
              Beyond the Model.
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans font-light">
              A model is only one component of an intelligent system.
            </p>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans font-light">
              The engineering around it determines how context is retrieved, state is maintained, actions are executed, workflows are coordinated, and results are validated.
            </p>
          </div>

          {/* Right Column: Progressive Vertical Sequence */}
          <div className="lg:col-span-7 relative">
            <div className="absolute left-[13px] top-6 bottom-6 w-[1px] bg-border-custom" />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-10"
            >
              {steps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="flex items-start space-x-6 relative pl-2 group"
                >
                  <div className="relative z-10 w-6 h-6 rounded-full bg-bg-base border border-border-custom flex items-center justify-center transition-colors duration-300 group-hover:border-accent-cobalt">
                    <div className="w-1.5 h-1.5 rounded-full bg-text-secondary group-hover:bg-accent-cobalt transition-colors duration-300" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-baseline space-x-4">
                      <h3 className="text-sm font-mono font-bold tracking-wider text-text-primary">
                        {step.title}
                      </h3>
                      <span className="text-[9px] font-mono text-text-secondary uppercase">
                        Layer 0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans font-light">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* PART 2: HOW I THINK ABOUT SYSTEMS (CONCERNS) */}
        <div className="border-t border-border-custom pt-24 space-y-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[10px] font-mono tracking-widest text-accent-cobalt uppercase">
              02 / Core Themes
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary font-sans leading-tight">
              How I Think About Systems
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="divide-y divide-border-custom border-t border-b border-border-custom"
          >
            {concerns.map((con) => (
              <motion.div
                key={con.title}
                variants={itemVariants}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-stone-50/50 transition-colors duration-200 px-2"
              >
                {/* Num and Title */}
                <div className="md:col-span-4 flex items-baseline space-x-4">
                  <span className="text-xs font-mono text-accent-cobalt font-bold">
                    {con.num}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold tracking-tight text-text-primary font-sans">
                      {con.title}
                    </h3>
                    <span className="text-[10px] font-mono text-text-secondary uppercase">
                      {con.subtitle}
                    </span>
                  </div>
                </div>
                {/* Description */}
                <div className="md:col-span-8">
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans font-light">
                    {con.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
