"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLoading } from "@/context/LoadingContext";
import { TechIcon } from "./TechIcon"; // <-- IMPORTE O TechIcon

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  ProjectVideo: string;
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
      className="group flex flex-col overflow-hidden rounded-xl border border-white/30 bg-white/10 shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-primary/20"
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
      <div className="flex flex-1 flex-col p-4 md:p-6 text-white">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-gray-300">{description}</p>
        
        {/* ===== ÁREA MODIFICADA ===== */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-gray-50"
            >
              {/* Adiciona o ícone antes do texto */}
              <TechIcon tag={tag} className="h-3 w-3" />
            </span>
          ))}
        </div>
        {/* ============================= */}

      </div>
      <div className="mt-auto border-t border-white/30 p-4 text-sm font-medium text-primary group-hover:underline md:p-6">
        <div className="inline-flex items-center">
          Ver detalhes
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}