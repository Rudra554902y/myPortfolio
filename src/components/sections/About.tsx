"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border-custom bg-bg-base">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Index tag */}
        <div className="lg:col-span-4">
          <span className="text-[10px] font-mono tracking-widest text-accent-cobalt uppercase block">
            08 / About Me
          </span>
        </div>

        {/* Right Column: Narrative */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary font-sans leading-tight">
            Engineering software systems with clean architecture.
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed font-sans font-light max-w-2xl">
            <p>
              I am a final-year Computer Science Engineering student at Allenhouse Institute of Technology and a former research intern at the Defence Research and Development Organisation (DRDO). I spend my time understanding how software systems handle concurrent state, load files securely, and schedule background operations.
            </p>
            <p>
              Rather than treating AI as a black box or building simple chat wrappers, I focus on the software ecosystem around language models. I build real-time synchronization pipelines for browser editors, AST parsers to chunk source code, and task workers to offload calculations.
            </p>
            <p>
              My goal is to construct robust, performant backend architectures where AI models, local vector stores, task queues, and human verification gates work together. I believe software complexity should be managed with clear design choices and explicit validation boundaries.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
