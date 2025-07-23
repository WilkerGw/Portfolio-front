"use client";

import { Inter } from "next/font/google";
import "./globals.css";

import { LoadingProvider, useLoading } from "@/context/LoadingContext";
import { LoadingSpinner } from "@/components/LoadingSpinner";

// ESTA LINHA PRECISA ESTAR ATIVA
const inter = Inter({ subsets: ["latin"] });

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
    <html lang="pt-br">
      <body className={inter.className}>
        <LoadingProvider>
          {children}
          <GlobalLoadingSpinner />
        </LoadingProvider>
      </body>
    </html>
  );
}