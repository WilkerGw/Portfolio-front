// Remova todas as importações de 'react-icons' e 'react' deste arquivo.
// Elas não são mais necessárias aqui.

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  projectUrl: string;
  ProjectVideo: string;
  repositoryUrl: string;
};

// A lista de projetos continua igual, mas o arquivo fica mais limpo.
export const mockProjects: Project[] = [
  {
    slug: "site-institucional-oticas-vizz",
    title: "Site Ótica.",
    description:
      "Site com call to actions, galeria de produtos e sistema de agendamento de exame.",
    tags: [
      "nextjs",
      "typescript",
      "tailwindcss",
      "mongodb",
      "seo",
      "canva",
      "gimp",
      "vercel",
      "render",
    ],
    projectUrl: "https://oticasvizz.com.br",
    ProjectVideo: "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/vizz-video.mp4",
    repositoryUrl: "https://github.com/WilkerGw/Site-Vizz",
  },
  {
    slug: "site-imobiliaria",
    title: "Site Imobiliária",
    description: "Site para venda e aluguel de imóveis com filtro de preço e metros quadrados.",
    tags: ["nextjs", "javascript", "tailwindcss", "seo", "canva","vercel",],
    projectUrl: "https://github.com/WilkerGw/Imobiliaria-site",
    ProjectVideo: "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/imobiliaria-video-huBKDcqtDMt6AWoTbut7yF8nLScwFh.mp4",
    repositoryUrl: "https://github.com/WilkerGw/Imobiliaria-site",
  },
  {
    slug: "landing-page-bar",
    title: "Landing Page Bar",
    description:
      "Lading page com contagem regressiva para o dia da inauguração e reserva de espaço com mesas e cadeiras.",
    tags: [
      "nextjs",
      "javascript",
      "tailwindcss",
      "mongodb",
      "seo",
      "canva",
      "gimp",
      "vercel",
      "render",
    ],
    projectUrl: "https://github.com/WilkerGw/Inaugura-o-Bar",
    ProjectVideo: "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/bar-video.mp4",
    repositoryUrl: "https://github.com/WilkerGw/Inaugura-o-Bar",
  },
];
