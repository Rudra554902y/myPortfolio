import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Projects from "@/components/sections/Projects";
import Decisions from "@/components/sections/Decisions";
import Skills from "@/components/sections/Skills";
import Research from "@/components/sections/Research";
import Achievements from "@/components/sections/Achievements";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Sticky header navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 01: Hero and positioning */}
        <Hero />
        
        {/* 02: Beyond the Model (Consolidated layers and core themes) */}
        <Philosophy />

        {/* 03: Featured Work (Static project cards & diagrams) */}
        <Projects />

        {/* 04: Engineering Decisions & Trade-offs */}
        <Decisions />

        {/* 05: Technical Competencies */}
        <Skills />

        {/* 06: Published Cryptographic Research */}
        <Research />

        {/* 07: Timeline Log milestones */}
        <Achievements />

        {/* 08: About me */}
        <About />

        {/* 09: Direct Contact triggers */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </>
  );
}
