"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } as any
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } as any
    }
  };

  return (
    <section id="capabilities" className="py-24 border-t border-border-custom bg-bg-base/20">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-[10px] font-mono tracking-widest text-accent-cobalt uppercase">
            05 / Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary font-sans leading-tight">
            Technical Competencies
          </h2>
          <p className="text-sm sm:text-base text-text-secondary font-sans font-light leading-relaxed">
            A comprehensive mapping of my engineering capabilities and technologies, organized by domain focus.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.domain}
              variants={itemVariants}
              className="border border-border-custom bg-bg-base p-6 rounded-sm space-y-4"
            >
              {/* Domain Header */}
              <h3 className="text-xs font-mono font-bold tracking-widest text-accent-cobalt uppercase border-b border-border-custom pb-2">
                {group.domain}
              </h3>

              {/* Skills List */}
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-xs text-text-secondary font-sans font-light leading-normal flex items-start space-x-2"
                  >
                    <span className="text-accent-cobalt font-mono select-none">&middot;</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
