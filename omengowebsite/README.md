# Omengo — landing pages

Sitio de Omengo (asistente de WhatsApp con IA, a medida por tipo de
negocio). Estático, React + Vite, sin backend ni base de datos. Multi
página: cada rubro tiene su propia landing con su propia URL.

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

En `npm run dev`, la de restaurantes está en `http://localhost:5173/` y la
de clínicas en `http://localhost:5173/clinicas/`.

## Estructura

```
index.html                    ← landing de restaurantes ("/")
clinicas/index.html           ← landing de clínicas ("/clinicas/")
src/
  config/site.js               ← dominio, número de WhatsApp, nombre de marca. Un solo lugar.
  content/restaurantes.js      ← TODO el contenido de la landing de restaurantes: copys, dolores,
                                  pasos, beneficios, comparativa, FAQ, demo de chat.
  content/clinicas.js          ← lo mismo, para clínicas. Pensado desde cero para ese rubro,
                                  no un buscar-y-reemplazar del de restaurantes.
  components/                  ← un componente + su .css por archivo. Reciben el contenido por
                                  props (content={...}) — no tienen texto de un rubro específico
                                  escrito adentro, por eso los usan las dos landings.
  App.jsx                      ← arma la página de restaurantes con esos componentes + su content
  AppClinicas.jsx              ← lo mismo, para clínicas
  entry-client.jsx / entry-client-clinicas.jsx   ← arranque en el navegador de cada página
  entry-server.jsx / entry-server-clinicas.jsx   ← usados solo en build time, ver más abajo
  mount.jsx / renderApp.jsx    ← la lógica de "hidratar o renderizar" / "convertir a HTML",
                                  compartida por ambas páginas para no duplicarla
scripts/prerender.mjs          ← paso de post-build, corre una vez por página
public/
  robots.txt, sitemap.xml, llms.txt, favicon.png, logo-omengo.png, whatsapp-icon.png
```

## Cómo agregar una tercera vertical el día de mañana

1. `src/content/<rubro>.js` — copiar la forma de `clinicas.js` y escribir
   el contenido de cero para ese rubro (no traducir/reemplazar palabras
   del de restaurantes: los dolores, beneficios y FAQ tienen que ser
   reales para ese negocio).
2. `src/App<Rubro>.jsx` — copiar `AppClinicas.jsx` y cambiar el import del
   content.
3. `<rubro>/index.html` — copiar `clinicas/index.html` y cambiar título,
   descripción, canonical, `og:url` y el schema `Service`.
4. `src/entry-client-<rubro>.jsx` y `src/entry-server-<rubro>.jsx` —
   copiar los de clínicas y cambiar el import del App.
5. `vite.config.js` — agregar la entrada nueva a `build.rollupOptions.input`.
6. `package.json` — agregar un `vite build --ssr src/entry-server-<rubro>.jsx --outDir dist-server-<rubro>` más a `"build"`.
7. `scripts/prerender.mjs` — agregar un objeto más al array `PAGES`.
8. `src/components/Header.jsx` y `Footer.jsx` — agregar la entrada
   correspondiente a `VERTICALS`.
9. `public/sitemap.xml` y `public/llms.txt` — agregar la URL nueva.

Es mecánico pero son varios archivos — si llega el momento, pedime
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

Si en algún momento cambia el logo, `src/components/Logo.jsx` es el
único lugar que lo usa (y `public/favicon.png`, que es el mismo archivo
en otro tamaño, para la pestaña del navegador). El ícono de WhatsApp se
usa desde `src/components/WhatsAppButton.jsx`.

## Pendiente: imágenes para redes sociales

Dejé los meta tags `og:image` / `twitter:image` de cada página apuntando
a `/og-image.png` (restaurantes) y `/og-image-clinicas.png` (clínicas),
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

## Por qué el build tiene varios pasos

`npm run build` hace, en orden: `vite build` (arma las dos páginas como
sitio normal) → un `vite build --ssr` por página (una versión de cada una
que corre en Node, solo durante el build) → `node scripts/prerender.mjs`
(usa esas versiones para generar el HTML final de cada página y pegarlo
dentro de su `dist/**/index.html`).

El motivo: una app de React + Vite "pura" genera un `index.html` casi
vacío (`<div id="root"></div>`) — todo el contenido lo arma React recién
cuando el navegador ejecuta el JavaScript. Para un usuario con navegador
normal eso no se nota, pero es un problema para vos porque:

- Los crawlers de IA (GPTBot, ClaudeBot, PerplexityBot y similares) en
  general **no ejecutan JavaScript** — verían una página vacía.
- La vista previa que arma WhatsApp/Instagram/Facebook al pegar el link
  tampoco ejecuta JavaScript.
- Google sí puede ejecutar JavaScript, pero indexa mejor y más rápido
  cuando el HTML ya viene con el contenido.

Este paso extra soluciona eso sin agregar ningún servidor: sigue siendo
un sitio 100% estático (`dist/` son solo archivos HTML/CSS/JS por
página), pensado específicamente porque mencionaste que te importa la
visibilidad en buscadores e IAs generativas.

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
  dominio en Search Console) — no son datos que yo pueda inventar. Dejé el
  lugar exacto para GA4 comentado en cada `index.html` con instrucciones.
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
