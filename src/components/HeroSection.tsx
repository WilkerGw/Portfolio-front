'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import IconCarousel from './IconCarousel';

export function HeroSection() {
  return (
    <section
      className="
        relative
        h-screen
        bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop
        bg-cover bg-center
        flex flex-col items-center justify-center text-white px-4
      "
    >
      {/* Conteúdo principal */}
      <div className="text-center max-w-2xl z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Olá, sou Wilker 👋
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Desenvolvedor Front-end focado em criar experiências digitais impactantes.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <Link
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <Github size={28} />
          </Link>
          <Link
            href="https://linkedin.com/in/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <Linkedin size={28} />
          </Link>
        </div>
        <Link href="#sobre" className="inline-flex items-center gap-2 text-sm md:text-base">
          <ArrowDown className="animate-bounce" />
          Saiba mais
        </Link>
      </div>

      {/* Carrossel de ícones */}
      <div className="absolute bottom-10 w-full">
        <IconCarousel />
      </div>

      {/* Sobreposição opcional para contraste (remova se não quiser) */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </section>
  );
}
