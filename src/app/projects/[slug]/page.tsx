// Versão de teste minimalista para isolar o erro.

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "#111",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div>
        <h1>Página de Teste do Projeto</h1>
        <p>O build funcionou para o slug: {params.slug}</p>
      </div>
    </div>
  );
}