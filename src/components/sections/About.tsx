"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 } as any
    }
  };

  const frameVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any
    }
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.0, ease: "easeOut", delay: 0.3 } as any
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any
    }
  };

  return (
    <section id="about" className="py-24 border-t border-border-custom bg-bg-base">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: Grayscale Portrait in crop frame */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            variants={frameVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="relative w-full max-w-[280px] aspect-[4/5] border border-border-custom p-3 bg-bg-base shadow-sm"
          >
            <motion.div
              variants={imageVariants}
              className="w-full h-full overflow-hidden rounded-sm relative bg-stone-100"
            >
              {profile.image && (
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  unoptimized={profile.image.startsWith("/")}
                  className="object-cover object-center grayscale contrast-[1.05]"
                />
              )}
            </motion.div>
            
            <div className="absolute -bottom-6 left-0 text-[8px] font-mono text-text-secondary select-none">
              LOC: ALLENHOUSE &middot; DRDO LABS
            </div>
            <div className="absolute -bottom-6 right-0 text-[8px] font-mono text-accent-cobalt select-none">
              SYS_REF_2026
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Staggered Paragraph blocks */}
        <div className="lg:col-span-7">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="space-y-6"
          >
            <motion.span
              variants={textVariants}
              className="text-[10px] font-mono tracking-widest text-accent-cobalt uppercase block"
            >
              08 / Biography
            </motion.span>

            <motion.h2
              variants={textVariants}
              className="text-3xl font-semibold tracking-tight text-text-primary font-sans leading-tight"
            >
              Engineering software systems with clean architecture.
            </motion.h2>

            <div className="space-y-6 text-xs sm:text-sm text-text-secondary leading-relaxed font-sans font-light max-w-xl">
              <motion.p variants={textVariants}>
                I am a final-year Computer Science Engineering student at Allenhouse Institute of Technology and a former research intern at the Defence Research and Development Organisation (DRDO). I spend my time understanding how software systems handle concurrent state, load files securely, and schedule background operations.
              </motion.p>
              
              <motion.p variants={textVariants}>
                <strong>What I build:</strong> I focus on the software ecosystem around language models. I build real-time synchronization pipelines for browser editors, AST parsers to chunk source code, and task workers to offload calculations.
              </motion.p>

              <motion.p variants={textVariants}>
                <strong>What I am currently exploring:</strong> Distributed hash caching algorithms, Model Context Protocol configurations for local tool security, and post-quantum multivariate authentication structures.
              </motion.p>

              <motion.p variants={textVariants}>
                <strong>What motivates my work:</strong> I believe software complexity should be managed with clear design choices and explicit validation boundaries. I enjoy creating environment controls where code is verified before execution.
              </motion.p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
