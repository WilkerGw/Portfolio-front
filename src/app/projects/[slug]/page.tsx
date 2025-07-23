import { mockProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ProjectDetailsClient } from "./project-details-client"; // Importe o novo componente

// Tipos para as props da página e metadados
type PageProps = {
  params: {
    slug: string;
  };
};

// Função que busca os dados no servidor
const getProjectBySlug = (slug: string) => {
  return mockProjects.find((project) => project.slug === slug);
};

// Função de metadados (só funciona em Server Components)
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

// A página agora é um Server Component simples e assíncrono
export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  // Se o projeto não existe, mostre a página 404
  if (!project) {
    notFound();
  }

  // Renderize o componente de cliente, passando os dados do projeto
  return <ProjectDetailsClient project={project} />;
}