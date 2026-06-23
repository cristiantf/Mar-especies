# Documentación Técnica - Mar Especies Studio

## 1. Arquitectura del Sistema
Mar Especies Studio es una aplicación web estática (Single Page Application) construida con tecnologías web estándar (HTML5, CSS3, Vanilla JavaScript). Funciona en el lado del cliente sin requerir un backend de servidor activo o base de datos externa, delegando el estado y la lógica al navegador web.

## 2. Dependencias Principales
El ecosistema es intencionalmente ligero para maximizar el rendimiento.
- **`<model-viewer>` v3.5:** Es la única dependencia externa principal. Librería web component de Google para renderizar los modelos 3D (`.glb`), habilitar controles de cámara, auto-rotación y Realidad Aumentada (AR).
- **Servidores de desarrollo locales:** `serve` (vía npm), `http-server`, o `http.server` (Python) definidos en `package.json` para montar la aplicación en el puerto `5173`.

## 3. Estructura de Datos
Toda la información taxonómica y rutas están centralizadas en `app/js/data.js`, que exporta:
- `ESPECIES`: Array de objetos JSON con todos los detalles taxonómicos, anatomía, conservación e IDs de 14 especies.
- `HABITATS`: Diccionario de los diferentes hábitats marinos y sus descripciones.
- `RUTAS` y `rutasEspecie(esp)`: Utilidades para la resolución de rutas relativas de los assets multimedia (modelos 3D, texturas, iconos).

## 4. Lógica de la Aplicación (`app/js/app.js`)
El script central orquesta las interacciones del DOM y la renderización de la UI:
- **Estado (State):** Almacena de forma centralizada la especie visualizada (`selectedId`), especies en modo comparación (`compareA`, `compareB`), y el estado de presentación (modo aislado, rotación activada, fondo activado).
- **Actualización Reactiva Manual:** Se usa un enfoque imperativo; al mutar el estado mediante selecciones (función `seleccionar(id)`), se invoca `renderTodo()` para reescribir los componentes HTML del DOM.
- **Persistencia en Sesión:** La aplicación guarda las preferencias de la UI (paneles colapsados, configuraciones) utilizando la API `localStorage`.

## 5. Árbol de Directorios y Assets
Los assets están desacoplados de la UI para mantener el directorio fuente (`app/`) limpio. Todo se relaciona a través del directorio padre `Mar-especies/`.
```text
Mar-especies/
├── animales-3D/         # Modelos tridimensionales (.glb)
├── app-assets/          # Iconografía, mapas, miniaturas y hábitats
├── imagenes-detalles/   # Fichas visuales informativas
├── png-transparentes/   # Renders sin fondo usados en comparador y UI
└── app/                 # Código fuente web (SPA)
    ├── css/styles.css   # Estilos centralizados
    ├── js/data.js       # Base de datos JSON estática
    ├── js/app.js        # Lógica central del sistema
    ├── index.html       # Estructura de componentes
    └── package.json     # Scripts y manifiesto
```

## 6. Despliegue y Ejecución
La carga de texturas y modelos 3D en `<model-viewer>` requiere un entorno HTTP por las políticas de **CORS** del navegador.
Los scripts del `package.json` incluyen:
1. `npm start`: Levanta el servidor usando `serve` (Recomendado).
2. `npm run start:py`: Levanta el servidor usando Python `http.server`.
3. `npm run start:node`: Levanta el servidor alternativo usando `http-server`.

Una vez ejecutado, la aplicación principal reside en la ruta del subdirectorio **`/app/`** (Ej: `http://localhost:5173/app/`).
