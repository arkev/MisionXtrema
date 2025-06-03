# Misión Extrema

Este repositorio contiene un sitio web estático desarrollado únicamente con **HTML**, **CSS** y **JavaScript**. Las distintas secciones del proyecto se encuentran en archivos HTML independientes y comparten hojas de estilo y un script principal.

## Estructura del proyecto

- **Archivos HTML**: cada página se ubica en la raíz del repositorio. Ejemplos: `index.html`, `inscripcion.html`, `Apadrinar.html`, etc.
- **`css/`**: carpeta con los estilos. `style.css` importa varios archivos parciales (como `allison.css`, `rebeca.css`, `ferran.css`, etc.) que contienen las reglas específicas de cada sección o colaborador.
- **`js/`**: contiene `scripts.js`, donde se manejan funcionalidades como el contador regresivo, la validación del formulario de inscripción y la interacción del menú.
- **`images/`**: recursos gráficos y favicons utilizados por las páginas.
- **`config.codekit3`**: archivo de configuración para CodeKit 3, usado para compilar y organizar los recursos de forma opcional.

## Uso básico

1. Clona o descarga el repositorio.
2. Abre `index.html` (u otra página) en tu navegador para ver el sitio. No se requiere un servidor web, ya que todo es estático.

## Recomendaciones para colaborar

- Conoce bien HTML y CSS para modificar o agregar secciones sin romper el diseño.
- Si necesitas extender la funcionalidad, revisa `js/scripts.js` para trabajar con el DOM y los eventos.
- Mantén las imágenes y recursos en la carpeta `images/` para facilitar la organización.
- Considera usar CodeKit (u otra herramienta similar) si deseas compilar o procesar los archivos automáticamente.

¡Bienvenido al proyecto!
