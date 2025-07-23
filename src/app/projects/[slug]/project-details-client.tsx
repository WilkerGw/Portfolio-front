"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLoading } from "@/context/LoadingContext";
import type { Project } from "@/data/projects";
import { TechIcon } from "@/components/TechIcon"; // <-- IMPORTE O NOVO COMPONENTE

export function ProjectDetailsClient({ project }: { project: Project }) {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

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
        <div className="w-full aspect-video overflow-hidden mb-8">
          <video
            src={project.ProjectVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* ===== ÁREA MODIFICADA ===== */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              // Adicionamos flex para alinhar o ícone e o texto
              className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-medium"
            >
              {/* Renderiza o ícone correspondente à tag */}
              <TechIcon tag={tag} className="h-4 w-4" />
              {/* Renderiza o nome da tag */}
              {tag}
            </span>
          ))}
        </div>
        {/* ============================= */}

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-1 text-white">
            Sobre o Projeto
          </h2>
          <p className="text-gray-300">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          {project.projectUrl !== "#" && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-green-500 to-green-800 hover:opacity-90 transition-opacity"
            >
              Ver ao vivo
            </a>
          )}
          {project.repositoryUrl !== "#" && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-gray-600 to-gray-800 hover:opacity-90 transition-opacity"
            >
              Repositório
            </a>
          )}
        </div>
      </div>
    </main>
  );
}