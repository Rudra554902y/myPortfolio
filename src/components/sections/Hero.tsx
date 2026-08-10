"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, FileText } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";

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
  const easeCurve = [0.16, 1, 0.3, 1];

  // Precision timings based on requirements
  const eyebrowAnim = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0 } as any },
  };

  const titleAnim = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeCurve, delay: 0.15 } as any },
  };

  const frameAnim = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: easeCurve, delay: 0.35 } as any },
  };

  const imageAnim = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: easeCurve, delay: 0.5 } as any },
  };

  const descAnim = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeCurve, delay: 0.65 } as any },
  };

  const actionsAnim = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeCurve, delay: 0.8 } as any },
  };

  const systemTagVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.95 + i * 0.08 } as any,
    }),
  };

  // Flow Motif Sequenced Timings (1100ms onwards)
  const flowNodeVariants = (delayVal: number) => ({
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut", delay: delayVal } as any,
    },
  });

  const flowLineVariants = (delayVal: number) => ({
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.3, ease: "linear", delay: delayVal } as any,
    },
  });

  const systemTags = ["SYSTEMS", "AI", "BACKEND", "DISTRIBUTED STATE", "WORKFLOW"];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center max-w-6xl mx-auto px-6 pt-32 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: Narrative & Info */}
        <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
          {/* Eyebrow / Technical Tag */}
          <motion.div
            variants={eyebrowAnim}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            <span className="text-[10px] font-mono tracking-widest text-accent-cobalt bg-accent-cobalt/5 border border-accent-cobalt/20 px-3 py-1 uppercase rounded-sm">
              00 / System Core
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-6">
            <motion.h1
              variants={titleAnim}
              initial="hidden"
              animate="visible"
              className="text-3.5xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-text-primary leading-[1.15] font-sans"
            >
              I build intelligent software systems that connect people, tools, and computation.
            </motion.h1>

            <motion.p
              variants={descAnim}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg text-text-secondary font-sans font-light leading-relaxed max-w-xl"
            >
              Backend architect specializing in collaborative document sync, state machine routing, workflow automation queues, and cryptographic protocol verification. Developing systems engineered <span className="font-medium text-text-primary">beyond the model</span>.
            </motion.p>
          </div>

          {/* CTAs & Socials */}
          <motion.div
            variants={actionsAnim}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#work"
              className="group inline-flex items-center space-x-2 bg-text-primary text-bg-base hover:bg-accent-cobalt px-6 py-3.5 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-sm min-h-[48px] rounded-sm"
            >
              <span>Explore Systems</span>
              <ArrowDownRight size={14} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-200" />
            </a>

            <a
              href="/Chandra_Keshwar_Resume.pdf"
              download="Chandra_Keshwar_Resume.pdf"
              className="inline-flex items-center space-x-2 border border-border-custom hover:border-text-primary px-6 py-3.5 text-xs font-mono font-bold tracking-wider uppercase transition-colors duration-300 min-h-[48px] rounded-sm"
            >
              <FileText size={14} />
              <span>Download Resume</span>
            </a>

            <div className="flex items-center space-x-2 pl-2">
              <a
                href="https://github.com/Rudra554902y"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-cobalt transition-colors duration-200 p-3 min-h-[48px] min-w-[48px] flex items-center justify-center"
                aria-label="GitHub profile"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com/in/chandra-keshwar-jaiswal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-cobalt transition-colors duration-200 p-3 min-h-[48px] min-w-[48px] flex items-center justify-center"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon />
              </a>
            </div>
          </motion.div>

          {/* Runtime Assembled System Motif (under headline, starts at 1100ms) */}
          <div className="pt-8 border-t border-border-custom max-w-lg flex items-center space-x-3 text-[10px] font-mono font-bold text-text-secondary select-none uppercase tracking-widest">
            
            <motion.span
              variants={flowNodeVariants(1.1)}
              initial="hidden"
              animate="visible"
            >
              Input
            </motion.span>
            
            <motion.span
              variants={flowLineVariants(1.25)}
              initial="hidden"
              animate="visible"
              className="text-border-custom font-normal origin-left"
            >
              ➔
            </motion.span>
            
            <motion.span
              variants={flowNodeVariants(1.4)}
              initial="hidden"
              animate="visible"
            >
              Context
            </motion.span>
            
            <motion.span
              variants={flowLineVariants(1.55)}
              initial="hidden"
              animate="visible"
              className="text-border-custom font-normal origin-left"
            >
              ➔
            </motion.span>
            
            <motion.span
              variants={flowNodeVariants(1.7)}
              initial="hidden"
              animate="visible"
              className="text-accent-cobalt"
            >
              Execution
            </motion.span>
            
            <motion.span
              variants={flowLineVariants(1.85)}
              initial="hidden"
              animate="visible"
              className="text-border-custom font-normal origin-left"
            >
              ➔
            </motion.span>
            
            <motion.span
              variants={flowNodeVariants(2.0)}
              initial="hidden"
              animate="visible"
            >
              Validation
            </motion.span>
          </div>
        </div>

        {/* RIGHT COLUMN: Photo Composition */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-[340px] aspect-[4/5]">
            
            {/* Background ivory panel frame (350ms) */}
            <motion.div
              variants={frameAnim}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 bg-[#FAF9F6] border border-border-custom rounded-sm shadow-sm"
              style={{ originX: 0.5, originY: 0.5 }}
            />

            {/* Subtle blue accent corner line (grows on frame load) */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="absolute -top-1.5 -left-1.5 w-8 h-[2px] bg-accent-cobalt"
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="absolute -top-1.5 -left-1.5 w-[2px] h-8 bg-accent-cobalt"
            />

            {/* Profile Photo Image Frame (500ms) */}
            <div className="absolute inset-4 overflow-hidden rounded-sm bg-stone-100">
              <motion.div
                variants={imageAnim}
                initial="hidden"
                animate="visible"
                className="w-full h-full relative"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                {profile.image && (
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    priority
                    unoptimized={profile.image.startsWith("/")}
                    className="object-cover object-center grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500"
                  />
                )}
              </motion.div>
            </div>

            {/* System tags load (950ms onwards) */}
            <div className="absolute -right-4 top-12 flex flex-col space-y-3 pointer-events-none">
              {systemTags.map((tag, idx) => (
                <motion.div
                  key={tag}
                  custom={idx}
                  variants={systemTagVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-bg-base/90 backdrop-blur-sm border border-border-custom/80 px-2.5 py-1 text-[8px] font-mono tracking-widest text-text-primary rounded-sm shadow-sm"
                >
                  {tag}
                </motion.div>
              ))}
            </div>

            {/* Bottom metadata tags */}
            <div className="absolute left-4 bottom-6 text-[8px] font-mono text-text-secondary select-none">
              C. KESHWAR &middot; SYSTEMS ARCHITECT
            </div>
            <div className="absolute right-6 bottom-6 text-[8px] font-mono text-accent-cobalt font-bold select-none">
              [ACTIVE_RECON]
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
