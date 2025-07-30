'use client';

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
  SiTailwindcss,
  SiFirebase,
  SiDocker,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";
import Image from "next/image";
// CORREÇÃO 1: Importar o tipo 'Variants' junto com 'motion'
import { motion, Variants } from "framer-motion";

const icons = [
  { component: SiTypescript, title: "TypeScript" },
  { component: SiReact, title: "React" },
  { component: SiNextdotjs, title: "Next.js" },
  { component: SiNodedotjs, title: "Node.js" },
  { component: SiTailwindcss, title: "Tailwind CSS" },
  { component: SiFirebase, title: "Firebase" },
  { component: SiDocker, title: "Docker" },
  { component: SiPostgresql, title: "PostgreSQL" },
  { component: SiMongodb, title: "MongoDB" },
  { component: SiPrisma, title: "Prisma" },
  { component: SiVercel, title: "Vercel" },
  { component: SiRender, title: "Render" },
  { component: SiGooglegemini, title: "Gemini" },
  { component: SiGit, title: "Git" },
  { component: SiGithub, title: "GitHub" },
  { component: SiWordpress, title: "Wordpress" },
  { component: SiCanva, title: "Canva" },
  { component: SiGimp, title: "Gimp" },
];

// CORREÇÃO 2: Adicionar a tipagem ': Variants'
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// CORREÇÃO 3: Adicionar a tipagem ': Variants' aqui também
const iconVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="w-screen min-h-screen py-16 bg-gradient-to-b from-black to-green-950 flex items-center justify-center"
    >
      <div className="p-8 w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-full overflow-hidden shadow shadow-green-100 w-48 h-48 lg:w-64 lg:h-64 mx-auto"
        >
          <Image
            src="https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/wilker-A4Or5WDZVrH2NuX1BtMjQ60P3NYqZy.WebP"
            alt="avatar"
            width={300}
            height={300}
            className="rounded-full w-full h-full object-cover"
          />
        </motion.div>

        <p className="mt-8 text-muted-foreground leading-relaxed text-gray-400 text-center text-lg md:text-xl">
          Desenvolvendo soluções web rápidas, responsivas e escaláveis.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center flex-wrap gap-8 md:gap-12 text-gray-400"
        >
          {icons.map((icon, index) => {
            const IconComponent = icon.component;
            return (
              <motion.div key={index} variants={iconVariants}>
                <IconComponent
                  size={32}
                  title={icon.title}
                  className="hover:text-green-400 hover:scale-110 transition-all"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}