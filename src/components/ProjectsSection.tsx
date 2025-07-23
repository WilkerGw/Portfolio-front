import { ProjectCard } from "./ProjectCard";
// Import the centralized project data
import { mockProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="w-full py-16 md:py-24 bg-gradient-to-b from-green-950 to-black"
    >
      <div className="mx-auto flex max-w-xl flex-col items-center text-center px-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-gray-200">
          Meus Projetos
        </h2>
        <p className="mt-4 text-slate-400">
          Aqui estão alguns dos projetos em que trabalhei.
        </p>
      </div>

      <div className="lg:mx-8 mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
        {mockProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            // Add the slug prop here
            slug={project.slug}
            title={project.title}
            description={project.description}
            tags={project.tags}
            projectUrl={project.projectUrl}
            ProjectVideo={project.ProjectVideo}
          />
        ))}
      </div>
    </section>
  );
}