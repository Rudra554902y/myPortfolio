export interface Achievement {
  title: string;
  category: string;
  date: string;
  description: string;
  association?: string;
}

export const achievements: Achievement[] = [
  {
    title: "Pitch Excellence Award",
    category: "Industry Recognitions",
    date: "2026",
    description: "Awarded during the IDE Bootcamp Edition 3, Phase 2, in recognition of the collaborative concept, real-time synchronization engine architecture, and presentation of the CodeSync.ai platform.",
    association: "CodeSync.ai"
  },
  {
    title: "Stage II Qualifier, Smart India Hackathon (SIH)",
    category: "Hackathons",
    date: "2024",
    description: "Qualified for the advanced national level stage of India's largest government-backed hardware & software hackathon, developing technical solutions for municipal infrastructure.",
  },
  {
    title: "Research Intern, Lattice-Based Cryptography",
    category: "Research Milestones",
    date: "Oct 2025 – Mar 2026",
    description: "Selected to collaborate with senior scientists at the Defence Research and Development Organisation (DRDO), researching lattice-based post-quantum cryptography protocols and performing formal validation.",
  }
];
