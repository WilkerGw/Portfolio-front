import { ProjectCard } from "./ProjectCard";

const mockProjects = [
  {
    title: "Plataforma de E-commerce",
    description: "Uma plataforma de vendas online completa, com carrinho, checkout e painel de administração.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    projectUrl: "#",
  },
  {
    title: "Sistema de Gerenciamento",
    description: "Dashboard para gerenciamento de tarefas e equipes, com autenticação e relatórios.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    projectUrl: "#",
  },
  {
    title: "Landing Page Institucional",
    description: "Página de apresentação para uma startup de tecnologia, focada em SEO e performance.",
    tags: ["HTML5", "CSS3", "JavaScript", "SEO"],
    projectUrl: "#",
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
          />
        ))}
      </div>
    </section>
  );
}