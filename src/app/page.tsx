import "./globals.css";
import { AboutSection } from "@/components/AboutSection";
import { VideoSection } from "@/components/VideoSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { ScrollAnimationWrapper } from "../components/ScrollAnimationWrapper";
import { HeroSection } from "@/components/HeroSection";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <main className="w-sreen h-screen bg-green-100">
      <ScrollAnimationWrapper>
        <HeroSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <AboutSection />
      </ScrollAnimationWrapper>

      <VideoSection />

      <ScrollAnimationWrapper>
        <ProjectsSection />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <ContactSection />
      </ScrollAnimationWrapper>
      </main>
    </div>
  );
}
