// Obtiene el elemento con la clase "anio"
const anioElemento = document.querySelector('#anio');

// Obtiene el año actual
const anioActual = new Date().getFullYear();

// Inserta el año en el elemento
anioElemento.textContent = anioActual;

// Configuración de la fecha objetivo (puedes cambiarla fácilmente)
const fechaObjetivo = new Date("2025-11-08T00:00:00");

// Función para calcular la diferencia de tiempo
function actualizarCuentaRegresiva() {
    const ahora = new Date();
    let diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
        document.getElementById("meses").textContent = "00";
        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        return;
    }

    // Cálculo de meses, días y horas
    let meses = fechaObjetivo.getMonth() - ahora.getMonth() + 
                (fechaObjetivo.getFullYear() - ahora.getFullYear()) * 12;
    
    let tempFecha = new Date(ahora);
    tempFecha.setMonth(tempFecha.getMonth() + meses);

    if (tempFecha > fechaObjetivo) {
        meses--;
        tempFecha.setMonth(tempFecha.getMonth() - 1);
    }

    let dias = Math.floor((fechaObjetivo - tempFecha) / (1000 * 60 * 60 * 24));
    let horas = Math.floor((fechaObjetivo - ahora) / (1000 * 60 * 60)) % 24;

    // Mostrar los valores en la página
    document.getElementById("meses").textContent = meses.toString().padStart(2, "0");
    document.getElementById("dias").textContent = dias.toString().padStart(2, "0");
    document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
}

// Actualizar cada segundo
setInterval(actualizarCuentaRegresiva, 1000);

// Llamar a la función al cargar la página
actualizarCuentaRegresiva();

// Modal del menú
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.fa-bars');
    const closeButton = document.querySelector('.fa-xmark');
    const menuModal = document.getElementById('menuModal');

    menuButton.addEventListener('click', function() {
        menuModal.style.display = 'flex';
    });

    closeButton.addEventListener('click', function() {
        menuModal.style.display = 'none';
    });
});
