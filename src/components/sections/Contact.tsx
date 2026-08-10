"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

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

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 } as any
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: "easeInOut" } as any
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any
    }
  };

  const links = [
    {
      label: "kanhaiyajaiswal1812@gmail.com",
      href: "mailto:kanhaiyajaiswal1812@gmail.com",
      icon: <Mail size={16} />,
      primary: true
    },
    {
      label: "GitHub Profile",
      href: "https://github.com/Rudra554902y",
      icon: <GithubIcon />,
      primary: false
    },
    {
      label: "LinkedIn Profile",
      href: "https://linkedin.com/in/chandra-keshwar-jaiswal",
      icon: <LinkedinIcon />,
      primary: false
    }
  ];

  return (
    <section id="contact" className="py-24 border-t border-border-custom bg-bg-base/20 relative overflow-hidden">
      
      {/* Decorative Technical Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1C1C1C" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Sequential Build Wrapper */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10"
      >
        
        {/* Left Column: Index tag */}
        <div className="lg:col-span-4">
          <motion.span
            variants={itemVariants}
            className="text-[10px] font-mono tracking-widest text-accent-cobalt uppercase block"
          >
            09 / Contact
          </motion.span>
        </div>

        {/* Right Column: Title -> Copy -> Links */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Top Thin Border Line (1st to build) */}
          <div className="relative w-full h-[1px] bg-border-custom origin-left">
            <motion.div
              variants={lineVariants}
              className="absolute inset-0 bg-accent-cobalt"
            />
          </div>

          <div className="space-y-6">
            <motion.h2
              variants={itemVariants}
              className="text-3.5xl sm:text-5xl font-semibold tracking-tight text-text-primary font-sans leading-tight uppercase"
            >
              Let&apos;s build something useful.
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans font-light max-w-xl"
            >
              If you are interested in distributed state architectures, async webhook handlers, AST-based optimizations, or secure tools integration, get in touch.
            </motion.p>
          </div>

          {/* Links Container */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-4 max-w-md"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.primary ? undefined : "_blank"}
                rel={link.primary ? undefined : "noopener noreferrer"}
                className={`flex items-center justify-between p-4 border rounded-sm transition-all duration-300 group min-h-[56px] ${
                  link.primary
                    ? "border-text-primary bg-text-primary text-bg-base hover:bg-accent-cobalt hover:border-accent-cobalt"
                    : "border-border-custom bg-bg-base/50 text-text-primary hover:border-text-primary"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="group-hover:scale-105 group-hover:text-accent-cobalt transition-all duration-300">
                    {link.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-mono tracking-tight font-semibold">
                    {link.label}
                  </span>
                </div>
                <ArrowRight
                  size={14}
                  className="transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                />
              </a>
            ))}
          </motion.div>

          {/* Small closing technical marker */}
          <motion.div
            variants={itemVariants}
            className="pt-6 text-[8px] font-mono text-text-secondary select-none tracking-widest uppercase"
          >
            [STATUS: WAITING_FOR_CONNECTION] &middot; SYS_HALT
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
