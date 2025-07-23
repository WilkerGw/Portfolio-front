import { mockProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ProjectDetailsClient } from "./project-details-client";

// Função que busca os dados no servidor
const getProjectBySlug = (slug: string) => {
  return mockProjects.find((project) => project.slug === slug);
};

// ======================= MUDANÇA AQUI =======================
// Em vez de usar um tipo 'PageProps' separado, definimos as props diretamente.
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
// =============================================================

// ======================= E MUDANÇA AQUI =======================
// A página também recebe o tipo de props diretamente.
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}
// =============================================================