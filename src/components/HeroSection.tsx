'use client';

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import IconCarousel from "./IconCarousel";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const buttonContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const buttonItemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

export function HeroSection() {
  return (
    // 1. CORREÇÃO: Trocamos 'justify-center' por 'justify-start' para alinhar o conteúdo ao topo
    //    e removemos 'lg:justify-start' por ser agora o padrão.
    <section className="relative w-screen h-screen flex flex-col justify-start items-center lg:items-start overflow-hidden bg-green-950">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/bg-mobile-VsdcgLFCNwqNmehsYjGkfzQzEM3E5W.WebP"
          alt="Background de dispositivos móveis"
          fill
          priority 
          sizes="(max-width: 767px) 100vw, 0vw"
          className="object-cover md:hidden"
          quality={75}
        />
        <Image
          src="https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/bg-tablet-QgRYdbWfqpTZShtSl7xVO4cdMeNyb7.WebP"
          alt="Background de tablet"
          fill
          priority
          sizes="(min-width: 768px) and (max-width: 1023px) 100vw, 0vw"
          className="object-cover hidden md:block lg:hidden"
          quality={75}
        />
        <Image
          src="https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/bg-desktop-kD1k2Pt2kVdrR6KVHWpyOciEBseF9S.WebP"
          alt="Background de desktop"
          fill
          priority
          sizes="(min-width: 1024px) 100vw, 0vw"
          className="object-cover hidden lg:block"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/75 to-black"></div>
      </div>

      {/* 2. CORREÇÃO: Adicionamos um padding-top (pt-28) para afastar o conteúdo do topo em ecrãs pequenos e médios */}
      <div className="z-10 flex flex-col w-full px-4 pt-28 lg:pt-10 lg:px-7">
        <div className="flex w-full px-4 max-w-3xl flex-col items-center justify-start text-center lg:items-start lg:text-start gap-2">
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl text-gray-300 font-special-gothic">
              WILKER MARTINS DESENVOLVEDOR WEB
            </h1>
            <p className="mt-4 text-base md:text-lg lg:text-xl text-muted-foreground text-gray-500/50">
              Desenvolvimento de Websites e Aplicações Web.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-4 mt-8 lg:mt-16 lg:justify-start"
            variants={buttonContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={buttonItemVariants}>
              <Link
                href="#projetos"
                className="aurora-button group inline-flex h-11 items-center justify-center rounded-md px-6 text-sm font-semibold text-gray-100 shadow-lg shadow-green-900/50"
              >
                Projetos
                <GrProjects size={15} className="m-2" />
              </Link>
            </motion.div>
            
            <motion.div variants={buttonItemVariants}>
              <a
                href="/WilkerMartins_Curriculo.pdf"
                download="WilkerMartins_Curriculo.pdf"
                className="aurora-button group inline-flex h-11 items-center justify-center rounded-md px-6 text-sm font-semibold text-gray-100 shadow-lg shadow-green-900/50"
              >
                Currículo
                <FaCloudDownloadAlt size={20} className="m-2" />
              </a>
            </motion.div>
            
            <motion.div variants={buttonItemVariants}>
              <a
                href="https://github.com/WilkerGw"
                target="_blank"
                rel="noopener noreferrer"
                className="aurora-button inline-flex h-11 w-11 items-center justify-center rounded-md shadow-lg shadow-green-900/50"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-gray-200" />
              </a>
            </motion.div>
            
            <motion.div variants={buttonItemVariants}>
              <a
                href="https://www.linkedin.com/in/wilker-martins-22238a370/"
                target="_blank"
                rel="noopener noreferrer"
                className="aurora-button inline-flex h-11 w-11 items-center justify-center rounded-md shadow-lg shadow-green-900/50"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-200" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-0 w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
      >
        <IconCarousel />
      </motion.div>
    </section>
  );
}