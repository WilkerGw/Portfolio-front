import { mockProjects } from "@/data/projects";
import { notFound } from "next/navigation";

// Função que busca os dados no servidor
const getProjectBySlug = (slug: string) => {
  return mockProjects.find((project) => project.slug === slug);
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Apenas renderiza o título para testar a busca de dados
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "#111",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div>
        <h1>Título do Projeto: {project.title}</h1>
        <p>Passo 1 concluído com sucesso!</p>
      </div>
    </div>
  );
}