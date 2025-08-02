// src/components/ClientLayout.tsx

"use client";

// 1. Importamos os hooks 'useEffect' do React e 'usePathname' do Next.js
import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

import { LoadingProvider, useLoading } from "@/context/LoadingContext";
import { LoadingSpinner } from "@/components/LoadingSpinner";

/**
 * Este é um componente "interno" que tem acesso ao contexto de Loading.
 * A sua responsabilidade é gerenciar o estado de carregamento durante a navegação.
 */
function LoadingStateHandler({ children }: { children: ReactNode }) {
  // 2. Pegamos o estado atual da URL (pathname).
  const pathname = usePathname();
  // 3. Pegamos a função para alterar o estado de loading e o estado atual.
  const { isLoading, setIsLoading } = useLoading();

  // 4. Criamos um 'useEffect' que será executado toda vez que o 'pathname' mudar.
  useEffect(() => {
    // Quando o pathname muda, isso sinaliza que a navegação para a nova página foi concluída.
    // Então, nós definimos o estado de carregamento de volta para 'false'.
    setIsLoading(false);
  }, [pathname, setIsLoading]); // O efeito depende do pathname para ser acionado.

  return (
    <>
      {/* Renderiza o spinner apenas se isLoading for true */}
      {isLoading && <LoadingSpinner />}
      {children}
    </>
  );
}

/**
 * Este é o componente principal que exportamos.
 * Ele envolve a aplicação com o Provedor de Contexto e o nosso gerenciador de estado.
 */
export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LoadingProvider>
      <LoadingStateHandler>{children}</LoadingStateHandler>
    </LoadingProvider>
  );
}