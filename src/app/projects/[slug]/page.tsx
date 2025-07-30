import { mockProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ProjectDetailsClient } from "./project-details-client";

// Tipo explícito para as props da função generateMetadata
type MetadataProps = {
  params: {
    slug: string;
  };
};

// Tipo explícito para as props do componente da Página
type PageComponentProps = {
  params: {
    slug: string;
  };
};

// Função que busca os dados no servidor
const getProjectBySlug = (slug: string) => {
  return mockProjects.find((project) => project.slug === slug);
};

// Gera os metadados para SEO, usando o tipo 'MetadataProps'
export async function generateMetadata({ params }: MetadataProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: "Projeto não encontrado" };
  }
  return {
    title: `${project.title} | Portfólio`,
    description: project.description,
  };
}

// A página do servidor, usando o tipo 'PageComponentProps'
export default function ProjectPage({ params }: PageComponentProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}