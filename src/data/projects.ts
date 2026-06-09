export type GalleryDisplayMode = "desktop-landscape" | "tablet-portrait" | "square";

export type GalleryTarget = {
  slug: string;
  title: string;
  gallery: ProjectGalleryImage[];
  displayMode: GalleryDisplayMode;
};

export type Project = GalleryTarget & {
  headline: string;
  description: string;
  stack: string[];
  repoUrl: string;
  image: string;
  featured: boolean;
};

export type ProjectGalleryImage = {
  src: string;
  label: string;
  description: string;
};

const galleryFor = (slug: string, title: string): ProjectGalleryImage[] => [
  {
    src: `/projects/${slug}/cover.png`,
    label: `${title} - vista principal`,
    description: "Vista principal del producto."
  },
  {
    src: `/projects/${slug}/detail-01.png`,
    label: `${title} - flujo de uso`,
    description: "Detalle del flujo, navegación o pantalla principal."
  },
  {
    src: `/projects/${slug}/detail-02.png`,
    label: `${title} - detalle visual`,
    description: "Detalle de interfaz, estado secundario o composición visual."
  }
];

export type VisualIdentity = GalleryTarget & {
  headline: string;
  description: string;
  image: string;
  tags: string[];
  previewImages: string[];
};

export const ceriseIdentity: VisualIdentity = {
  slug: "cerise",
  title: "Cerise",
  headline: "Logo y aplicaciones para una marca de bazar de ropa.",
  description:
    "Diseño de identidad para Cerise, una marca de bazar de ropa. Exploré un logo flexible, aplicaciones de marca y composiciones pensadas para verse limpias en piezas digitales.",
  image: "/projects/cerise/cover.png",
  tags: ["Logo", "Identidad visual", "Aplicación de marca", "Galería"],
  previewImages: [
    "/projects/cerise/detail-01.png",
    "/projects/cerise/detail-02.png",
    "/projects/cerise/detail-03.png"
  ],
  displayMode: "square",
  gallery: [
    {
      src: "/projects/cerise/detail-01.png",
      label: "Isotipo — modo oscuro",
      description: "Símbolo de marca solo, sin texto. Versión sobre fondo oscuro."
    },
    {
      src: "/projects/cerise/detail-02.png",
      label: "Logotipo vertical — modo oscuro",
      description: "Isotipo con nombre debajo. Versión sobre fondo oscuro."
    },
    {
      src: "/projects/cerise/detail-03.png",
      label: "Logotipo horizontal — modo oscuro",
      description: "Isotipo con nombre a la derecha. Versión sobre fondo oscuro."
    },
    {
      src: "/projects/cerise/detail-04.png",
      label: "Tarjeta de presentación — modo oscuro",
      description: "Versión elaborada del logotipo vertical, pensada para tarjetas de presentación. Fondo oscuro."
    },
    {
      src: "/projects/cerise/detail-05.png",
      label: "Isotipo — modo claro",
      description: "Símbolo de marca solo, sin texto. Versión sobre fondo claro."
    },
    {
      src: "/projects/cerise/detail-06.png",
      label: "Logotipo vertical — modo claro",
      description: "Isotipo con nombre debajo. Versión sobre fondo claro."
    },
    {
      src: "/projects/cerise/detail-07.png",
      label: "Logotipo horizontal — modo claro",
      description: "Isotipo con nombre a la derecha. Versión sobre fondo claro."
    },
    {
      src: "/projects/cerise/detail-08.png",
      label: "Tarjeta de presentación — modo claro",
      description: "Versión elaborada del logotipo vertical, pensada para tarjetas de presentación. Fondo claro."
    }
  ]
};

export const projects: Project[] = [
  {
    slug: "osvium",
    title: "Osvium",
    headline: "Sistema embebido de control biométrico.",
    description:
      "Reconocimiento facial para Raspberry Pi 5 con procesamiento local, operación offline y control de acceso a áreas restringidas.",
    stack: ["Python", "FastAPI", "OpenCV", "Haar Cascade", "LBPH", "SQLite", "GPIO", "Panel admin"],
    repoUrl: "https://github.com/Mukinma/Osvium",
    image: "/projects/osvium/cover.png",
    gallery: galleryFor("osvium", "Osvium"),
    displayMode: "tablet-portrait",
    featured: true
  },
  {
    slug: "filacero",
    title: "FilaCero",
    headline: "POS moderno para cafeterías escolares.",
    description:
      "Plataforma creada por estudiantes para reducir congestión con ventas rápidas, pedidos, inventario y métricas de negocio.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "NestJS", "Prisma", "PostgreSQL", "Redis", "Docker"],
    repoUrl: "https://github.com/TerminaDes2/FilaCero",
    image: "/projects/filacero/cover.png",
    gallery: galleryFor("filacero", "FilaCero"),
    displayMode: "desktop-landscape",
    featured: true
  },
  {
    slug: "virus-attack",
    title: "Virus Attack",
    headline: "Arcade educativo con build ejecutable.",
    description:
      "Juego en Python y Pygame centrado en aprendizaje, progresión, retroalimentación visual y flujo jugable completo.",
    stack: ["Python", "Pygame", "Game loop", "Level design", "Sprites", "Localización", "Packaging"],
    repoUrl: "https://github.com/patomax31/Virus-Attack",
    image: "/projects/virus-attack/cover.png",
    gallery: galleryFor("virus-attack", "Virus Attack"),
    displayMode: "desktop-landscape",
    featured: false
  },
  {
    slug: "lira",
    title: "Lira Visual Prototype",
    headline: "Prototipo de plataforma de lectura digital.",
    description:
      "Dirección visual para una experiencia de manga, manhwa, novelas y contenido serializado con identidad premium.",
    stack: ["TypeScript", "Identidad de producto", "Layout systems", "Premium UI", "Prototipado"],
    repoUrl: "https://github.com/Mukinma/LiraVisualPrototype",
    image: "/projects/lira/cover.png",
    gallery: galleryFor("lira", "Lira Visual Prototype"),
    displayMode: "desktop-landscape",
    featured: false
  },
  {
    slug: "mydrugs",
    title: "MyDrugs UI Recreation",
    headline: "Recreación de interfaz de producto ficticio.",
    description:
      "Interfaz responsiva inspirada en un producto digital ficticio, reconstruida como ejercicio de frontend visual.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Sidebar fijo", "Catálogo interactivo", "Narrativa UI"],
    repoUrl: "https://github.com/Mukinma/MyDrugs",
    image: "/projects/mydrugs/cover.png",
    gallery: galleryFor("mydrugs", "MyDrugs UI Recreation"),
    displayMode: "desktop-landscape",
    featured: false
  },
  {
    slug: "paz-justicia",
    title: "Paz Justicia Blog",
    headline: "Blog dinámico con estructura administrativa.",
    description:
      "Proyecto web con contenido categorizado, controladores, vistas, scripts de base de datos y lógica del servidor.",
    stack: ["PHP", "HTML", "CSS", "JavaScript", "SQL", "MVC", "Gestión de contenido"],
    repoUrl: "https://github.com/Mukinma/Paz-Justicia-Blog",
    image: "/projects/paz-justicia/cover.png",
    gallery: galleryFor("paz-justicia", "Paz Justicia Blog"),
    displayMode: "desktop-landscape",
    featured: false
  }
];
