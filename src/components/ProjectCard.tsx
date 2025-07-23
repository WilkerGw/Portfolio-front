"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLoading } from "@/context/LoadingContext";
import type { ElementType } from "react";
// Importe todos os ícones que você vai precisar
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiCanva,
  SiGimp,
} from "react-icons/si";
import { IoAnalyticsSharp } from "react-icons/io5";

// 1. Crie um mapa de ícones
// Este objeto "traduz" a string recebida na prop para o componente de ícone real.
const iconMap: { [key: string]: ElementType } = {
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  mongodb: SiMongodb,
  javascript: SiJavascript,
  seo: IoAnalyticsSharp,
  canva: SiCanva,
  gimp: SiGimp,
};

// 2. Atualize a tipagem das props para receber strings
type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  tags: string[]; // <-- ALTERADO de volta para string[]
  ProjectVideo: string;
  repositoryUrl: string;
};

export function ProjectCard({
  slug,
  title,
  description,
  tags,
  ProjectVideo,
}: ProjectCardProps) {
  const { setIsLoading } = useLoading();

  const handleCardClick = () => {
    setIsLoading(true);
  };

  return (
    <Link
      href={`/projects/${slug}`}
      onClick={handleCardClick}
      className="group flex flex-col overflow-hidden rounded-xl shadow shadow-green-100/5 bg-background/50 text-green-100 bg-white/10 backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-primary/20"
    >
      <div className="overflow-hidden">
        <video
          src={ProjectVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover aspect-video"
        ></video>
      </div>
      <div className="flex flex-1 flex-col p-4 md:p-6 text-gray-500 bg-[#0C1F00]">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-gray-500/70">{description}</p>

        {/* 3. Mapeie as strings e renderize os ícones a partir do 'iconMap' */}
        <div className="mt-4 flex flex-wrap gap-3 text-2xl text-gray-300">
          {tags.map((tagKey) => {
            const Icon = iconMap[tagKey]; // Encontra o componente de ícone no mapa
            if (!Icon) return null; // Se a tag não for encontrada, não renderiza nada
            return (
              <div key={tagKey} className="hover:text-white transition-colors">
                <Icon className="text-gray-500" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-auto p-4 text-sm font-medium text-primary md:p-6 bg-gradient-to-b from-[#0C1F00] to-black">
        <div className="inline-flex items-center text-green-200 group-hover:underline">
          Ver detalhes
          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
}
