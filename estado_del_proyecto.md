# Estado del Proyecto - Mar Especies Studio

## Resumen Actual
El proyecto se encuentra en estado **Funcional / Producción (MVP)**. Las características principales de visualización 3D y consulta educativa de especies están implementadas en su totalidad para 14 especies marinas. La plataforma es estable y completamente interactiva.

## Componentes Completados (100%)
- **Base de Datos Local (`data.js`):** Datos completos de 14 especies (taxonomía, ecología, conservación, anatomía).
- **Visor 3D Interactivo:** Integración exitosa con `<model-viewer>`. Soporta rotación libre, reinicio de cámara, vista panorámica 360°, captura de imagen y soporte experimental para Realidad Aumentada (AR).
- **Interfaz de Usuario (UI):** Diseño responsive adaptado a tres quiebres (Escritorio, Tablet, Móvil). Incluye barra lateral interactiva, panel de detalles semánticos y tarjetas colapsables.
- **Módulo de Comparación:** Permite seleccionar dos especies y comparar sus características taxonómicas y ecológicas de manera paralela.
- **Herramientas de Exportación:** Funcionalidad nativa para descargar capturas de pantalla (.png) y exportar los modelos 3D originales (.glb).
- **Galería y Biblioteca:** Modales integrados que presentan fichas visuales en alta resolución y esquemas de anatomía detallados.

## Componentes Pendientes / Próximas Mejoras
- **Soporte Offline Nativo (PWA):** Actualmente la aplicación requiere de un servidor local. Se planea evolucionarla a Progressive Web App (PWA) para cachear los modelos 3D y funcionar sin red.
- **Ampliación del Catálogo:** Posible incorporación de nuevas especies marinas y hábitats adicionales.
- **Internacionalización (i18n):** Extracción de los literales en español a un sistema de traducción para dar soporte a múltiples idiomas.

## Limitaciones Conocidas
- **Despliegue Local Requerido:** Por las políticas de CORS de los navegadores web modernos, los modelos `.glb` no pueden cargarse si se abre el `index.html` con doble clic directamente desde el sistema de archivos (file://). Requiere de un servidor HTTP local (`npm start`).
- **Realidad Aumentada (AR):** La funcionalidad AR depende de las capacidades del hardware del dispositivo visitante (ARCore en Android o ARKit en iOS). No funciona nativamente en navegadores de escritorio tradicionales sin herramientas de simulación.
