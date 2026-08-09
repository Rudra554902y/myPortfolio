"use client";

import { motion } from "framer-motion";
import { Calendar, Tag } from "lucide-react";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 } as any
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" } as any
    }
  };

  return (
    <section id="achievements" className="py-24 border-t border-border-custom bg-bg-base/20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Title and details */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-4">
          <span className="text-[10px] font-mono tracking-widest text-accent-cobalt uppercase">
            07 / Timeline Log
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary font-sans leading-tight">
            Engineering Milestones
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed font-sans font-light">
            A chronological record of awards, research internships, and competitive hackathon placements verifying my practical capabilities.
          </p>
        </div>

        {/* Right Column: Achievements Timeline */}
        <div className="lg:col-span-8 relative">
          {/* Vertical connecting timeline line */}
          <div className="absolute left-[13px] top-6 bottom-6 w-[1px] bg-border-custom" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {achievements.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="flex items-start space-x-6 relative pl-2"
              >
                {/* Node Dot */}
                <div className="relative z-10 w-6 h-6 rounded-full bg-bg-base border border-border-custom flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-cobalt" />
                </div>

                {/* Achievement Card */}
                <div className="space-y-2 flex-1 border border-border-custom bg-bg-base p-5 rounded-sm">
                  {/* Meta tag & date */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[9px] font-mono text-text-secondary uppercase">
                    <span className="flex items-center space-x-1 border border-border-custom/80 px-2 py-0.5 rounded-sm">
                      <Tag size={10} className="text-accent-cobalt" />
                      <span>{item.category}</span>
                    </span>
                    <span className="flex items-center space-x-1 font-bold">
                      <Calendar size={10} />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-semibold text-text-primary font-sans leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans font-light">
                    {item.description}
                  </p>

                  {/* Association link if present */}
                  {item.association && (
                    <div className="pt-1">
                      <span className="text-[10px] font-mono text-accent-cobalt font-medium">
                        Associated Project: {item.association}
                      </span>
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
