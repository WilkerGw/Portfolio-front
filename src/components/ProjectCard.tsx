import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  projectUrl: string;
  ProjectVideo: string;
};

export function ProjectCard({
  title,
  description,
  tags,
  projectUrl,
  ProjectVideo,
}: ProjectCardProps) {
  return (
    <Link
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border border-white/30 bg-white/40 shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-primary/20"
    >
      <div className="w-auto h-auto bg-transparent" />
      <video src={ProjectVideo} autoPlay loop muted className="w-full h-ful"></video>
      <div className="flex flex-1 flex-col p-4 md:p-6">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/50 px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto border-t border-white/30 p-4 text-sm font-medium text-primary group-hover:underline md:p-6">
        <div className="inline-flex items-center">
          Ver projeto
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
