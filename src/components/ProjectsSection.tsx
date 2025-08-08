// src/components/ProjectsSection.tsx

'use client';

// 1. Importe o useState e o ProjectModal
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { mockProjects, type Project } from "@/data/projects";
import { ProjectModal } from "./ProjectModal"; // Importe o modal

export function ProjectsSection() {
  // 2. Crie estados para controlar o modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // 3. Funções para abrir e fechar o modal
  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section
        id="projetos"
        className="w-full py-16 md:py-24 bg-gradient-to-b from-green-950 to-black"
      >
        <div className="mx-auto flex max-w-xl flex-col items-center text-center px-4">
          <h2 className="text-3xl tracking-tight md:text-4xl text-gray-300 font-special-gothic">
            PROJETOS
          </h2>
          <p className="mt-4 text-slate-400">
            Encontrou algo similar ao que busca para o seu projeto? Entre em contato.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
          {mockProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              // 4. Passe a função para abrir o modal para o card
              onCardClick={handleOpenModal}
            />
          ))}
        </div>
      </section>

      {/* 5. Renderize o modal aqui, passando o projeto selecionado e a função para fechar */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </>
  );
}