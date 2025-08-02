// src/components/LoadingSpinner.tsx

export function LoadingSpinner() {
  return (
    // O container principal que cobre toda a tela e escurece o fundo
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      {/* Container da animação das barras.
        - 'gap-2' cria um espaço entre cada barra.
      */}
      <div className="flex items-center justify-center gap-2">
        {/* Cada div é uma barra da animação. */}
        <div className="h-12 w-2 animate-wave rounded-full bg-green-400"></div>
        <div
          className="h-12 w-2 animate-wave rounded-full bg-green-400"
          // A propriedade 'animationDelay' cria o efeito de onda, fazendo cada barra
          // começar sua animação um pouco depois da anterior.
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="h-12 w-2 animate-wave rounded-full bg-green-400"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="h-12 w-2 animate-wave rounded-full bg-green-400"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className="h-12 w-2 animate-wave rounded-full bg-green-400"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
}