"use client";

import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, ArrowRight } from "lucide-react";
import { publications } from "@/data/publications";

export default function Research() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 } as any
    }
  };

  // Card Frame Reveal
  const cardFrameVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any
    }
  };

  // Internal element staggers
  const textStaggerVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" } as any
    }
  };

  return (
    <section id="research" className="py-24 border-t border-border-custom bg-bg-base">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Heading and Context */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-6">
          <span className="text-[10px] font-mono tracking-widest text-accent-cobalt uppercase">
            06 / Cryptographic Research
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary font-sans leading-tight">
            Security &amp; Protocol Validation
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed font-sans font-light">
            My published academic research in post-quantum cryptography focuses on protocol correctness, cryptographic key structures, and mathematically proving resilience.
          </p>
          <div className="flex items-start space-x-3 text-accent-cobalt bg-accent-cobalt/5 p-4 rounded-sm border border-accent-cobalt/10">
            <ShieldCheck size={18} className="flex-shrink-0 mt-0.5" />
            <p className="text-xs text-text-secondary leading-relaxed font-sans font-light">
              This academic work informs my software development practices, driving me to design systems around explicit security verification, cryptographic signature audits, and strict validation boundaries.
            </p>
          </div>
        </div>

        {/* Right Column: Academic Cards with runtime-choreographed builds */}
        <div className="lg:col-span-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            {publications.map((pub, idx) => (
              <motion.div
                key={pub.title}
                variants={cardFrameVariants}
                whileHover={{ y: -3, borderColor: "#1C1C1C" }}
                transition={{ duration: 0.3 }}
                className="border border-border-custom bg-bg-base/30 p-6 rounded-sm space-y-4 shadow-sm relative group cursor-pointer"
              >
                
                {/* Child build elements */}
                <motion.div
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08 } }
                  }}
                  className="space-y-3"
                >
                  {/* Eyebrow / marker */}
                  <motion.div
                    variants={textStaggerVariants}
                    className="flex items-center justify-between text-[9px] font-mono text-text-secondary group-hover:text-accent-cobalt transition-colors duration-300 uppercase tracking-wider"
                  >
                    <div className="flex items-center space-x-2">
                      <BookOpen size={12} className="text-text-secondary group-hover:text-accent-cobalt transition-colors" />
                      <span>{pub.venue} &middot; {pub.date}</span>
                    </div>
                    <span>PUB 0{idx + 1}</span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    variants={textStaggerVariants}
                    className="text-base sm:text-lg font-semibold text-text-primary font-sans leading-tight"
                  >
                    {pub.title}
                  </motion.h3>

                  {/* Authors */}
                  <motion.p
                    variants={textStaggerVariants}
                    className="text-[10px] font-mono text-text-secondary uppercase"
                  >
                    Authors: {pub.authors}
                  </motion.p>

                  {/* Focus */}
                  <motion.p
                    variants={textStaggerVariants}
                    className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans font-light"
                  >
                    {pub.focus}
                  </motion.p>

                  {/* DOI */}
                  <motion.div
                    variants={textStaggerVariants}
                    className="pt-2"
                  >
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-accent-cobalt group-hover:underline"
                    >
                      <span>DOI: {pub.doi}</span>
                      <ArrowRight 
                        size={12} 
                        className="group-hover:translate-x-1 transition-transform duration-300 text-accent-cobalt" 
                      />
                    </a>
                  </motion.div>
                </motion.div>

              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
