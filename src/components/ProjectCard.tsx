// src/components/ProjectCard.tsx

"use client";

import { TechIcon } from "./TechIcon";
import { CiCirclePlus } from "react-icons/ci";
import type { Project } from "@/data/projects"; // Importe o tipo Project

type ProjectCardProps = {
  project: Project;
  onCardClick: (project: Project) => void;
};

export function ProjectCard({ project, onCardClick }: ProjectCardProps) {
  const { title, description, tags, ProjectVideo } = project;

  // O Link foi removido. Agora usamos um 'div' clicável.
  return (
      <div
        // A função onCardClick é chamada com os dados do projeto.
        onClick={() => onCardClick(project)}
        className="group flex flex-col overflow-hidden rounded-xl bg-white/10 backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-primary/20 shadow shadow-green-100/20 cursor-pointer"
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
        <div className="flex flex-1 flex-col p-4 md:p-6 text-white bg-gradient-to-b from-green-950 to-black">
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 flex-1 text-sm text-gray-400">{description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full shadow shadow-green-100/20 px-3 py-1 text-xs font-medium text-gray-400"
              >
                <TechIcon tag={tag} className="h-4 w-4" />
                <span className="capitalize">{tag}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto p-4 text-sm font-medium text-primary group-hover:underline md:p-6 bg-black">
          <div className="flex items-center justify-center text-gray-500">
            Ver Detalhes
            <CiCirclePlus size={20} className="ml-2"/>
          </div>
        </div>
      </div>
  );
}