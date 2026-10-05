# masvale — portfolio de Vale Ferreira

Sitio personal hecho con [Astro](https://astro.build). Reemplaza al sitio anterior en Webflow.

## Dónde está cada cosa

| Quiero cambiar… | Archivo |
| --- | --- |
| Textos generales, skills, software, links | `src/data/site.ts` |
| Experiencia y educación | `src/data/experience.ts` |
| Proyectos / case studies | `src/data/projects.ts` |
| Tipografías, colores, espaciados | `src/styles/tokens.css` |
| Diseño de una página | `src/pages/` |
| Piezas reutilizables (tarjetas, header, footer) | `src/components/` |

## Correr el sitio en tu computadora

Necesitas [Node.js](https://nodejs.org) instalado. En la terminal, dentro de esta carpeta:

```sh
npm install     # solo la primera vez
npm run dev     # abre el sitio en http://localhost:4321
```

## Publicar

El repo está pensado para conectarse a Vercel o Netlify: cada push a `main` publica el sitio,
y cada rama genera una URL de preview.

## Pendiente

- Copiar las imágenes desde Webflow a `public/images/` (hoy se cargan desde el CDN de Webflow, ver `src/data/assets.ts`).
- Definir la dirección visual final (tipografía, color, layout).
