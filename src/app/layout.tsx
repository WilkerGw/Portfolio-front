"use client";
import "./globals.css";
import { Inter } from "next/font/google"; 

import { LoadingProvider, useLoading } from "@/context/LoadingContext";
import { LoadingSpinner } from "@/components/LoadingSpinner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html
      lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css2?family=Special+Gothic+Expanded+One&display=swap" rel="stylesheet"/>
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
