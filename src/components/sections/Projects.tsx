"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award, X, HelpCircle } from "lucide-react";
import { projects, Project } from "@/data/projects";

// Inline brand SVGs for compatibility with Lucide React v1+
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 } as any
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
            03 / Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary font-sans leading-tight">
            Intelligent Software Systems
          </h2>
          <p className="text-sm sm:text-base text-text-secondary font-sans font-light leading-relaxed">
            Production-grade systems proving how AI and stateful coordination operate beyond basic model prompting. Click any card to review its detailed case study.
          </p>
        </div>

        {/* Projects Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {projects.map((project, idx) => {
            const isHovered = hoveredCard === project.id;
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedProject(project)}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border-t border-border-custom pt-12 group cursor-pointer"
              >
                
                {/* Left Column: Project Text Info */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Category & index */}
                    <div className="flex items-center justify-between text-[9px] font-mono text-accent-cobalt font-semibold tracking-widest uppercase">
                      <span>{project.category}</span>
                      <span>0{idx + 1}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary font-sans group-hover:text-accent-cobalt transition-colors duration-300">
                      {project.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs sm:text-sm font-medium text-text-secondary font-mono tracking-tight leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Problem */}
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-text-secondary uppercase tracking-wider block">
                        The Challenge
                      </span>
                      <p className="text-xs sm:text-sm text-text-secondary font-sans font-light leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Core Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] font-mono border border-border-custom bg-bg-base px-2 py-0.5 rounded-sm text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="text-[9px] font-mono text-text-secondary px-1.5 py-0.5">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Call to Actions & Milestones */}
                  <div className="space-y-4">
                    {project.achievement && (
                      <div className="flex items-center space-x-2 text-[10px] font-mono text-accent-alert bg-amber-500/5 border border-accent-alert/20 px-3 py-1.5 rounded-sm w-fit">
                        <Award size={12} className="text-accent-alert" />
                        <span>{project.achievement.title}</span>
                      </div>
                    )}

                    <div className="flex items-center space-x-6 text-xs font-mono font-bold text-text-primary">
                      <span className="group-hover:text-accent-cobalt transition-colors duration-200">
                        View Detailed Case Study ➔
                      </span>
                    </div>
                  </div>

                </div>

                {/* Right Column: Visual Architecture Panel */}
                <div className="lg:col-span-6 border border-border-custom bg-bg-base p-6 rounded-sm flex flex-col justify-between shadow-sm group-hover:border-text-primary transition-colors duration-300">
                  <div className="flex items-center justify-between text-[9px] font-mono text-text-secondary uppercase">
                    <span>Illustrative Execution flow</span>
                    <span className={`text-[8px] font-mono font-bold uppercase transition-colors duration-300 ${
                      isHovered ? "text-accent-cobalt" : "text-text-secondary"
                    }`}>
                      {isHovered ? "ACTIVE FLOW" : "INACTIVE"}
                    </span>
                  </div>

                  {/* Diagrams with active hover pulsing states */}
                  <div className="bg-bg-base/30 rounded border border-border-custom/50 flex items-center justify-center p-4 min-h-[220px] relative overflow-hidden my-4">
                    {project.id === "codesync" && <AnimatedCodeSync isHovered={isHovered} />}
                    {project.id === "ops-agent-hub" && <AnimatedOpsAgent isHovered={isHovered} />}
                    {project.id === "pr-review-bot" && <AnimatedPRBot isHovered={isHovered} />}
                  </div>

                  <p className="text-[10px] font-mono text-text-secondary leading-normal text-center">
                    {project.architecture}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* CASE STUDY SLIDE-OVER DRAWER (Right Side Panel) */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Drawer Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#1C1C1C] z-50 cursor-pointer"
            />

            {/* Slider Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full sm:max-w-2xl bg-bg-base border-l border-border-custom shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-border-custom flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-accent-cobalt font-semibold uppercase tracking-widest block mb-1">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl font-semibold text-text-primary font-sans">
                    {selectedProject.name} Case Study
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-3 text-text-secondary hover:text-text-primary hover:bg-stone-100 rounded-full transition-colors focus:outline-none min-h-[48px] min-w-[48px] flex items-center justify-center"
                  aria-label="Close case study"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-8 space-y-8 font-sans">
                
                {/* 1. Problem / Target */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono text-text-secondary uppercase tracking-widest font-bold">
                    The Problem & Constraints
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed font-light">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* 2. Approach */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono text-text-secondary uppercase tracking-widest font-bold">
                    Engineering Approach
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed font-light">
                    {selectedProject.solution}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed font-light bg-stone-50 border border-border-custom/50 p-4 rounded-sm">
                    {selectedProject.approach}
                  </p>
                </div>

                {/* 3. Architecture details */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono text-text-secondary uppercase tracking-widest font-bold">
                    Execution Pipeline Detail
                  </h4>
                  <p className="text-xs sm:text-sm text-text-secondary font-mono leading-relaxed bg-[#1C1C1C] text-[#FAF9F6] p-4 rounded-sm">
                    {selectedProject.architecture}
                  </p>
                </div>

                {/* 4. Tech stack list */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono text-text-secondary uppercase tracking-widest font-bold">
                    Technology Manifest
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono border border-border-custom bg-stone-50 px-3 py-1 rounded-sm text-text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 5. Key Concept Highlights */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono text-text-secondary uppercase tracking-widest font-bold">
                    Engineering Competency Focus
                  </h4>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-mono text-accent-cobalt font-bold uppercase tracking-wider">
                    {selectedProject.keyConcepts.map((concept) => (
                      <span key={concept}>&middot; {concept}</span>
                    ))}
                  </div>
                </div>

                {/* Award integration */}
                {selectedProject.achievement && (
                  <div className="flex items-start space-x-3 bg-amber-500/5 border border-accent-alert/20 p-4 rounded-sm">
                    <Award size={18} className="text-accent-alert flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-xs font-mono font-bold text-accent-alert uppercase">
                        {selectedProject.achievement.title}
                      </h4>
                      <p className="text-xs text-text-secondary leading-normal font-light">
                        {selectedProject.achievement.description}
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* Drawer Footer Links */}
              <div className="p-6 border-t border-border-custom flex items-center justify-start space-x-6 bg-[#FAF9F6]">
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-bold font-mono text-text-primary hover:text-accent-cobalt transition-colors min-h-[48px]"
                >
                  <GithubIcon />
                  <span>Explore Source Code ↗</span>
                </a>

                {selectedProject.links.demo && (
                  <a
                    href={selectedProject.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-bold font-mono text-accent-cobalt hover:underline min-h-[48px]"
                  >
                    <ExternalLink size={14} />
                    <span>Open Live Demo ↗</span>
                  </a>
                )}
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}

// ------------------------------------------------------------------
// Animated Project Diagrams (Dynamic SVGs reacting to parent card hovers)
// ------------------------------------------------------------------

function AnimatedCodeSync({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-full max-w-[340px] flex flex-col items-center justify-center space-y-4 font-mono text-[9px] relative select-none">
      <div className="flex items-center justify-between w-full">
        <div className="border border-border-custom bg-stone-50 px-2 py-1.5 rounded-sm text-center w-[90px] relative">
          Editor
          <span className="block text-[6px] text-text-secondary">(Client)</span>
        </div>

        <div className="flex-1 h-[2px] border-t border-dashed border-border-custom relative mx-1">
          {isHovered && (
            <motion.div
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1 w-1.5 h-1.5 bg-accent-cobalt rounded-full"
            />
          )}
        </div>

        <div className="border border-accent-cobalt bg-accent-cobalt/5 px-2 py-1.5 rounded-sm text-center w-[90px] text-accent-cobalt font-bold">
          Yjs CRDTs
        </div>

        <div className="flex-1 h-[2px] border-t border-dashed border-border-custom relative mx-1">
          {isHovered && (
            <motion.div
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.6 }}
              className="absolute -top-1 w-1.5 h-1.5 bg-accent-cobalt rounded-full"
            />
          )}
        </div>

        <div className="border border-border-custom bg-stone-50 px-2 py-1.5 rounded-sm text-center w-[90px]">
          Gateway
          <span className="block text-[6px] text-text-secondary">(Sockets)</span>
        </div>
      </div>

      <div className="h-6 border-l border-dashed border-border-custom relative">
        {isHovered && (
          <motion.div
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 -left-1 w-1.5 h-1.5 bg-accent-cobalt rounded-full"
          />
        )}
      </div>

      <div className="border border-border-custom/80 bg-stone-50/50 p-2.5 rounded-sm w-full flex flex-col items-center space-y-2">
        <span className="text-[8px] font-bold text-text-secondary uppercase tracking-wider">
          Delta Snap Engine
        </span>
        <div className="flex items-center justify-around w-full">
          <div className="border border-border-custom bg-bg-base px-2 py-1 rounded-sm w-[90px] text-center">
            Redis Cache
          </div>
          <div className="text-text-secondary">➔</div>
          <div className="border border-border-custom bg-bg-base px-2 py-1 rounded-sm w-[90px] text-center">
            gzip manager
          </div>
          <div className="text-text-secondary">➔</div>
          <div className="border border-border-custom bg-bg-base px-2 py-1 rounded-sm w-[90px] text-center">
            MongoDB
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedOpsAgent({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-full max-w-[340px] flex flex-col items-center justify-center space-y-3 font-mono text-[9px] relative select-none">
      <div className="border border-border-custom bg-stone-50 px-3 py-1 rounded-sm text-center">
        Ticket Intake
      </div>
      
      <div className="h-4 border-l border-dashed border-border-custom relative">
        {isHovered && (
          <motion.div
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 -left-1 w-1.5 h-1.5 bg-accent-cobalt rounded-full"
          />
        )}
      </div>
      
      <div className="border border-accent-cobalt bg-accent-cobalt/5 p-2 rounded-sm w-full flex flex-col items-center space-y-2 text-accent-cobalt">
        <span className="text-[8px] font-bold uppercase tracking-wider text-accent-cobalt/95">
          LangGraph Routing
        </span>
        <div className="flex items-center justify-between w-full text-text-primary px-1">
          <div className="border border-border-custom bg-bg-base px-1.5 py-1 rounded-sm text-center relative">
            Triage
            {isHovered && (
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent-cobalt"
              />
            )}
          </div>
          <div className="text-text-secondary text-[7px]">➔</div>
          <div className="border border-border-custom bg-bg-base px-1.5 py-1 rounded-sm text-center">
            MCP Search
          </div>
          <div className="text-text-secondary text-[7px]">➔</div>
          <div className="border border-border-custom bg-bg-base px-1.5 py-1 rounded-sm text-center">
            Validation
          </div>
        </div>
      </div>

      <div className="h-4 border-l border-dashed border-border-custom relative">
        {isHovered && (
          <motion.div
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 -left-1 w-1.5 h-1.5 bg-accent-cobalt rounded-full"
          />
        )}
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="border border-accent-success bg-accent-success/5 px-2 py-1 rounded-sm text-center text-accent-success w-[140px]">
          Resolve Node
        </div>
        <div className="text-text-secondary font-bold">/ \</div>
        <div className="border border-accent-alert bg-accent-alert/5 px-2 py-1 rounded-sm text-center text-accent-alert w-[140px]">
          Escalate Node (Slack)
        </div>
      </div>
    </div>
  );
}

function AnimatedPRBot({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-full max-w-[340px] flex flex-col items-center justify-center space-y-2.5 font-mono text-[9px] relative select-none">
      <div className="flex items-center justify-between w-full">
        <div className="border border-border-custom bg-stone-50 px-2 py-1 rounded-sm text-center w-[110px]">
          GitHub Webhook
        </div>
        <div className="flex-1 h-[2px] border-t border-dashed border-border-custom relative mx-1">
          {isHovered && (
            <motion.div
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1 w-1.5 h-1.5 bg-accent-cobalt rounded-full"
            />
          )}
        </div>
        <div className="border border-border-custom bg-stone-50 px-2 py-1 rounded-sm text-center w-[150px]">
          FastAPI / Redis Idempotent
        </div>
      </div>

      <div className="h-4 border-l border-dashed border-border-custom relative">
        {isHovered && (
          <motion.div
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 -left-1 w-1.5 h-1.5 bg-accent-cobalt rounded-full"
          />
        )}
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="border border-border-custom bg-stone-50 px-2 py-1 rounded-sm text-center w-[130px]">
          ARQ Queue
        </div>
        <div className="flex-1 h-[2px] border-t border-dashed border-border-custom relative mx-1">
          {isHovered && (
            <motion.div
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1 w-1.5 h-1.5 bg-accent-cobalt rounded-full"
            />
          )}
        </div>
        <div className="border border-border-custom bg-stone-50 px-2 py-1 rounded-sm text-center w-[130px]">
          Tree-sitter Chunker
        </div>
      </div>

      <div className="h-4 border-l border-dashed border-border-custom relative">
        {isHovered && (
          <motion.div
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 -left-1 w-1.5 h-1.5 bg-accent-cobalt rounded-full"
          />
        )}
      </div>

      <div className="border border-border-custom/80 bg-stone-50/50 p-2 rounded-sm w-full flex flex-col items-center space-y-1">
        <span className="text-[8px] font-bold text-text-secondary uppercase tracking-wider">
          Redis AST-Hash Cache
        </span>
        <div className="flex items-center justify-around w-full">
          <div className="border border-accent-success bg-accent-success/5 px-1.5 py-0.5 rounded-sm text-accent-success text-[7px] text-center w-[120px]">
            HIT: Reuse suggestions
          </div>
          <div className="border border-accent-alert bg-accent-alert/5 px-1.5 py-0.5 rounded-sm text-accent-alert text-[7px] text-center w-[120px]">
            MISS: Claude Client
          </div>
        </div>
      </div>
    </div>
  );
}
