export interface NavChild {
  name: string;
  href?: string;
  isRoute?: boolean;
  isExternal?: boolean;
}

export interface NavItem {
  name: string;
  href?: string;
  isRoute?: boolean;
  children?: NavChild[];
}

export const navItems: NavItem[] = [
  {
    name: 'Artículos',
    children: [
      { name: 'Publicaciones', href: '/articulos/publicaciones', isRoute: true },
      { name: 'Blog (Archivo)', href: 'https://asociacionrioparana.blogspot.com/', isExternal: true },
    ]
  },
  { name: 'Informes', href: '/articulos/informes', isRoute: true },
  {
    name: 'Áreas y Proyectos',
    children: [
      { name: 'Ver todas las iniciativas', href: '/iniciativas', isRoute: true },
    ]
  },
  {
    name: 'Formación y Capacitación',
    children: [
      { name: 'Valores humanos y ciudadanía', href: '#valores' },
      { name: 'Capacitación en gerontología', href: '#gerontologia' },
    ]
  },
  {
    name: 'La Asociación',
    children: [
      { name: 'Nosotros', href: '/nosotros', isRoute: true },
      { name: 'Nos acompañan', href: '/nos-acompanan', isRoute: true },
      { name: 'Grupo Joven', href: '/grupo-joven', isRoute: true },
    ]
  },
];
