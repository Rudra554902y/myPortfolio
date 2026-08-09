"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

// Inline brand SVGs for compatibility with Lucide React v1+
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
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
    width="14"
    height="14"
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
  return (
    <section id="contact" className="py-24 border-t border-border-custom bg-bg-base/20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Index tag */}
        <div className="lg:col-span-4">
          <span className="text-[10px] font-mono tracking-widest text-accent-cobalt uppercase block">
            09 / Contact
          </span>
        </div>

        {/* Right Column: CTA & Details */}
        <div className="lg:col-span-8 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary font-sans leading-tight">
            Have a system worth building?
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans font-light max-w-2xl">
            If you are interested in backend systems architecture, real-time collaboration engines, custom synchronization protocols, or secure agent workflows, let's connect.
          </p>

          {/* Links Column */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
            <a
              href="mailto:kanhaiyajaiswal1812@gmail.com"
              className="inline-flex items-center space-x-3 bg-text-primary text-bg-base hover:bg-accent-cobalt px-6 py-4 text-xs font-semibold font-mono tracking-wider uppercase transition-colors duration-300"
            >
              <Mail size={14} />
              <span>kanhaiyajaiswal1812@gmail.com ➔</span>
            </a>

            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/Rudra554902y"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold font-mono text-text-secondary hover:text-text-primary hover:text-accent-cobalt transition-colors duration-200"
              >
                <GithubIcon />
                <span>GitHub ↗</span>
              </a>

              <a
                href="https://linkedin.com/in/chandra-keshwar-jaiswal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold font-mono text-text-secondary hover:text-text-primary hover:text-accent-cobalt transition-colors duration-200"
              >
                <LinkedinIcon />
                <span>LinkedIn ↗</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
