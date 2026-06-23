# Plan de Implementación - Mar Especies Studio

## 1. Visión General
Consolidar a *Mar Especies Studio* como una herramienta educativa interactiva de primer nivel para la enseñanza de la biología marina, facilitando la exploración 3D y la retención de información ecológica de especies clave.

## 2. Fases del Proyecto

### Fase 1: MVP Interactivo (Completado ✅)
- [x] Estructuración del proyecto estático (HTML/CSS/JS).
- [x] Recopilación y optimización de 14 modelos 3D (`.glb`).
- [x] Desarrollo de base de datos local en `data.js`.
- [x] Implementación del visor 3D central (`<model-viewer>`).
- [x] Construcción del panel de detalles ecológicos y galería.
- [x] Integración del comparador de especies.
- [x] Ajustes de responsividad para móviles y tablets.

### Fase 2: Optimización y Soporte Offline (Siguiente iteración 🔄)
- **PWA (Progressive Web App):** Implementar un Service Worker y un archivo `manifest.json` para permitir su instalación en dispositivos y uso completamente sin conexión.
- **Lazy Loading:** Implementar carga diferida (lazy load) para imágenes de alta resolución en la galería y minimización del peso inicial.
- **Optimización de Modelos:** Refinar la compresión Draco de los `.glb` para asegurar fluidez en dispositivos móviles de gama baja.

### Fase 3: Expansión de Contenido y Gamificación (Planificado 📅)
- **Nuevas Especies:** Ampliar el catálogo a nuevas zonas ecológicas (ej. zona abisal, polos).
- **Módulo Quiz / Retos:** Implementar una sección de "Trivia Marina" para evaluar los conocimientos del usuario adquiridos en las fichas.
- **Modo Nocturno (Dark Mode):** Añadir un tema oscuro automatizado que cuide la vista en entornos de poca luz.
- **Internacionalización:** Extraer cadenas de texto para ofrecer soporte bilingüe (Español / Inglés).

## 3. Guía Operativa
Para integrar nuevo contenido en el futuro inmediato:
1. Agregar el modelo 3D en `animales-3D/` y texturas/fichas en `app-assets/`.
2. Registrar la especie en el arreglo `ESPECIES` dentro de `app/js/data.js`.
3. La interfaz generará dinámicamente los botones y componentes para el nuevo elemento.
