import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiVercel,
  SiRender,
  SiCanva,
  SiGimp,
  SiGithub,
  SiGooglegemini,
  SiGit,
  SiWordpress,
} from "react-icons/si";
import Image from "next/image";

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
    <section id="sobre" className="w-screen h-screen bg-gradient-to-b from-black to-green-950">
        <div className="p-8 shadow-lg backdrop-blur-md w-full h-full">
          <div className="rounded-full overflow-hidden shadow shadow-green-100 lg:w-100 lg:h-100 mx-auto">
            <Image
              src="/images/wilker.png"
              alt="avatar"
              width={300}
              height={300}
              className="rounded-full w-full h-full object-cover"
            ></Image>
          </div>
          <p className="mt-6 text-muted-foreground leading-relaxed text-gray-500 text-center">
            Desenvolvendo soluções web rápidas, responsivas e escaláveis.
          </p>
          <div className="mt-6 flex itends-center justify-center flex-wrap gap-12 text-gray-500">
            <SiTypescript size={32} title="TypeScript" />
            <SiReact size={32} title="React.js" />
            <SiNextdotjs size={32} title="Next.js" />
            <SiNodedotjs size={32} title="Node.js" />
            <SiMongodb size={32} title="MongoDb" />
            <SiVercel size={32} title="Vercel" />
            <SiRender size={32} title="Render" />
            <SiGooglegemini size={32} title="Gemini" />
            <SiCanva size={32} title="Canva" />
            <SiGimp size={32} title="Gimp" />
            <SiGithub size={32} title="GitHub" />
            <SiGit size={32} title="Git" />
            <SiWordpress size={32} title="Wordpress" />
          </div>
      </div>
    </section>
  );
}
