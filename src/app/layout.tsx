import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wilker Martins | Desenvolvedor Web Full-Stack",
  description: "Criação de sites, lojas virtuais, e commerces, geração de vídeo com IA, sistemas web, e muito mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
