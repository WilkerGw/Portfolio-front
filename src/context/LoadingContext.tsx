"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

// Definimos a estrutura do nosso contexto
type LoadingContextType = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

// Criamos o contexto com um valor padrão
const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// Criamos o nosso Provedor. Ele vai gerenciar o estado.
export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

// Criamos um hook customizado para facilitar o uso do contexto
export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}