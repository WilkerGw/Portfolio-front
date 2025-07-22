
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import IconSlider from "./IconSlider";

export function HeroSection() {
  return (
    <section className="flex flex-col w-screen h-screen justify-center bg-gradient-to-b from-green-950 to-black">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 text-center">
        <div>
          <h1 className="text-4xl font-extrabold text-green-100 ">
            WILKER MARTINS | DESENVOLVEDOR WEB{" "}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl text-green-100/50">
            Desenvolvedor de Software especialista em criar experiências web
            modernas e de alta performance.
          </p>
        </div>

        {/* Links e CTAs */}
        <div className="flex items-center gap-4">
          <Link
            href="#projetos"
            className="group inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-green-100/20 shadow shadow-green-100/20 transition-colors hover:bg-primary/90"
          >
            Meus Projetos
          </Link>
          <a
            href="#" // Coloque o link do seu GitHub aqui
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md shadow shadow-green-100/20 bg-background/50 text-white-100/20"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 text-green-100/20" />
          </a>
          <a
            href="#" // Coloque o link do seu LinkedIn aqui
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md shadow shadow-green-100/20 bg-background/50 text-white-100/20"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-green-100/20" />
          </a>
        </div>
      </div>
      <div className="w-full max-w-4xl my-12">
      </div>
      <IconSlider/>
    </section>
  );
}
