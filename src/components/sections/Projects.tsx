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

        {/* Native CSS Stacked Cards List (relative on mobile, sticky on desktop) */}
        <div className="space-y-12 md:space-y-24 relative">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              idx={idx}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>

      </div>

      {/* Case Study Details Slide-over Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
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
              {/* Header */}
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
                  aria-label="Close details"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable details */}
              <div className="flex-1 overflow-y-auto p-8 space-y-8 font-sans">
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono text-text-secondary uppercase tracking-widest font-bold">
                    The Problem &amp; Constraints
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed font-light">
                    {selectedProject.problem}
                  </p>
                </div>

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

                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono text-text-secondary uppercase tracking-widest font-bold">
                    Execution Pipeline Detail
                  </h4>
                  <p className="text-xs sm:text-sm text-text-secondary font-mono leading-relaxed bg-[#1C1C1C] text-[#FAF9F6] p-4 rounded-sm">
                    {selectedProject.architecture}
                  </p>
                </div>

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

              {/* Links Footer */}
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
// ProjectCard Component (Uses intersection observer viewport builds)
// ------------------------------------------------------------------

interface ProjectCardProps {
  project: Project;
  idx: number;
  onSelect: () => void;
}

function ProjectCard({ project, idx, onSelect }: ProjectCardProps) {
  const [isActive, setIsActive] = useState(false);

  // Card reveal on entering viewport
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      onViewportEnter={() => setIsActive(true)}
      viewport={{ once: true, margin: "-120px" }}
      style={{
        top: `${80 + idx * 24}px`,
        zIndex: idx + 1
      }}
      onClick={onSelect}
      className="sticky bg-bg-base border border-border-custom hover:border-text-secondary rounded-sm p-6 sm:p-10 shadow-md transition-shadow duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch group cursor-pointer"
    >
      {/* Left Column: Project Text Manifest */}
      <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
        
        <div className="space-y-4">
          {/* Eyebrow */}
          <div className="flex items-center justify-between text-[9px] font-mono text-accent-cobalt font-semibold tracking-widest uppercase">
            <span>{project.category}</span>
            <span>0{idx + 1}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary font-sans group-hover:text-accent-cobalt transition-colors duration-300">
            {project.name}
          </h3>

          {/* Tagline */}
          <p className="text-xs sm:text-sm font-medium text-text-secondary font-mono tracking-tight">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm text-text-secondary font-sans font-light leading-relaxed">
            {project.problem}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[9px] font-mono border border-border-custom bg-[#FAF9F6] px-2.5 py-0.5 rounded-sm text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="space-y-4">
          {project.achievement && (
            <div className="flex items-center space-x-2 text-[10px] font-mono text-accent-alert bg-amber-500/5 border border-accent-alert/20 px-3 py-1.5 rounded-sm w-fit">
              <Award size={12} className="text-accent-alert" />
              <span>{project.achievement.title}</span>
            </div>
          )}

          <div className="flex items-center justify-between text-xs font-mono font-bold text-text-primary pt-2">
            <span className="text-accent-cobalt group-hover:underline">
              Explore Full Case Study &amp; Pipeline ➔
            </span>
          </div>
        </div>

      </div>

      {/* Right Column: Visual Architecture Panel */}
      <div className="lg:col-span-6 border border-border-custom/80 bg-stone-50/50 p-6 rounded-sm flex flex-col justify-between relative">
        <div className="flex items-center justify-between text-[9px] font-mono text-text-secondary uppercase">
          <span>Illustrative execution flow</span>
          <span className="text-accent-cobalt font-bold">SYSTEM BUILD</span>
        </div>

        <div className="bg-bg-base rounded border border-border-custom/50 flex items-center justify-center p-4 min-h-[220px] relative overflow-hidden my-4">
          {project.id === "codesync" && <RuntimeCodeSync isActive={isActive} />}
          {project.id === "ops-agent-hub" && <RuntimeOpsAgent isActive={isActive} />}
          {project.id === "pr-review-bot" && <RuntimePRBot isActive={isActive} />}
        </div>

        <p className="text-[10px] font-mono text-text-secondary leading-normal text-center">
          {project.architecture}
        </p>
      </div>

    </motion.div>
  );
}

// ------------------------------------------------------------------
// Runtime-generated architecture flows (triggered when card in view)
// ------------------------------------------------------------------

function RuntimeCodeSync({ isActive }: { isActive: boolean }) {
  const line1 = { hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { delay: 0.3, duration: 0.3 } } };
  const line2 = { hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { delay: 0.7, duration: 0.3 } } };
  const line3 = { hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { delay: 1.1, duration: 0.3 } } };

  return (
    <div className="w-full max-w-[340px] flex flex-col items-center justify-center space-y-4 font-mono text-[9px] relative">
      <div className="flex items-center justify-between w-full">
        {/* Node 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="border border-border-custom bg-stone-50 px-2 py-1 rounded-sm text-center w-[85px] z-10"
        >
          Editor
          <span className="block text-[6px] text-text-secondary">(Client)</span>
        </motion.div>

        {/* Link 1 */}
        <div className="flex-1 h-[1.5px] bg-border-custom relative mx-1 origin-left">
          <motion.div
            variants={line1}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            className="absolute inset-0 bg-accent-cobalt"
          />
        </div>

        {/* Node 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="border border-accent-cobalt bg-accent-cobalt/5 px-2 py-1 rounded-sm text-center w-[85px] text-accent-cobalt font-bold z-10"
        >
          Yjs CRDT
        </motion.div>

        {/* Link 2 */}
        <div className="flex-1 h-[1.5px] bg-border-custom relative mx-1 origin-left">
          <motion.div
            variants={line2}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            className="absolute inset-0 bg-accent-cobalt"
          />
        </div>

        {/* Node 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.3 }}
          className="border border-border-custom bg-stone-50 px-2 py-1 rounded-sm text-center w-[85px] z-10"
        >
          Socket.IO
          <span className="block text-[6px] text-text-secondary">(Gateway)</span>
        </motion.div>
      </div>

      {/* Down Connector */}
      <div className="h-6 w-[1.5px] bg-border-custom relative origin-top">
        <motion.div
          variants={line3}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="absolute inset-0 bg-accent-cobalt"
        />
        {isActive && (
          <motion.div
            animate={{ top: ["0%", "100%"] }}
            transition={{ delay: 1.4, duration: 0.6, repeat: Infinity }}
            className="absolute left-1/2 -left-1 w-2 h-2 bg-accent-cobalt rounded-full shadow-sm"
          />
        )}
      </div>

      {/* Subsystem block */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: 1.3, duration: 0.4 }}
        className="border border-border-custom/80 bg-[#FAF9F6] p-2 rounded-sm w-full flex items-center justify-around"
      >
        <span className="text-[7px] text-text-secondary font-bold uppercase">Delta Sync Pipeline:</span>
        <span className="border border-border-custom bg-bg-base px-1.5 py-0.5 rounded-sm">Redis</span>
        <span className="text-text-secondary text-[8px]">➔</span>
        <span className="border border-border-custom bg-bg-base px-1.5 py-0.5 rounded-sm">gzip</span>
        <span className="text-text-secondary text-[8px]">➔</span>
        <span className="border border-border-custom bg-bg-base px-1.5 py-0.5 rounded-sm">MongoDB</span>
      </motion.div>
    </div>
  );
}

function RuntimeOpsAgent({ isActive }: { isActive: boolean }) {
  const line1 = { hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { delay: 0.3, duration: 0.25 } } };
  const line2 = { hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { delay: 0.7, duration: 0.25 } } };

  return (
    <div className="w-full max-w-[340px] flex flex-col items-center justify-center space-y-3 font-mono text-[9px]">
      
      {/* Node 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="border border-border-custom bg-stone-50 px-3 py-1 rounded-sm text-center z-10"
      >
        Ticket Intake (Webhook)
      </motion.div>

      {/* Connector */}
      <div className="h-4 w-[1.5px] bg-border-custom relative origin-top">
        <motion.div
          variants={line1}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="absolute inset-0 bg-accent-cobalt"
        />
      </div>

      {/* Node 2 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="border border-accent-cobalt bg-accent-cobalt/5 p-2 rounded-sm w-full flex flex-col items-center space-y-2 text-accent-cobalt z-10"
      >
        <span className="text-[8px] font-bold uppercase tracking-wider">LangGraph Router</span>
        <div className="flex items-center justify-around w-full text-text-primary px-1 text-[8px]">
          <div className="border border-border-custom bg-bg-base px-1.5 py-0.5 rounded-sm">Triage</div>
          <span>➔</span>
          <div className="border border-border-custom bg-bg-base px-1.5 py-0.5 rounded-sm">Knowledge (MCP)</div>
          <span>➔</span>
          <div className="border border-border-custom bg-bg-base px-1.5 py-0.5 rounded-sm">Validate</div>
        </div>
      </motion.div>

      {/* Connector */}
      <div className="h-4 w-[1.5px] bg-border-custom relative origin-top">
        <motion.div
          variants={line2}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="absolute inset-0 bg-accent-cobalt"
        />
        {isActive && (
          <motion.div
            animate={{ top: ["0%", "100%"] }}
            transition={{ delay: 1.0, duration: 0.5, repeat: Infinity }}
            className="absolute left-1/2 -left-1 w-2 h-2 bg-accent-cobalt rounded-full shadow-sm"
          />
        )}
      </div>

      {/* Node 3 */}
      <div className="flex items-center justify-between w-full gap-4">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.3 }}
          className="border border-accent-success bg-accent-success/5 px-2 py-1 rounded-sm text-center text-accent-success w-1/2"
        >
          Resolve (Auto-reply)
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.3 }}
          className="border border-accent-alert bg-accent-alert/5 px-2 py-1 rounded-sm text-center text-accent-alert w-1/2"
        >
          Escalate (Slack Gate)
        </motion.div>
      </div>

    </div>
  );
}

function RuntimePRBot({ isActive }: { isActive: boolean }) {
  const line1 = { hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { delay: 0.3, duration: 0.3 } } };
  const line2 = { hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { delay: 0.7, duration: 0.3 } } };

  return (
    <div className="w-full max-w-[340px] flex flex-col items-center justify-center space-y-3 font-mono text-[9px]">
      
      <div className="flex items-center justify-between w-full">
        {/* Node 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="border border-border-custom bg-stone-50 px-2 py-1 rounded-sm text-center w-[110px]"
        >
          PR Webhook
        </motion.div>

        {/* Link 1 */}
        <div className="flex-1 h-[1.5px] bg-border-custom relative mx-1 origin-left">
          <motion.div
            variants={line1}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            className="absolute inset-0 bg-accent-cobalt"
          />
        </div>

        {/* Node 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="border border-border-custom bg-stone-50 px-2 py-1 rounded-sm text-center w-[140px] z-10"
        >
          FastAPI / ARQ Workers
        </motion.div>
      </div>

      {/* Down Connector */}
      <div className="h-5 w-[1.5px] bg-border-custom relative origin-top">
        <motion.div
          variants={line2}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="absolute inset-0 bg-accent-cobalt"
        />
      </div>

      {/* Subsystem block */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="border border-accent-cobalt bg-accent-cobalt/5 p-2 rounded-sm w-full space-y-2 text-accent-cobalt"
      >
        <div className="flex items-center justify-between text-[8px] font-bold uppercase">
          <span>AST Chunker &amp; Cache</span>
          <span>Tree-sitter</span>
        </div>
        <div className="flex justify-between items-center text-text-primary text-[8px]">
          <div className="border border-border-custom bg-bg-base px-2 py-0.5 rounded-sm">Hash Compare</div>
          <span>➔</span>
          <div className="border border-border-custom bg-bg-base px-2 py-0.5 rounded-sm">Redis Hit/Miss</div>
          <span>➔</span>
          <div className="border border-border-custom bg-bg-base px-2 py-0.5 rounded-sm">LLM Review</div>
        </div>
      </motion.div>

    </div>
  );
}
