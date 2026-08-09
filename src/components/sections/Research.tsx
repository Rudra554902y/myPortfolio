"use client";

import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, Link2 } from "lucide-react";
import { publications } from "@/data/publications";

export default function Research() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 } as any
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } as any
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
            Security & Protocol Validation
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

        {/* Right Column: Academic Cards */}
        <div className="lg:col-span-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {publications.map((pub) => (
              <motion.div
                key={pub.title}
                variants={cardVariants}
                className="border border-border-custom bg-bg-base/30 p-6 rounded-sm space-y-4 hover:border-text-primary transition-colors duration-300"
              >
                {/* Paper Header */}
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-[10px] font-mono text-accent-cobalt font-semibold uppercase tracking-wider">
                    <BookOpen size={12} />
                    <span>{pub.venue} &middot; {pub.date}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-text-primary font-sans leading-tight">
                    {pub.title}
                  </h3>
                </div>

                {/* Authors */}
                <p className="text-[11px] font-mono text-text-secondary uppercase">
                  Authors: {pub.authors}
                </p>

                {/* Contribution details */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans font-light">
                  {pub.focus}
                </p>

                {/* DOI link */}
                <div className="pt-2">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-mono font-bold text-accent-cobalt hover:underline"
                  >
                    <Link2 size={12} />
                    <span>DOI: {pub.doi} ↗</span>
                  </a>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
