import CanvasSequence from "@/components/CanvasSequence";
import CursorGlow from "@/components/CursorGlow";
import CyberNavbar from "@/components/CyberNavbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative w-full text-white font-sans selection:bg-cyber-cyan selection:text-black">
      <CursorGlow />
      <CyberNavbar />
      <CanvasSequence />
      
      {/* Content wrapper with z-index to stay above canvas */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </main>
  );
}
