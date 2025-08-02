// src/app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { Inter, Gowun_Batang } from "next/font/google";
import { ClientLayout } from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Wilker Martins | Desenvolvedor Web",
  description:
    "Portfólio de Wilker Martins, desenvolvedor web especializado em Next.js, TypeScript e React. Veja os meus projetos de websites, aplicações e mais.",
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
    <html lang="pt-br" className={`${inter.variable} ${specialGothic.variable}`}>
      <head>
        {/* --- CORREÇÃO ADICIONADA AQUI --- */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}