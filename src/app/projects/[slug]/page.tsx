"use client";

import { useEffect } from "react";
import { mockProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLoading } from "@/context/LoadingContext";
import type { ElementType } from "react";

// 1. Importe os ícones necessários
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";
import { IoAnalyticsSharp } from "react-icons/io5";

// 2. Crie o mapa de tradução de string para ícone
const iconMap: { [key: string]: ElementType } = {
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  mongodb: SiMongodb,
  javascript: SiJavascript,
  seo: IoAnalyticsSharp,
};

const getProjectBySlug = (slug: string) => {
  return mockProjects.find((project) => project.slug === slug);
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { setIsLoading } = useLoading();
  const project = getProjectBySlug(params.slug);

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-[#0C1F00] text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft size={16} />
          Voltar
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          {project.title}
        </h1>

        <div className="w-full aspect-video overflow-hidden rounded-lg mb-8">
          <video
            src={project.ProjectVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* 3. Mapeie as tags para renderizar os ícones */}
        <div className="flex flex-wrap items-center gap-4 text-3xl text-gray-300 mb-8">
          {project.tags.map((tagKey) => {
            const Icon = iconMap[tagKey];
            if (!Icon) return null;
            return (
              <div
                key={tagKey}
                title={tagKey} // Adiciona um tooltip com o nome da tecnologia
                className="hover:text-white transition-colors"
              >
                <Icon />
              </div>
            );
          })}
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300">{project.description}</p>
        </div>

        {/* Container dos botões */}
        <div className="flex flex-wrap justify-between gap-4 mt-8">
          {/* Botão "Ver ao vivo" */}
          {project.projectUrl !== "#" && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 font-semibold text-white rounded-lg bg-green-300/10 bg-gradient-to-r shadow shadow-green-100/20 bg-background/50 text-white-100/20 hover:opacity-90 transition-opacity"
            >
              Ver ao vivo
            </a>
          )}

          {/* Botão "Repositório" */}
          {project.repositoryUrl !== "#" && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 font-semibold text-white rounded-lg shadow shadow-green-100/20 bg-background/50 text-white-100/20 hover:opacity-90 transition-opacity"
            >
              Repositório
            </a>
          )}
        </div>
      </div>
    </main>
  );
}