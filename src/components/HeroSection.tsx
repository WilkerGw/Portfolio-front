import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import IconCarousel from "./IconCarousel";

export function HeroSection() {
  return (
    <section className="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden bg-green-950 pb-18 pt-10 md:py-4">
      {/* BG para mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat block md:hidden"
        style={{
          // Gradiente adicionado aqui
          backgroundImage:
            "linear-gradient(to bottom, rgba(5, 46, 22, 0.75), black), " +
            "url('/images/bg-mobile.png')",
        }}
      ></div>

      {/* BG para tablet */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block lg:hidden"
        style={{
          // Gradiente adicionado aqui
          backgroundImage:
            "linear-gradient(to bottom, rgba(5, 46, 22, 0.75), black), " +
            "url('/images/bg-tablet.png')",
        }}
      ></div>

      {/* BG para desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(5, 46, 22, 0.75), black), " +
            "url('/images/bg-desktop.png')",
        }}
      ></div>

      {/* Conteúdo acima do background */}
      <div className="relative z-10 flex flex-col justify-between items-start py-1 h-full w-full lg:my-5 lg:ml-25">
        <div className=" flex max-w-3xl flex-col items-center lg:items-start gap-2 text-center">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-500 animate-infinite-scroll md:text-6xl lg:text-start">
              WILKER MARTINS DESENVOLVEDOR WEB{" "}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-2xl text-gray-500/50 lg:text-start">
              Desenvolvimento de Websites e Aplicações Web.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <Link
              href="#projetos"
              className="group inline-flex h-11 items-center justify-center bg-primary rounded-md px-6 text-sm font-semibold text-gray-500 shadow shadow-green-100/20 transition-colors hover:bg-primary/90"
            >
              Projetos
            </Link>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md shadow shadow-green-100/20 bg-background/50 text-white-100/20"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-gray-500" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md shadow shadow-green-100/20 bg-background/50 text-green-100"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-gray-500" />
            </a>
          </div>
        </div>
      </div>
      <IconCarousel />
    </section>
  );
}
