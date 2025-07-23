import { ProjectCard } from "./ProjectCard";

const mockProjects = [
  {
    title: "Site Institucional com elementos dinâmicos.",
    description:
      "Site com call actions, galeria de produtos e sistema de agendamento de exame.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDb, SEO"],
    projectUrl: "https://oticasvizz.com.br",
    ProjectVideo: "/videos/vizz-video.mp4",
  },
  {
    title: "Site Imobiliária",
    description:
      "Site para venda e aluguel de imóveis.",
    tags: ["Next.js", "Tailwind", "TypeScript, SEO"],
    projectUrl: "#",
    ProjectVideo: "/videos/imobiliaria-video.mp4",
  },
  {
    title: "Landing Page Inauguração de Bar",
    description:
      "Lading page com contagem regressiva e reserva de espaço e mesas.",
    tags: ["Next.js", "JavaScript", "SEO"],
    projectUrl: "#",
    ProjectVideo: "/videos/bar-video.mp4",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="w-screen py-16 md:py-24 bg-gradient-to-b from-green-950 to-black"
    >
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-gray-500">
          Meus Projetos
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Aqui estão alguns dos projetos em que trabalhei.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map((project) => (
          <ProjectCard
            key={project.title}
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
