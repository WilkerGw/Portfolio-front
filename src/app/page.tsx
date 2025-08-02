// src/app/page.tsx

import "./globals.css";
import { HeroSection } from "@/components/HeroSection";
// 1. Importe 'dynamic' do Next.js
import dynamic from 'next/dynamic';

// 2. Carregue os componentes dinamicamente
const AboutSection = dynamic(() => import('@/components/AboutSection').then(mod => mod.AboutSection));
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection').then(mod => mod.ProjectsSection));
const ContactSection = dynamic(() => import('@/components/ContactSection'));

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}