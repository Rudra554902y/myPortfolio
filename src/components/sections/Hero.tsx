"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, FileText } from "lucide-react";

// Inline brand SVGs for compatibility with Lucide React v1+
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
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

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      } as any,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      } as any,
    },
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center max-w-6xl mx-auto px-6 pt-32 pb-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        {/* Topic Tag */}
        <motion.div variants={itemVariants} className="inline-block">
          <span className="text-xs font-mono tracking-widest text-accent-cobalt bg-accent-cobalt/5 border border-accent-cobalt/20 px-3 py-1 uppercase rounded-sm">
            Systems & Intelligent Software
          </span>
        </motion.div>

        {/* Main Title & Positioning */}
        <div className="space-y-6 max-w-4xl">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-text-primary leading-[1.1] font-sans"
          >
            I build intelligent software systems that connect people, tools, and computation.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-text-secondary max-w-2xl font-sans font-light leading-relaxed"
          >
            Backend architect and developer focusing on distributed state, real-time collaboration engines, workflow orchestration, and secure cryptographic validation. Interested in engineering what happens <span className="font-medium text-text-primary">beyond the model</span>.
          </motion.p>
        </div>

        {/* Action Buttons & Socials */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-6"
        >
          <a
            href="#work"
            className="group inline-flex items-center space-x-2 bg-text-primary text-bg-base hover:bg-accent-cobalt px-6 py-3.5 text-sm font-medium transition-all duration-300 shadow-sm"
          >
            <span>View Systems Work</span>
            <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-200" />
          </a>

          <a
            href="/Chandra_Keshwar_Resume.pdf"
            download="Chandra_Keshwar_Resume.pdf"
            className="inline-flex items-center space-x-2 border border-border-custom hover:border-text-primary px-6 py-3.5 text-sm font-medium transition-colors duration-300"
          >
            <FileText size={16} />
            <span>Download Resume</span>
          </a>

          <div className="flex items-center space-x-4 pl-2">
            <a
              href="https://github.com/Rudra554902y"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-cobalt transition-colors duration-200 p-2"
              aria-label="GitHub profile"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com/in/chandra-keshwar-jaiswal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-cobalt transition-colors duration-200 p-2"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon />
            </a>
          </div>
        </motion.div>

        {/* Subtle inline decorative flow motif */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-border-custom max-w-lg flex items-center space-x-3 text-[10px] font-mono font-bold text-text-secondary select-none uppercase tracking-widest"
        >
          <span>Input</span>
          <span className="text-border-custom font-normal">➔</span>
          <span>Context</span>
          <span className="text-border-custom font-normal">➔</span>
          <span className="text-accent-cobalt">Execution</span>
          <span className="text-border-custom font-normal">➔</span>
          <span>Validation</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
