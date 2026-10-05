// Por ahora las imágenes se cargan directo desde Webflow.
// Más adelante conviene copiarlas a /public/images y cambiar esta función.
const WEBFLOW_CDN = 'https://cdn.prod.website-files.com/67537ecd343a94a9da071f73/';

export const cdn = (file: string) => WEBFLOW_CDN + file;
