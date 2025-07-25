import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import IconCarousel from "./IconCarousel";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

export function HeroSection() {
  return (
    <section className="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden bg-green-950 pb-18 pt-10 md:py-4">
      {/* BG para mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat block md:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(5, 46, 22, 0.75), black), " +
            // Caminho atualizado para a URL do Vercel Blob
            "url('https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/bg-mobile.png')",
        }}
      ></div>

      {/* BG para tablet */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block lg:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(5, 46, 22, 0.75), black), " +
            // Caminho atualizado para a URL do Vercel Blob
            "url('https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/bg-tablet.png')",
        }}
      ></div>

      {/* BG para desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(5, 46, 22, 0.75), black), " +
            // Caminho atualizado para a URL do Vercel Blob
            "url('https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/bg-desktop.png')",
        }}
      ></div>

      {/* Conteúdo acima do background */}
      <div className="relative z-10 flex flex-col justify-between items-start py-1 h-full w-full my-20 lg:my-5 lg:ml-25">
        <div className="flex max-w-3xl flex-col items-center lg:items-start gap-2 text-center">
          <div>
            <h1 className="text-3xl lg:text-5xl text-gray-300 animate-infinite-scroll md:text-6xl lg:text-start font-special-gothic">
              WILKER MARTINS DESENVOLVEDOR WEB{" "}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-2xl text-gray-500/50 lg:text-start">
              Desenvolvimento de Websites e Aplicações Web.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-16">
            <div className="flex flex-col gap-4">
              <Link
                href="#projetos"
                className="group inline-flex h-11 items-center justify-center bg-primary rounded-md px-6 text-sm font-semibold text-gray-500 shadow shadow-green-100/20 transition-colors hover:bg-primary/90"
              >
                Projetos
                <GrProjects size={15} className="m-2" />
              </Link>
              
              <a
                href="/WilkerMartins_Curriculo.pdf"
                download="WilkerMartins_Curriculo.pdf"
                className="group inline-flex h-11 items-center justify-center bg-primary rounded-md px-6 text-sm font-semibold text-gray-500 shadow shadow-green-100/20 transition-colors hover:bg-primary/90"
              >
                Currículo
                <FaCloudDownloadAlt size={20} className="m-2" />
              </a>
            </div>
            <div className="flex flex-col items-center gap-4">
              <a
                href="https://github.com/WilkerGw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md shadow shadow-green-100/20 bg-background/50 text-white-100/20"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-gray-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/wilker-martins-22238a370/"
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
      </div>
      <IconCarousel />
    </section>
  );
}