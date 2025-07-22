import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaDocker,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

// Array com a definição dos ícones
const icons = [
  { id: 1, icon: <FaHtml5 size={40} />, name: "HTML5" },
  { id: 2, icon: <FaCss3Alt size={40} />, name: "CSS3" },
  { id: 3, icon: <FaJs size={40} />, name: "JavaScript" },
  { id: 4, icon: <SiTypescript size={40} />, name: "TypeScript" },
  { id: 5, icon: <FaReact size={40} />, name: "React" },
  { id: 6, icon: <SiNextdotjs size={40} />, name: "Next.js" },
  { id: 7, icon: <SiTailwindcss size={40} />, name: "Tailwind CSS" },
  { id: 8, icon: <FaNodeJs size={40} />, name: "Node.js" },
  { id: 9, icon: <FaPython size={40} />, name: "Python" },
  { id: 10, icon: <FaDocker size={40} />, name: "Docker" },
  { id: 11, icon: <FaGitAlt size={40} />, name: "Git" },
];

const IconSlider = () => {
  // Componente auxiliar para renderizar um bloco de ícones
  const IconBlock = ({ iconList, ...props }: { iconList: typeof icons; [key: string]: any; }) => (
    <div className="flex-none flex items-center space-x-16 pr-16" {...props}>
      {iconList.map((item) => (
        <div key={item.id} className="flex-shrink-0">
          {item.icon}
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div className="flex motion-safe:animate-infinite-scroll text-green-300">
        <IconBlock iconList={icons} />
        <IconBlock iconList={icons} aria-hidden="true" />
      </div>
    </div>
  );
};

export default IconSlider;