// Paso de post-build: renderiza cada página del sitio a HTML (sin
// navegador, con react-dom/server) y lo inserta dentro de su
// dist/**/index.html correspondiente.
//
// Por qué existe esto: Vite + React solo, sin este paso, genera HTML casi
// vacío (<div id="root"></div>) — todo el contenido aparece recién cuando
// el navegador ejecuta el JavaScript. Eso es un problema para Google,
// para la vista previa que arma WhatsApp/redes sociales al compartir el
// link, y sobre todo para los crawlers de IA (GPTBot, ClaudeBot, etc.),
// que en general NO ejecutan JavaScript.
//
// La salida sigue siendo 100% estática: esto corre una sola vez durante
// `npm run build`, no en un servidor. dist/ se puede deployar tal cual
// en Vercel/Netlify.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

// Una entrada por página. Al sumar una nueva vertical: agregar su
// index.html, sus entry-client/entry-server, su build --ssr en
// package.json, y una línea acá.
const PAGES = [
  {
    html: path.join(rootDir, 'dist', 'index.html'),
    ssrDir: path.join(rootDir, 'dist-server'),
    ssrEntry: path.join(rootDir, 'dist-server', 'entry-server.js'),
  },
  {
    html: path.join(rootDir, 'dist', 'clinicas', 'index.html'),
    ssrDir: path.join(rootDir, 'dist-server-clinicas'),
    ssrEntry: path.join(rootDir, 'dist-server-clinicas', 'entry-server-clinicas.js'),
  },
]

for (const page of PAGES) {
  const { render } = await import(pathToFileURL(page.ssrEntry).href)
  const appHtml = render()

  const template = await readFile(page.html, 'utf-8')
  if (!template.includes('<!--ssr-outlet-->')) {
    throw new Error(
      `No se encontró el marcador <!--ssr-outlet--> en ${page.html}. ` +
        '¿Se modificó ese index.html y se borró ese comentario?',
    )
  }
  const finalHtml = template.replace('<!--ssr-outlet-->', appHtml)
  await writeFile(page.html, finalHtml, 'utf-8')
  await rm(page.ssrDir, { recursive: true, force: true })

  console.log(`✔ Prerenderizado: ${path.relative(rootDir, page.html)}`)
}
