"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Tag, Award } from "lucide-react";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the achievements container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to scaleY of the timeline line
  const scaleY = useTransform(scrollYProgress, [0.1, 0.75], [0, 1]);

  const cardLeftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any
    }
  };

  const cardRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any
    }
  };

  return (
    <section id="achievements" className="py-24 border-t border-border-custom bg-bg-base/20">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-[10px] font-mono tracking-widest text-accent-cobalt uppercase">
            07 / Engineering Log
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary font-sans leading-tight">
            Engineering Milestones
          </h2>
          <p className="text-sm text-text-secondary font-sans font-light leading-relaxed">
            A chronological timeline of hackathons, research publications, and defense research internships validating my practical capabilities.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative pt-8 pb-8">
          
          {/* Central Connecting Line (Desktop) / Left Line (Mobile) */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-[13px] md:left-1/2 top-4 bottom-4 w-[2px] bg-accent-cobalt z-0"
          />

          {/* Timeline Items */}
          <div className="space-y-16 relative">
            {achievements.map((item, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div key={item.title} className="relative min-h-[140px]">
                  
                  {/* Timeline Dot (Node) */}
                  <motion.div
                    initial={{ scale: 0.8, backgroundColor: "#FAF9F6" }}
                    whileInView={{ scale: 1.1, backgroundColor: "#FAF9F6" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="absolute left-1 md:left-1/2 top-6 transform -translate-x-[2px] md:-translate-x-1/2 z-10 w-6 h-6 rounded-full border border-accent-cobalt flex items-center justify-center shadow-sm"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.2 }}
                      className="w-2 h-2 rounded-full bg-accent-cobalt"
                    />
                  </motion.div>

                  {/* Responsive Row Grid Layout */}
                  {/* Desktop Layout: Alternating left and right */}
                  <div className="hidden md:grid grid-cols-12 gap-8 items-start w-full">
                    
                    {/* Left Column Card (Odd indices) */}
                    <div className="col-span-5 text-right">
                      {!isEven && (
                        <motion.div
                          variants={cardLeftVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-100px" }}
                          className="border border-border-custom bg-bg-base p-6 rounded-sm space-y-3 shadow-sm hover:border-text-primary transition-colors duration-300 inline-block text-left w-full"
                        >
                          <MilestoneCardContent item={item} />
                        </motion.div>
                      )}
                    </div>

                    {/* Gap for Central Line */}
                    <div className="col-span-2" />

                    {/* Right Column Card (Even indices) */}
                    <div className="col-span-5">
                      {isEven && (
                        <motion.div
                          variants={cardRightVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-100px" }}
                          className="border border-border-custom bg-bg-base p-6 rounded-sm space-y-3 shadow-sm hover:border-text-primary transition-colors duration-300 w-full"
                        >
                          <MilestoneCardContent item={item} />
                        </motion.div>
                      )}
                    </div>

                  </div>

                  {/* Mobile Layout: Left aligned, cards always on the right */}
                  <div className="md:hidden pl-10 w-full">
                    <motion.div
                      variants={cardRightVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      className="border border-border-custom bg-bg-base p-5 rounded-sm space-y-3 shadow-sm"
                    >
                      <MilestoneCardContent item={item} />
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

// Sub-component for Card Content to avoid duplicate code
function MilestoneCardContent({ item }: { item: typeof achievements[0] }) {
  return (
    <>
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

      <h3 className="text-sm sm:text-base font-semibold text-text-primary font-sans leading-tight">
        {item.title}
      </h3>

      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans font-light">
        {item.description}
      </p>

      {item.association && (
        <div className="pt-1 flex items-center space-x-1 text-[9px] font-mono text-accent-cobalt font-bold">
          <Award size={10} />
          <span>Linked Project: {item.association}</span>
        </div>
      )}
    </>
  );
}
