import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";
import { IoAnalyticsSharp } from "react-icons/io5"; // Ícone para SEO
import { IconType } from "react-icons";

// Criamos um mapa (dicionário) que associa o nome da tecnologia ao componente do ícone
const ICONS: { [key: string]: IconType } = {
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  MongoDb: SiMongodb,
  JavaScript: SiJavascript,
  SEO: IoAnalyticsSharp,
  // Adicione outros ícones aqui conforme precisar
};

// Props que nosso componente vai receber
type TechIconProps = {
  tag: string; // O nome da tecnologia, ex: "Next.js"
  className?: string;
};

export function TechIcon({ tag, className }: TechIconProps) {
  // Procuramos o ícone correspondente no nosso mapa
  const IconComponent = ICONS[tag];

  // Se não encontrarmos um ícone para a tag, não renderizamos nada
  if (!IconComponent) {
    return null;
  }

  // Se encontrarmos, renderizamos o componente do ícone com as classes de estilo
  return <IconComponent className={className} />;
}