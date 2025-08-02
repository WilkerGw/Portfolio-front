// src/app/layout.tsx

// A diretiva "use client" foi REMOVIDA daqui.

import "./globals.css";
import type { Metadata } from "next";
import { Inter, Gowun_Batang } from "next/font/google";
// 1. Importamos nosso novo componente de cliente
import { ClientLayout } from "@/components/ClientLayout";

// Agora o metadata pode ser exportado sem problemas, pois este é um Componente de Servidor.
export const metadata: Metadata = {
  title: "Wilker Martins | Desenvolvedor Web",
  description:
    "Portfólio de Wilker Martins, desenvolvedor web especializado em Next.js, TypeScript e React. Veja meus projetos de websites, aplicações e mais.",
  authors: [{ name: "Wilker Martins", url: "https://www.linkedin.com/in/wilker-martins-22238a370/" }],
  keywords: [
    "Desenvolvedor Web",
    "Next.js",
    "TypeScript",
    "React.js",
    "Tailwind CSS",
    "Portfolio",
    "Desenvolvimento de Sites",
    "Programador",
    "Freela",
    "São Paulo",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://portfolio-front-tau-flax.vercel.app/",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const specialGothic = Gowun_Batang({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-special-gothic",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${specialGothic.variable} overflow-x-hidden`}>
      <head />
      <body>
        {/* 2. Usamos o ClientLayout para encapsular a lógica de cliente */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}