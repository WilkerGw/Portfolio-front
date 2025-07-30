// src/app/projects/[slug]/page.tsx

import { mockProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ProjectDetailsClient } from "./project-details-client";

// **CORREÇÃO:** Definindo o tipo correto para as props da página.
type PageProps = {
  params: {
    slug: string;
  };
};

// Função que busca os dados no servidor
const getProjectBySlug = (slug: string) => {
  return mockProjects.find((project) => project.slug === slug);
};

// Gera os metadados para SEO (título da aba, etc.)
export async function generateMetadata({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: "Projeto não encontrado" };
  }
  return {
    title: `${project.title} | Portfólio`,
    description: project.description,
  };
}

// A página do servidor
export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Renderiza o componente de cliente, passando os dados do projeto
  return <ProjectDetailsClient project={project} />;
}