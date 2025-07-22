export function ContactSection() {
  return (
    <section id="contato" className="bg-background">
      <div className="container flex flex-col items-center gap-6 py-20 text-center md:py-28">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Vamos Conversar</h2>
        <p className="max-w-xl text-muted-foreground">
          Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente ou apenas quer dizer olá, meu inbox está sempre aberto.
        </p>
        <a
          href="mailto:seu-email@exemplo.com"
          className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent px-10 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          Enviar E-mail
        </a>
      </div>
    </section>
  );
}