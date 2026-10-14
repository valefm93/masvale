// Imágenes que venían del sitio anterior en Webflow, ahora copiadas en /public/images/webflow
// (el nombre del archivo es el mismo, ya codificado para URL: "Frame%202.jpg" → "Frame 2.jpg" en disco).
const LOCAL = '/images/webflow/';

export const cdn = (file: string) => LOCAL + file;
