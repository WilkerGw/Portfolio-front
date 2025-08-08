// src/data/projects.ts

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  projectUrl: string;
  repositoryUrl: string;
  cardImage: string;
  images: string[];
};

export const mockProjects: Project[] = [
  {
    slug: "erp-otica",
    title: "ERP Ótica",
    description:
      "ERP simples para gerenciamento de produtos, clientes, vendas, estoque e agendamentos.",
    tags: [
      "nextjs",
      "typescript",
      "tailwindcss",
      "mongodb",
      "seo",
      "canva",
      "vercel",
      "render",
    ],
    projectUrl: "https://github.com/WilkerGw/ERP-FRONT", // Atualize se houver um link de projeto ao vivo
    repositoryUrl: "https://github.com/WilkerGw/ERP-FRONT",
    cardImage: "https://res.cloudinary.com/djepel3xf/image/upload/v1754672498/ERP1_qoapez.webp",
    images: [
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754672498/ERP1_qoapez.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754672498/ERP2_epgw1t.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754672498/ERP3_xic70c.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754672498/ERP4_q7njzj.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754672498/ERP5_mwlmyv.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754673241/ERP12_bboufx.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754673241/ERP13_zfq1rt.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754672498/ERP6_ew2df6.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754672499/ERP9_f9qlom.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754672499/ERP10_sbzre1.webp",
    ],
  },
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
    repositoryUrl: "https://github.com/WilkerGw/Site-Vizz",
    cardImage: "https://res.cloudinary.com/djepel3xf/image/upload/v1754663895/VIZZ01_rjwuoc.webp",
    images: [
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754663895/VIZZ2_utgcet.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754663895/VIZZ3_ltz2ml.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754663895/VIZZ4_nbadlf.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754663895/VIZZ7_x3mq9c.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754663895/VIZZ6_zfmogo.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754663896/VIZZ8_xa3sxd.webp",
    ],
  },
  {
    slug: "site-imobiliaria",
    title: "Site Imobiliária",
    description: "Site para venda e aluguel de imóveis com filtro de preço e metros quadrados.",
    tags: ["nextjs", "javascript", "tailwindcss", "seo", "canva","vercel",],
    projectUrl: "https://imobiliaria-site-alpha.vercel.app/",
    repositoryUrl: "https://github.com/WilkerGw/Imobiliaria-site",
    cardImage: "https://res.cloudinary.com/djepel3xf/image/upload/v1754671000/IMO1_ejdb1m.webp",
    images: [
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754671000/IMO1_ejdb1m.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754671000/IMO2_vjkvr5.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754671000/IMO3_j7c80w.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754671001/IMO4_kv3uka.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754671001/IMO6_p688rq.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754671001/IMO7_h3cfnu.webp",
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
    projectUrl: "https://inaugura-o-bar.vercel.app/",
    repositoryUrl: "https://github.com/WilkerGw/Inaugura-o-Bar",
    cardImage: "https://res.cloudinary.com/djepel3xf/image/upload/v1754671560/BAR2_bwtojo.webp",
    images: [
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754671560/BAR2_bwtojo.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754671559/BAR1_hi1vrt.webp",
    ],
  },
  {
    slug: "loja-esporte",
    title: "Loja Esportiva",
    description:
      "Lading page com informações sobre a loja e exposição de alguns produtos.",
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
    projectUrl: "https://github.com/WilkerGw/loja-de-tenis",
    repositoryUrl: "https://github.com/WilkerGw/loja-de-tenis",
    cardImage: "https://res.cloudinary.com/djepel3xf/image/upload/v1754671811/ESP1_vmmvs8.webp",
    images: [
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754671811/ESP1_vmmvs8.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754671811/ESP2_tvizje.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754671811/ESP3_hgs0cf.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754671811/ESP4_elxapi.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754671811/ESP5_rq2ol5.webp",
        "https://res.cloudinary.com/djepel3xf/image/upload/v1754671811/ESP6_svf6ej.webp",
    ],
  },
];