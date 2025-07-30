// src/components/ProjectsSection.tsx

'use client';

import { useState } from 'react';
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from './ProjectModal'; // 1. Importe o novo modal
import { mockProjects, type Project } from "@/data/projects"; // 2. Importe o tipo Project

export function ProjectsSection() {
  // 3. Crie um estado para controlar o projeto selecionado
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // 4. Função para abrir o modal
  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  // 5. Função para fechar o modal
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
              project={project} // 6. Passe o objeto inteiro do projeto
              onCardClick={handleOpenModal} // 7. Passe a função para abrir o modal
            />
          ))}
        </div>
      </section>

      {/* 8. Renderize o modal aqui, fora da seção principal */}
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
}