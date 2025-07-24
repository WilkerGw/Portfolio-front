import { ProjectCard } from "./ProjectCard";
import { mockProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="w-full py-16 md:py-24 bg-gradient-to-b from-green-950 to-black"
    >
      <div className="mx-auto flex max-w-xl flex-col items-center text-center px-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-gray-500">
          Alguns Projetos
        </h2>
        <p className="mt-4 text-slate-400">
          Encontrou algo similar ao que busca para o seu projeto? Entre em contato.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
        {mockProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            description={project.description}
            tags={project.tags}
            // A linha abaixo foi removida pois ProjectCard não usa mais esta prop
            // projectUrl={project.projectUrl} 
            ProjectVideo={project.ProjectVideo}
          />
        ))}
      </div>
    </section>
  );
}