// src/data/projects.ts

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  projectUrl: string;
  ProjectVideo: string;
  repositoryUrl: string;
  // NOVO CAMPO: Adicione um array para as imagens do modal
  images: string[];
};

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
    // IMAGENS PARA O MODAL (substitua pelas suas)
    images: [
        "https://via.placeholder.com/1280x720.png/111/fff?text=Imagem+1",
        "https://via.placeholder.com/1280x720.png/222/fff?text=Imagem+2",
        "https://via.placeholder.com/1280x720.png/333/fff?text=Imagem+3",
        "https://via.placeholder.com/1280x720.png/444/fff?text=Imagem+4",
        "https://via.placeholder.com/1280x720.png/555/fff?text=Imagem+5",
    ],
  },
  {
    slug: "site-imobiliaria",
    title: "Site Imobiliária",
    description: "Site para venda e aluguel de imóveis com filtro de preço e metros quadrados.",
    tags: ["nextjs", "javascript", "tailwindcss", "seo", "canva","vercel",],
    projectUrl: "https://github.com/WilkerGw/Imobiliaria-site",
    ProjectVideo: "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/imobiliaria-video-huBKDcqtDMt6AWoTbut7yF8nLScwFh.mp4",
    repositoryUrl: "https://github.com/WilkerGw/Imobiliaria-site",
    // IMAGENS PARA O MODAL (substitua pelas suas)
    images: [
        "https://via.placeholder.com/1280x720.png/111/fff?text=Imagem+1",
        "https://via.placeholder.com/1280x720.png/222/fff?text=Imagem+2",
        "https://via.placeholder.com/1280x720.png/333/fff?text=Imagem+3",
    ],
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
    // IMAGENS PARA O MODAL (substitua pelas suas)
    images: [
        "https://via.placeholder.com/1280x720.png/111/fff?text=Imagem+1",
        "https://via.placeholder.com/1280x720.png/222/fff?text=Imagem+2",
    ],
  },
];