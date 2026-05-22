export type Sector =
  | "peluqueria"
  | "restaurante"
  | "cafeteria"
  | "fisioterapia"
  | "estetica"
  | "bar";

export interface Plantilla {
  slug: Sector;
  label: string;
  overlay: string; // rgba color for overlay
  accent: string; // oklch for demo theme
  heroImage: string;
  galleryImages: string[];
  tagline: string;
  services: { name: string; price: string; desc: string }[];
}

const u = (q: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=${w}&h=${h}&q=70`;

export const PLANTILLAS: Plantilla[] = [
  {
    slug: "peluqueria",
    label: "Peluquería",
    overlay: "rgba(115, 25, 35, 0.65)",
    accent: "#731923",
    heroImage: u("photo-1521590832167-7bcbfaa6381f"),
    galleryImages: [
      u("photo-1562322140-8baeececf3df", 600, 600),
      u("photo-1503951914875-452162b0f3f1", 600, 600),
      u("photo-1580618672591-eb180b1a973f", 600, 600),
      u("photo-1633681926022-84c23e8cb2d6", 600, 600),
    ],
    tagline: "Cortes, color y cuidado del cabello.",
    services: [
      { name: "Corte señora", price: "25 €", desc: "Lavado, corte y peinado." },
      { name: "Corte caballero", price: "15 €", desc: "Tijera o máquina." },
      { name: "Color completo", price: "45 €", desc: "Color uniforme y brillo." },
      { name: "Mechas", price: "60 €", desc: "Técnica babylights o balayage." },
    ],
  },
  {
    slug: "restaurante",
    label: "Restaurante",
    overlay: "rgba(40, 65, 35, 0.65)",
    accent: "#284123",
    heroImage: u("photo-1414235077428-338989a2e8c0"),
    galleryImages: [
      u("photo-1555396273-367ea4eb4db5", 600, 600),
      u("photo-1559339352-11d035aa65de", 600, 600),
      u("photo-1565299624946-b28f40a0ae38", 600, 600),
      u("photo-1551183053-bf91a1d81141", 600, 600),
    ],
    tagline: "Cocina de mercado, producto de la huerta.",
    services: [
      { name: "Menú del día", price: "16 €", desc: "Primero, segundo, postre y bebida." },
      { name: "Menú degustación", price: "38 €", desc: "Cinco pases del chef." },
      { name: "Cena a la carta", price: "—", desc: "Pasa y elige según temporada." },
      { name: "Eventos privados", price: "Consultar", desc: "Hasta 30 comensales." },
    ],
  },
  {
    slug: "cafeteria",
    label: "Cafetería",
    overlay: "rgba(95, 50, 35, 0.65)",
    accent: "#5f3223",
    heroImage: u("photo-1554118811-1e0d58224f24"),
    galleryImages: [
      u("photo-1495474472287-4d71bcdd2085", 600, 600),
      u("photo-1509042239860-f550ce710b93", 600, 600),
      u("photo-1442512595331-e89e73853f31", 600, 600),
      u("photo-1521017432531-fbd92d768814", 600, 600),
    ],
    tagline: "Café de especialidad y bollería artesana.",
    services: [
      { name: "Café del día", price: "1,80 €", desc: "Origen único, tueste propio." },
      { name: "Brunch", price: "14 €", desc: "Tostadas, huevo y zumo." },
      { name: "Repostería casera", price: "3,50 €", desc: "Tartas y bollería." },
      { name: "Café para llevar", price: "1,50 €", desc: "Vaso reutilizable, -10%." },
    ],
  },
  {
    slug: "fisioterapia",
    label: "Fisioterapia",
    overlay: "rgba(35, 70, 85, 0.65)",
    accent: "#234655",
    heroImage: u("photo-1576091160550-2173dba999ef"),
    galleryImages: [
      u("photo-1666214280557-f1b5022eb634", 600, 600),
      u("photo-1571019613454-1cb2f99b2d8b", 600, 600),
      u("photo-1599447421416-3414500d18a5", 600, 600),
      u("photo-1544367567-0f2fcb009e0b", 600, 600),
    ],
    tagline: "Recuperación física, rehabilitación y bienestar.",
    services: [
      { name: "Sesión individual", price: "40 €", desc: "45 min de tratamiento." },
      { name: "Bono 5 sesiones", price: "180 €", desc: "Ahorra 20 €." },
      { name: "Punción seca", price: "45 €", desc: "Tratamiento miofascial." },
      { name: "Rehabilitación deportiva", price: "50 €", desc: "Plan personalizado." },
    ],
  },
  {
    slug: "estetica",
    label: "Clínica estética",
    overlay: "rgba(95, 50, 90, 0.65)",
    accent: "#5f325a",
    heroImage: u("photo-1570172619644-dfd03ed5d881"),
    galleryImages: [
      u("photo-1487412947147-5cebf100ffc2", 600, 600),
      u("photo-1616394584738-fc6e612e71b9", 600, 600),
      u("photo-1522337360788-8b13dee7a37e", 600, 600),
      u("photo-1560750588-73207b1ef5b8", 600, 600),
    ],
    tagline: "Tratamientos faciales y corporales.",
    services: [
      { name: "Limpieza facial", price: "55 €", desc: "Higiene profunda + hidratación." },
      { name: "Manicura", price: "20 €", desc: "Esmaltado tradicional o semi." },
      { name: "Tratamiento corporal", price: "65 €", desc: "Reductor o reafirmante." },
      { name: "Depilación láser", price: "Desde 30 €", desc: "Diodo última generación." },
    ],
  },
  {
    slug: "bar",
    label: "Bar",
    overlay: "rgba(115, 60, 40, 0.65)",
    accent: "#733c28",
    heroImage: u("photo-1514933651103-005eec06c04b"),
    galleryImages: [
      u("photo-1572116469696-31de0f17cc34", 600, 600),
      u("photo-1582106245687-cbb466a9f07f", 600, 600),
      u("photo-1567521464027-f127ff144326", 600, 600),
      u("photo-1546638008-cd2b00075d40", 600, 600),
    ],
    tagline: "Pinchos, vinos y ambiente de barrio.",
    services: [
      { name: "Pincho del día", price: "2,50 €", desc: "Elaboración diaria." },
      { name: "Caña + pincho", price: "3,50 €", desc: "Oferta de mediodía." },
      { name: "Ración para compartir", price: "12 €", desc: "Tortilla, croquetas, jamón." },
      { name: "Vermú casero", price: "3 €", desc: "Maceración propia." },
    ],
  },
];

export const getPlantilla = (slug: string): Plantilla | undefined =>
  PLANTILLAS.find((p) => p.slug === slug);
