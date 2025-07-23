import { LoaderCircle } from "lucide-react";

export function LoadingSpinner() {
  return (
    // O container principal que cobre toda a tela
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {/* - fixed: Posição fixa em relação à janela do navegador.
        - inset-0: Cobre toda a tela (top: 0, right: 0, bottom: 0, left: 0).
        - z-50: Garante que ele fique acima de outros conteúdos.
        - flex items-center justify-center: Centraliza o conteúdo (a espiral).
        - bg-black/70: Fundo preto com 70% de opacidade (o filtro escuro).
        - backdrop-blur-sm: Aplica um leve desfoque ao conteúdo atrás dele.
      */}
      <LoaderCircle className="h-16 w-16 animate-spin text-green-500" />
      {/*
        - h-16 w-16: Define o tamanho do ícone.
        - animate-spin: Animação de rotação nativa do Tailwind CSS.
        - text-green-500: Define a cor da espiral para verde.
      */}
    </div>
  );
}