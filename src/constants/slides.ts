export interface Slide {
  image: string;
  title: string;
  desc: string;
  date?: string;
  link: string;
}

export const SLIDES: Slide[] = [
  {
    image: "/fotos/Sliders/CongresoAnticorrupcion/IIICA_Luciani.jpg",
    title: "III Congreso Nacional de Anticorrupción",
    desc: "El encuentro más importante del país sobre transparencia e integridad.",
    date: "22 de agosto de 2025",
    link: "/articulos/publicaciones/1"
  },
  {
    image: "/fotos/Sliders/Bertie-F-y-yo.png",
    title: "Encuentro con Bertie Benegas Lynch",
    desc: "Análisis profundo sobre los desafíos de la libertad y el panorama político 2025.",
    date: "24 de abril de 2025",
    link: "/articulos/publicaciones/2"
  },
  {
    image: "/fotos/Otros/DifusionCN001.jpg",
    title: "Principios y Valores Republicanos",
    desc: "Conferencia magistral en el Club del Orden por Alberto Cohan.",
    date: "6 de febrero de 2026",
    link: "/articulos/publicaciones/3"
  }
];
