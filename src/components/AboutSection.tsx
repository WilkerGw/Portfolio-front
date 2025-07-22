import { SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiVercel, SiRender, SiCanva, SiGimp, SiGithub, SiGooglegemini, SiGit, SiWordpress } from "react-icons/si";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Firebase",
  "Git",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Jest",
];

export function AboutSection() {
  return (
    <section id="sobre" className="w-full bg-green-950">
      <div className="container grid grid-cols-1 gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
        <div className="rounded-xl border border-white/30 bg-white/40 p-8 shadow-lg backdrop-blur-md">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Sobre Mim
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Olá! Sou um desenvolvedor de software apaixonado por criar soluções
            eficientes e escaláveis...
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Busco constantemente aprender novas tecnologias e aprimorar minhas
            habilidades...
          </p>
        </div>
        <div className="rounded-xl border border-white/30 bg-white/40 p-8 shadow-lg backdrop-blur-md">
          <h3 className="text-2xl font-bold tracking-tight">
            Minhas Habilidades
          </h3>
          <div className="mt-6 flex flex-wrap gap-3">
            <SiTypescript size={32} title="TypeScript"/>
            <SiReact size={32} title="React.js"/>
            <SiNextdotjs size={32} title="Next.js"/>
            <SiNodedotjs size={32} title="Node.js"/>
            <SiMongodb size={32} title="MongoDb"/>
            <SiVercel size={32} title="Vercel"/>
            <SiRender size={32} title="Render"/>
            <SiGooglegemini size={32} title="Gemini"/>
            <SiCanva size={32} title="Canva"/>
            <SiGimp size={32} title="Gimp"/>
            <SiGithub size={32} title="GitHub"/>
            <SiGit size={32} title="Git"/>
            <SiWordpress size={32} title="Wordpress"/>           
          </div>
        </div>
      </div>
    </section>
  );
}
