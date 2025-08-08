// src/components/ProjectsSection.tsx

'use client';

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { mockProjects, type Project } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

        {/* 👇 ALTERAÇÃO FEITA NESTA LINHA 👇 */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 px-4">
          {mockProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onCardClick={handleOpenModal}
            />
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </>
  );
}