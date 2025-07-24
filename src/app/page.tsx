import "./globals.css";
import { AboutSection } from "@/components/AboutSection";
import { VideoSection } from "@/components/VideoSection";
import { ScrollAnimationWrapper } from "../components/ScrollAnimationWrapper";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col itens-center w-screen h-screen bg-black">
      <ScrollAnimationWrapper>
        <HeroSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <AboutSection />
      </ScrollAnimationWrapper>

      <VideoSection />

      <ProjectsSection />

      <ScrollAnimationWrapper>
        <ContactSection/>
      </ScrollAnimationWrapper>
    </div>
  );
}
