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
        "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/Captura%20de%20tela%202025-07-30%20175156-CmZJOHRXWyRhaSnFQIlVxZnJ9Lz5HI.png",
        "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/Captura%20de%20tela%202025-07-30%20175207-f01s7Bgb0wzpkTNUqmHuSZ76d0bp1x.png",
        "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/Captura%20de%20tela%202025-07-30%20175220-2wUsMymLfGPP6MtvanPcykXe8119ll.png",
        "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/Captura%20de%20tela%202025-07-30%20175241-DifvKlSZ1RcdpsVVlyhQ1HG1yzSJPA.png",
        "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/Captura%20de%20tela%202025-07-30%20175254-px5DzUSxiUrADLhx1YUCe9FZ4cvELB.png",
        "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/Captura%20de%20tela%202025-07-30%20175310-cEHh3taUx4LomIcZSC85QhcTI1g76k.png",
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
        "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/Captura%20de%20tela%202025-07-30%20181146-Q688h6xccNnMSmYrGBJyGU0fOGJ2ru.png",
        "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/Captura%20de%20tela%202025-07-30%20181206-WNKRf8Xz13oWLFy6kgKg9Q7WvLhBDP.png",
        "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/Captura%20de%20tela%202025-07-30%20181219-NyEevpG1uYdqFOf2aW0Tihlh0oA9ng.png",
        "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/Captura%20de%20tela%202025-07-30%20181242-WazlkLIv5j8XN7gvKabEnrLQS8RCVr.png",
        "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/Captura%20de%20tela%202025-07-30%20181255-tTvk2lqUOtN7LhhFs1vlOIciZ6O2rP.png",
        "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/Captura%20de%20tela%202025-07-30%20181315-T08IDb3HwFgwuba9Pt6ZdWiN5jx0cV.png",
        "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/Captura%20de%20tela%202025-07-30%20181326-mxSGAPnavZqVQlRc2QH9YKulAX4tjO.png",
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
        "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/Captura%20de%20tela%202025-07-30%20182222-aO4z4bcHH5RU537ZTnfuBQFWHkcK8b.png",
        "https://lmkyii2kcbi12kxo.public.blob.vercel-storage.com/Captura%20de%20tela%202025-07-30%20182235-5yZNIxrCH4X1PWav0vFPeuMreCUsLf.png",
    ],
  },
];