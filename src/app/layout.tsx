// src/app/layout.tsx

"use client";
import "./globals.css";
// **CORREÇÃO:** Importando ambas as fontes com next/font
import { Inter, Gowun_Batang } from "next/font/google"; 

import { LoadingProvider, useLoading } from "@/context/LoadingContext";
import { LoadingSpinner } from "@/components/LoadingSpinner";

// Configuração da fonte Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Cria uma variável CSS para a fonte
});

// **CORREÇÃO:** Configuração da fonte Special Gothic via next/font.
// OBS: "Special Gothic" não está no Google Fonts, então usei um substituto como exemplo.
// Se você tiver o arquivo da fonte (.woff2, .ttf), podemos configurá-la localmente.
// Por enquanto, usei Gowun_Batang como placeholder.
const specialGothic = Gowun_Batang({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-special-gothic", // Cria uma variável CSS
});

function GlobalLoadingSpinner() {
  const { isLoading } = useLoading();
  return isLoading ? <LoadingSpinner /> : null;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // **CORREÇÃO:** Aplicando as variáveis das fontes na tag <html>
    <html lang="pt-br" className={`${inter.variable} ${specialGothic.variable}`}>
      <head>
        {/* As tags de <link> para fontes foram removidas, 
            pois o next/font já cuida disso de forma otimizada. */}
      </head>
      <body>
        <LoadingProvider>
          {children}
          <GlobalLoadingSpinner />
        </LoadingProvider>
      </body>
    </html>
  );
}