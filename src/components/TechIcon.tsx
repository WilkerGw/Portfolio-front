import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiVercel,       // <-- Ícone adicionado
  SiRender,       // <-- Ícone adicionado
  SiCanva,        // <-- Ícone adicionado
  SiGimp,         // <-- Ícone adicionado
} from "react-icons/si";
import { IoAnalyticsSharp } from "react-icons/io5";
import { IconType } from "react-icons";

// ATUALIZADO: As chaves agora são minúsculas para corresponder aos seus dados
const ICONS: { [key: string]: IconType } = {
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  mongodb: SiMongodb,
  javascript: SiJavascript,
  seo: IoAnalyticsSharp,
  vercel: SiVercel,       // <-- Ícone adicionado
  render: SiRender,       // <-- Ícone adicionado
  canva: SiCanva,        // <-- Ícone adicionado
  gimp: SiGimp,          // <-- Ícone adicionado
};

type TechIconProps = {
  tag: string;
  className?: string;
};

export function TechIcon({ tag, className }: TechIconProps) {
  // A busca agora funcionará porque as chaves correspondem às tags
  const IconComponent = ICONS[tag];

  if (!IconComponent) {
    return null; // Não renderiza nada se não encontrar o ícone
  }

  return <IconComponent className={className} />;
}