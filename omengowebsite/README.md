# Omengo — landing pages

Sitio de Omengo (asistente de WhatsApp con IA, a medida por tipo de
negocio). Estático, hecho con [Astro](https://astro.build), sin backend ni
base de datos. Multi página: cada rubro tiene su propia landing con su
propia URL.

- **Restaurantes** → `/`
- **Clínicas y centros de salud** → `/clinicas/`

## Cómo correrlo

```bash
npm install
npm run dev       # servidor de desarrollo con recarga en caliente
npm run build     # genera dist/ listo para deployar
npm run preview   # sirve dist/ localmente, para probar el build final
npm run lint      # oxlint
```

En `npm run dev`, la de restaurantes está en `http://localhost:4321/` y la
de clínicas en `http://localhost:4321/clinicas/`.

## Estructura

```
astro.config.mjs               ← dominio del sitio y navegadores soportados
src/
  pages/index.astro            ← landing de restaurantes ("/")
  pages/clinicas/index.astro   ← landing de clínicas ("/clinicas/")
  config/site.js               ← dominio, número de WhatsApp, nombre de marca, GA4. Un solo lugar.
  content/restaurantes.js      ← TODO el contenido de la landing de restaurantes: <head> (título,
                                  descripción, schema), copys, dolores, pasos, beneficios,
                                  comparativa, FAQ, demo de chat.
  content/clinicas.js          ← lo mismo, para clínicas. Pensado desde cero para ese rubro,
                                  no un buscar-y-reemplazar del de restaurantes.
  layouts/Layout.astro         ← <head> compartido (meta tags, Open Graph, schema.org, fuentes, GA4)
  components/LandingPage.astro ← arma una landing completa a partir de un content
  components/                  ← un componente .astro + su .css por archivo. Reciben el contenido
                                  por props (content={...}) — no tienen texto de un rubro
                                  específico escrito adentro, por eso los usan las dos landings.
  styles/                      ← variables, reset y estilos globales
public/
  robots.txt, sitemap.xml, llms.txt, favicon.png, logo-omengo.png, whatsapp-icon.png
```

## Cómo agregar una tercera vertical el día de mañana

1. `src/content/<rubro>.js` — copiar la forma de `clinicas.js` y escribir
   el contenido de cero para ese rubro (no traducir/reemplazar palabras
   del de restaurantes: los dolores, beneficios y FAQ tienen que ser
   reales para ese negocio). Incluye el bloque `seo` con título,
   descripción, `path` (`/<rubro>/`) y el texto del schema `Service`.
2. `src/pages/<rubro>/index.astro` — copiar `pages/clinicas/index.astro` y
   cambiar el import del content.
3. `src/components/Header.astro` y `Footer.astro` — agregar la entrada
   correspondiente a `VERTICALS`.
4. `public/sitemap.xml` y `public/llms.txt` — agregar la URL nueva.

Si llega el momento, pedime
directamente "agregá la vertical de [rubro]" y lo hago yo.

## Logo e ícono de WhatsApp: de dónde salen

`public/logo-omengo.png` y `public/whatsapp-icon.png` son los archivos
reales (no dibujos hechos a mano) — les saqué el fondo por código a
partir de las imágenes que pasaron, porque ninguna de las dos vino con
transparencia:

- El logo de Omengo era un PNG con fondo blanco "horneado" en la imagen
  (sin canal alfa real). Se le quitó el fondo por color y se recortó al
  anillo, en dos pasos (una pasada intermedia dejaba un halo/borde
  visible contra fondos oscuros — el resultado final ya no lo tiene,
  probado contra el fondo claro del header y el violeta oscuro del
  footer).
- El ícono de WhatsApp venía como un cuadrado verde con "transparencia"
  simulada con un patrón a cuadros (no transparencia real tampoco). Se
  separó el cuadrado verde del cuadriculado de fondo, y adentro del
  cuadrado se aisló solo el dibujo blanco (el globo + el teléfono),
  descartando unos pixeles sueltos que quedaban en las esquinas
  redondeadas.

Si en algún momento cambia el logo, `src/components/Logo.astro` es el
único lugar que lo usa (y `public/favicon.png`, que es el mismo archivo
en otro tamaño, para la pestaña del navegador). El ícono de WhatsApp se
usa desde `src/components/WhatsAppButton.astro`.

## Pendiente: imágenes para redes sociales

Dejé los meta tags `og:image` / `twitter:image` de cada página apuntando
a `/og-image.png` (restaurantes) y `/og-image-clinicas.png` (clínicas) —
se configuran en `seo.ogImage` de cada `src/content/*.js` —
pero esos archivos no existen todavía — a diferencia del logo, esto no es
"sacarle el fondo a una foto", es diseñar un layout de 1200x630px desde
cero (con texto, no solo el ísologo). Sin ellos, cuando alguien comparta
el link en WhatsApp/Instagram/etc. la vista previa va a salir sin imagen.
Avisame cuando quieras encararlo y lo armamos.

## Deploy (Vercel / Netlify)

- **Build command:** `npm run build`
- **Output / publish directory:** `dist`
- No hace falta configurar nada más — no hay variables de entorno
  obligatorias ni backend. Ambas páginas (`/` y `/clinicas/`) quedan
  serviditas automáticamente por ser archivos estáticos reales dentro de
  `dist/`.

## Por qué Astro

Es una landing informativa: se lee, se hace click en WhatsApp y listo. No
necesita un framework corriendo en el navegador. Astro arma todo el HTML
en `npm run build` a partir de los componentes, y al navegador le llega
solo HTML + CSS — sin React ni ningún otro runtime de JavaScript.

Eso importa por dos razones:

- **Buscadores e IAs**: el contenido ya viene completo en el HTML. Los
  crawlers de IA (GPTBot, ClaudeBot, PerplexityBot y similares) y la vista
  previa que arma WhatsApp/Instagram/Facebook al pegar el link en general
  **no ejecutan JavaScript**, así que necesitan que el texto esté ahí.
  Google también indexa mejor y más rápido así.
- **Velocidad en el celular**: antes (React + Vite con prerenderizado) el
  HTML ya venía completo, pero además se descargaban ~230 KB de JavaScript
  (~72 KB comprimido) solo para el menú hamburguesa y el botón de
  compartir. Ahora esas dos cosas son dos `<script>` de ~500 bytes cada uno,
  dentro de `Header.astro` y `ShareButton.astro`. El FAQ usa `<details>`,
  que es nativo del navegador y no necesita JS.

Si algún día hace falta algo realmente interactivo (un formulario con
validación, un simulador de precios), Astro permite sumar un componente de
React/Preact/etc. solo en ese lugar ("island"), sin cargarlo en todo el
sitio.

## Sobre agregar `/clinicas/` sin perder posiciones de `/`

`/` (restaurantes) no se tocó ni se movió: sigue siendo exactamente la
misma landing, en la misma URL. `/clinicas/` es una página nueva y
separada, no un reemplazo ni un "hub" que reparte tráfico entre las dos.
Técnicamente no hay forma de que sumar una página nueva le reste vistas a
una que no se modificó — lo único que cambió en `/` es que ahora tiene un
link de más (a `/clinicas/`), tanto en el header como en el footer.

Dicho eso, ninguna herramienta puede garantizar cuánto tráfico total va a
tener el sitio — eso depende de factores que están fuera de este código
(qué tan rápido indexa Google un sitio nuevo, la competencia, cambios de
algoritmo, etc.). Lo que sí puedo asegurar es que esta estructura no le
resta nada a lo que ya había.

## Qué se implementó de la lista de SEO que pasaste, y qué no

✅ Implementado (por página):
- Meta título y meta descripción propios y distintos entre `/` y `/clinicas/`.
- Un solo `<h1>` por página, distinto del meta título, con jerarquía H1 → H2 → H3 ordenada.
- CTA (botón de WhatsApp) inmediatamente después del primer párrafo.
- Tabla comparativa y listas en varias secciones.
- Sección de preguntas frecuentes + su schema `FAQPage`, propia de cada rubro.
- Schema de la empresa (ver nota abajo sobre por qué no es `LocalBusiness`).
- Nombres de archivo descriptivos y `alt`/`aria-label` en los elementos
  visuales (los íconos son SVG inline, no imágenes sueltas).
- `robots.txt` y `sitemap.xml` con las dos URLs.
- `llms.txt` (convención emergente, no un estándar oficial, pero es gratis
  de implementar) listando las dos verticales.
- Interlinkeado entre las dos landings (header y footer).
- CTA fijo en la parte inferior en mobile.
- Botón de compartir (usa el share nativo del celular, o copia el link).

⚠️ Con una salvedad:
- **Schema de negocio**: usé `Organization` + `Service` en vez de
  `LocalBusiness`. `LocalBusiness` es para negocios físicos a los que un
  cliente va (un local, una dirección, horarios de atención al público) —
  Omengo es la empresa de software que le vende el bot *a los restaurantes
  y clínicas*, no el local en sí. Si con el tiempo Omengo abre una oficina
  al público, se puede sumar `LocalBusiness` con esa dirección.

⛔ No implementado (y por qué):
- **Desindexar `/page/`**: no aplica, el sitio no tiene paginación ni
  subcarpetas de listado.
- **GA4 y Google Search Console**: necesitan una cuenta de Google real
  (un ID de medición `G-XXXXXXXXXX` para GA4, y verificar la propiedad del
  dominio en Search Console) — no son datos que yo pueda inventar. Para
  GA4 alcanza con completar `GA4_MEASUREMENT_ID` en `src/config/site.js`:
  el layout agrega el tag en todas las páginas automáticamente.
  Para Search Console, una vez que entres a
  [search.google.com/search-console](https://search.google.com/search-console),
  vas a poder verificar el dominio por DNS (con el proveedor donde
  compraste `omengo.com.ar`) y después enviar
  `https://omengo.com.ar/sitemap.xml` desde ahí mismo — ese sitemap ya
  cubre las dos páginas.

## Accesibilidad (WCAG AA)

El sitio se diseñó pensando en WCAG 2.1 nivel AA: contraste de color
verificado (mínimo 4.5:1 en texto normal), navegación por teclado con foco
visible, un link de "saltar al contenido", estructura semántica
(`header`/`nav`/`main`/`footer`), textos alternativos y `aria-label` en
elementos interactivos sin texto visible. Se corrió una auditoría
automática con [axe-core](https://github.com/dequelabs/axe-core) contra
las dos páginas ya buildeadas: **0 violaciones** en las reglas WCAG 2.0/2.1
A y AA. Una auditoría automática no reemplaza una revisión manual completa
(por ejemplo, con lectores de pantalla reales), pero cubre la gran mayoría
de los problemas comunes.

## Cambiar textos, número de WhatsApp o dominio

Todo el contenido de cada landing vive en `src/content/restaurantes.js` y
`src/content/clinicas.js` (un objeto de JavaScript, no hace falta tocar
los componentes). El número de WhatsApp, el nombre de marca y el dominio
están en [src/config/site.js](src/config/site.js).
