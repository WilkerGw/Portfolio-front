import { mockProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ProjectDetailsClient } from "./project-details-client";

// Função para buscar o projeto (sem alterações)
const getProjectBySlug = (slug: string) => {
  return mockProjects.find((project) => project.slug === slug);
};

// **CORREÇÃO:** Usando tipagem 'inline' para evitar qualquer conflito.
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: "Projeto não encontrado" };
  }
  return {
    title: `${project.title} | Portfólio`,
    description: project.description,
  };
}

// **CORREÇÃO:** Usando a mesma tipagem 'inline' e direta no componente da página.
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}