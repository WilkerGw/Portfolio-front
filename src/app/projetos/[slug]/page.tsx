// src/app/projetos/[slug]/page.tsx

import { mockProjects, type Project } from "@/data/projects";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TechIcon } from "@/components/TechIcon";
import { Github, ExternalLink } from "lucide-react";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return mockProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const project = mockProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: `${project.title} | Projeto de Wilker Martins`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Projeto de Wilker Martins`,
      description: project.description,
      images: [
        {
          url: project.images[0] || project.ProjectVideo,
          width: 1200,
          height: 630,
          alt: `Imagem do projeto ${project.title}`,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params: { slug } }: PageProps) {
  const project = mockProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold">Projeto não encontrado</h1>
        <Link href="/" className="mt-4 text-green-400 hover:underline">
          Voltar para o início
        </Link>
      </div>
    );
  }

  // O resto do seu componente...
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-green-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
            <Link href="/#projetos" className="text-green-400 hover:underline mb-8 inline-block">
            &larr; Voltar para todos os projetos
            </Link>

            <div className="mb-8 rounded-lg overflow-hidden shadow-lg shadow-green-900/20">
                <video
                    src={project.ProjectVideo}
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover aspect-video"
                />
            </div>

            <h1 className="text-4xl font-bold font-special-gothic text-gray-200 mb-4">{project.title}</h1>
            <p className="text-lg text-gray-400 mb-8">{project.description}</p>
            
            {/* O restante do seu JSX aqui */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-300">Tecnologias Utilizadas</h2>
                <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-gray-300 shadow shadow-green-100/10"
                    >
                        <TechIcon tag={tag} className="h-5 w-5" />
                        <span className="capitalize">{tag}</span>
                    </span>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-4 mb-12">
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="aurora-button group inline-flex h-11 items-center justify-center rounded-md px-6 text-sm font-semibold text-gray-100 shadow-lg shadow-green-900/50">
                    Ver Projeto Online
                    <ExternalLink size={18} className="ml-2" />
                </a>
                <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="aurora-button group inline-flex h-11 items-center justify-center rounded-md px-6 text-sm font-semibold text-gray-100 shadow-lg shadow-green-900/50">
                    Repositório
                    <Github size={18} className="ml-2" />
                </a>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-300">Galeria</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-md shadow-green-900/15">
                            <Image
                                src={image}
                                alt={`Imagem ${index + 1} do projeto ${project.title}`}
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </main>
  );
}