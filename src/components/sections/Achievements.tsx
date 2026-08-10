"use client";

import { motion } from "framer-motion";
import { Calendar, Tag, Award } from "lucide-react";
import { achievements } from "@/data/achievements";

export default function Achievements() {
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

        {/* Timeline row sequence */}
        <div className="relative space-y-16">
          {achievements.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <TimelineRow
                key={item.title}
                item={item}
                isEven={isEven}
                isLast={idx === achievements.length - 1}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

// ------------------------------------------------------------------
// Viewport-staggered Row Component (Sequential runtime assembly)
// ------------------------------------------------------------------

interface TimelineRowProps {
  item: typeof achievements[0];
  isEven: boolean;
  isLast: boolean;
}

function TimelineRow({ item, isEven, isLast }: TimelineRowProps) {
  // Stagger variants for sequential build
  const rowVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      } as any
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.4, ease: "linear" } as any
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" } as any
    }
  };

  const cardVariants = (xOffset: number) => ({
    hidden: { opacity: 0, y: 30, x: xOffset },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } as any
    }
  });

  return (
    <motion.div
      variants={rowVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="relative min-h-[140px]"
    >
      {/* 1. Timeline Line Segment (Desktop Center, Mobile Left) */}
      {!isLast && (
        <motion.div
          variants={lineVariants}
          className="absolute left-[13px] md:left-1/2 top-6 bottom-[-64px] w-[2px] bg-accent-cobalt z-0 origin-top"
        />
      )}

      {/* 2. Marker Dot (Node appears after line draws) */}
      <motion.div
        variants={dotVariants}
        className="absolute left-1 md:left-1/2 top-6 transform -translate-x-[2px] md:-translate-x-1/2 z-10 w-6 h-6 rounded-full border border-accent-cobalt bg-bg-base flex items-center justify-center shadow-sm"
      >
        <div className="w-2 h-2 rounded-full bg-accent-cobalt" />
      </motion.div>

      {/* Desktop alternating cards */}
      <div className="hidden md:grid grid-cols-12 gap-8 items-start w-full">
        {/* Left Side */}
        <div className="col-span-5 text-right">
          {!isEven && (
            <motion.div
              variants={cardVariants(-30)}
              className="border border-border-custom bg-bg-base p-6 rounded-sm space-y-3 shadow-sm hover:border-text-primary transition-colors duration-300 inline-block text-left w-full"
            >
              <MilestoneContent item={item} />
            </motion.div>
          )}
        </div>

        {/* Center alignment spacer */}
        <div className="col-span-2" />

        {/* Right Side */}
        <div className="col-span-5">
          {isEven && (
            <motion.div
              variants={cardVariants(30)}
              className="border border-border-custom bg-bg-base p-6 rounded-sm space-y-3 shadow-sm hover:border-text-primary transition-colors duration-300 w-full"
            >
              <MilestoneContent item={item} />
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile left-aligned layout */}
      <div className="md:hidden pl-10 w-full">
        <motion.div
          variants={cardVariants(20)}
          className="border border-border-custom bg-bg-base p-5 rounded-sm space-y-3 shadow-sm"
        >
          <MilestoneContent item={item} />
        </motion.div>
      </div>

    </motion.div>
  );
}

function MilestoneContent({ item }: { item: typeof achievements[0] }) {
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
