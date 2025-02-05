// Obtiene el elemento con la clase "anio"
const anioElemento = document.querySelector('#anio');

// Obtiene el año actual
const anioActual = new Date().getFullYear();

// Inserta el año en el elemento
anioElemento.textContent = anioActual;