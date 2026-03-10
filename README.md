# Asociación Civil Río Paraná - Web (Esqueleto)

[![Deploy a GitHub Pages](https://github.com/KarimServin/AsociacionRioParana/actions/workflows/pages/pages-build-deployment/badge.svg)](https://KarimServin.github.io/AsociacionRioParana/)

Este es el repositorio del sitio web institucional de la **Asociación Civil Río Paraná**. 

> **Aviso Importante:** Actualmente, este proyecto es un **esqueleto base**. El diseño, contenido final, imágenes corporativas y funcionalidades específicas serán personalizadas e implementadas en futuras etapas de desarrollo.

## Tecnologías Utilizadas
El proyecto está construido con herramientas modernas enfocadas en el rendimiento y la facilidad de desarrollo:
- **[React 19](https://react.dev/)**: Librería para construir interfaces de usuario.
- **[Vite](https://vitejs.dev/)**: Herramienta de construcción (bundler) ultrarrápida.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework de CSS para estilos rápidos y responsivos.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipado estático para mayor seguridad en el código.
- **[Lucide React](https://lucide.dev/)**: Colección de iconos modernos y consistentes.
- **[Motion](https://motion.dev/) (Framer Motion)**: Librería para animaciones fluidas.

## Estructura Actual (Preview)
El esqueleto actual contempla las siguientes secciones principales para la organización:
1. **Hero**: Inicio con slider de imágenes introductorias.
2. **Institucional (Misión)**: Acerca de los objetivos del think tank.
3. **Presidencia**: Palabras y perfil del Presidente de la asociación.
4. **Espacios de Encuentro**: Reuniones y dinámicas de la asociación.
5. **Líneas de Investigación**: Proyectos clave.
6. **Escuela de Gobierno**: Formación y capacitación.
7. **Nuestra Gente**: Estructura del equipo.
8. **Últimas Noticias**: Novedades y foros.
9. **Contacto**: Formulario, ubicación y redes sociales.

## Desarrollo Local

Si deseas correr este proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/KarimServin/AsociacionRioParana.git
   ```
2. Entra al directorio:
   ```bash
   cd AsociacionRioParana
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre en tu navegador la URL que se muestra (usualmente `http://localhost:3000`).

## Despliegue en GitHub Pages

El proyecto está configurado para desplegarse fácilmente en GitHub Pages.

Para subir una nueva versión a la web pública, simplemente ejecuta:
```bash
npm run deploy
```
Este comando compilará el sitio para producción y empujará automáticamente la carpeta `dist` a la rama `gh-pages`.

## Licencia
Asociación Civil Río Paraná - Todos los derechos reservados.
