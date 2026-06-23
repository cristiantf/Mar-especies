# 🌊 Mar Especies Studio

Aplicación web educativa e interactiva sobre **14 animales marinos** en 3D.
Permite explorar modelos `.glb`, comparar especies, leer fichas, ver mapas de
distribución, anatomía y hábitat de cada animal.

> Inspirada en el mockup `app-assets/mockups/interfaz_app_mar_especies.png`,
> con paleta oceánica, tarjetas claras y foco en el animal seleccionado.

---

## ▶️ Cómo ejecutarla

La app es **estática** (HTML + CSS + JS modular) y necesita servirse desde un
servidor local para que `<model-viewer>` cargue los `.glb`. Se sirve la
carpeta padre `Mar-especies/` para que las rutas relativas a `animales-3D/`,
`app-assets/`, etc. funcionen.

### Opción 1 · Node / npm (recomendada)

Desde la carpeta `app/`:

```bash
npm start
```

Esto ejecuta `npx serve -l 5173 ..` y abre el servidor en:

> 🌐 **http://localhost:5173/app/**

### Opción 2 · Python

```bash
npm run start:py
```

equivalente a `python -m http.server 5173 --directory ..`.

> 🌐 **http://localhost:5173/app/**

### Opción 3 · http-server

```bash
npm run start:node
```

---

## 🗂 Estructura

```
Mar-especies/
├── animales-3D/         # modelos .glb
├── app-assets/          # logo, iconos, miniaturas, hábitats, mapas, anatomía
├── imagenes-detalles/   # fichas visuales
├── jpg/                 # imágenes base
├── png-transparentes/   # imágenes sin fondo
└── app/                 # ← la app web
    ├── index.html
    ├── package.json
    ├── README.md
    ├── css/styles.css
    └── js/
        ├── data.js      # datos educativos de las 14 especies
        └── app.js       # lógica de UI y visor 3D
```

Los assets **no se duplican**: se referencian con rutas relativas (`../animales-3D/...`).

---

## 🧭 Lo que incluye la interfaz

| Sección                    | Función                                                                 |
| -------------------------- | ----------------------------------------------------------------------- |
| **Barra superior**         | Logo, nombre, accesos Galería / Biblioteca / Cuaderno / Ajustes.        |
| **Sidebar de especies**    | 14 miniaturas seleccionables.                                            |
| **Visor 3D central**       | Modelo `.glb` con rotar, AR, 360°, fondo hábitat on/off.                 |
| **Controles**              | Rotar, Aislar, Etiquetas, Vista inicial, Captura PNG, Exportar `.glb`.  |
| **Galería educativa**      | Anatomía y ficha visual (modal ampliado al hacer clic).                  |
| **Comparar especies**      | Selecciona dos especies y abre un panel comparativo lado a lado.        |
| **Detalles del animal**    | Grupo, respiración, movimiento, alimentación, reproducción, tamaño…    |
| **Notas ecológicas**       | Importancia ecológica y dato curioso de cada especie.                   |

> La interfaz está diseñada para ocupar exactamente el alto del viewport
> en escritorios estándar (≥ 1024 × 768): **sin scroll de página**.

---

## 🐠 Especies incluidas

caballito_de_mar · delfín · dragón_azul · estrella_de_mar · manta_raya ·
medusa · morena_cinta_azul · nautilus · pez_cirujano_azul · pez_león ·
pez_loro · pez_mandarín · pez_payaso · tortuga_marina.

---

## 🧰 Dependencias

Una sola dependencia externa: **[`<model-viewer>` v3.5](https://modelviewer.dev/)**
cargada por `<script type="module">` desde unpkg, solo para el visor 3D.
Si necesitas funcionar 100% offline, descarga `model-viewer.min.js` y cámbialo
por una ruta local en `index.html`.

---

## 📱 Responsive

- Escritorio (>1280 px): layout completo de tres columnas.
- Tablet (980 – 1280 px): columnas reducidas, fila inferior en 2 columnas.
- Móvil (<640 px): columnas apiladas verticalmente.

---

## ⌨️ Atajos

- `Esc` cierra cualquier modal y sale del modo aislado.
- Doble clic en el modelo: enfoca y reencuadra.
