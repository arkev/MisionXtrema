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
    // Verificar si los elementos existen en el DOM
    const mesesElemento = document.getElementById("meses");
    const diasElemento = document.getElementById("dias");
    const horasElemento = document.getElementById("horas");

    if (!mesesElemento || !diasElemento || !horasElemento) {
        return; // Salir de la función si los elementos no existen
    }

    const ahora = new Date();
    let diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
        mesesElemento.textContent = "00";
        diasElemento.textContent = "00";
        horasElemento.textContent = "00";
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
    mesesElemento.textContent = meses.toString().padStart(2, "0");
    diasElemento.textContent = dias.toString().padStart(2, "0");
    horasElemento.textContent = horas.toString().padStart(2, "0");
}

// Actualizar cada segundo
setInterval(actualizarCuentaRegresiva, 1000);

// Llamar a la función al cargar la página
actualizarCuentaRegresiva();

// Modal del menú
document.addEventListener('DOMContentLoaded', function menu() {
    const menuButton = document.querySelector('.fa-bars');
    const closeButton = document.querySelector('.fa-xmark');
    const menuModal = document.getElementById('menuModal');

    menuButton.addEventListener('click', function botonMenu() {
        menuModal.style.display = 'flex';
        console.log("abrir menú");
    });

    closeButton.addEventListener('click', function botonCerrar() {
        menuModal.style.display = 'none';
        console.log("cerrar menú");
    });
});
    
//Formalario de inscripción
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar los contenedores de cada paso
    const paso1 = document.querySelector('.paso1');
    const paso2 = document.querySelector('.paso2');
    const paso3 = document.querySelector('.paso3');
    
    // Botones "Siguiente" (en el paso 1 y en el paso 2, este último con la clase "finalizar")
    const btnSiguientePaso1 = document.querySelector('.paso1 .btn-siguiente');
    const btnSiguientePaso2 = document.querySelector('.paso2 .finalizar'); 
    
        btnSiguientePaso1.addEventListener('click', function() {
        const formPaso1 = paso1.querySelector('form');
        let valid = true;
        const requiredInputs = formPaso1.querySelectorAll('input[required], select[required]');
        
        requiredInputs.forEach(function(input) {
            if (!input.value || input.value.trim() === "") {
                valid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
    
        // Validar el número de celular
        const celularRegex = /^\+?\d{1,3}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
        const celularInput = document.getElementById('celular');
        if (!celularRegex.test(celularInput.value)) {
            valid = false;
            celularInput.classList.add('error');
        } else {
            celularInput.classList.remove('error');
        }

        // Validar el número de matrícula
        const matriculaRegex = /^\d{6,}$/;
        const matriculaInput = document.getElementById('matricula');
        if (!matriculaRegex.test(matriculaInput.value)) {
            valid = false;
            matriculaInput.classList.add('error');
            console.log('Matrícula inválida');
        } else {
            matriculaInput.classList.remove('error');
            console.log('Matrícula válida');
        }
    
        // Mostrar u ocultar el mensaje de error
        const errorMessage = formPaso1.querySelector('.mensajeDeError');
        if (!valid) {
            errorMessage.classList.remove('hidden');
            return;
        } else {
            errorMessage.classList.add('hidden');
        }
    
        // Transición para ocultar paso 1 y mostrar paso 2
        paso1.classList.remove('visible');
        paso1.classList.add('hidden');
        setTimeout(() => {
            paso1.style.display = 'none';
            paso2.style.display = 'block';
            setTimeout(() => {
                paso2.classList.remove('hidden');
                paso2.classList.add('visible');
            }, 50);
        }, 500);
    });
    
        btnSiguientePaso2.addEventListener('click', function(event) {
        event.preventDefault();
        const formPaso2 = paso2.querySelector('form');
        let valid = true;
        const requiredInputs = formPaso2.querySelectorAll('input[required], select[required]');
        
        // Validar inputs requeridos
        requiredInputs.forEach(function(input) {
            if (!input.value || input.value.trim() === "") {
                valid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        // Validar el correo electrónico
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const correoInput = document.getElementById('correo');
        if (!correoRegex.test(correoInput.value)) {
            valid = false;
            correoInput.classList.add('error');
            console.log('Correo electrónico inválido');
        } else {
            correoInput.classList.remove('error');
            console.log('Correo electrónico válido');
        }
    
        // Validar checkboxes dentro de #areasApoyo
        const areasApoyo = document.getElementById('areasApoyo');
        const checkboxes = areasApoyo.querySelectorAll('input[type="checkbox"]');
        const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    
        if (!isChecked) {
            valid = false;
            areasApoyo.classList.add('error');
        } else {
            areasApoyo.classList.remove('error');
        }
    
        // Mostrar u ocultar el mensaje de error
        const errorMessage = formPaso2.querySelector('.mensajeDeError');
        if (!valid) {
            errorMessage.classList.remove('hidden');
            return;
        } else {
            errorMessage.classList.add('hidden');
        }
    
        // Transición para ocultar paso 2 y mostrar paso 3
        paso2.classList.remove('visible');
        paso2.classList.add('hidden');
        setTimeout(() => {
            paso2.style.display = 'none';
            paso3.style.display = 'block';
            setTimeout(() => {
                paso3.classList.remove('hidden');
                paso3.classList.add('visible');
            }, 50);
        }, 500);
    });
}); // Cierre del DOMContentLoaded   

//Opciones de pago
document.addEventListener('DOMContentLoaded', function opcionesDePago() {
    const continueButton = document.querySelector('.continue-button');
    const paymentRadios = document.querySelectorAll('input[name="payment"]');

    continueButton.addEventListener('click', function seleccionaPago() {
        // Buscar el radio seleccionado
        const selectedOption = Array.from(paymentRadios).find(radio => radio.checked);

        if (selectedOption) {
            // Redirigir al HTML correspondiente
            const selectedValue = selectedOption.value;
            window.location.href = `${selectedValue}.html`;
        } else {
            // Mostrar un mensaje si no se seleccionó ninguna opción
            alert('Por favor, selecciona una opción de pago antes de continuar.');
        }
    });
});

//Botones de ediciones
document.addEventListener('DOMContentLoaded', function botonFlechita() {
    // Selecciona todos los botones con la clase flechita
    const flechitas = document.querySelectorAll('.flechita');
    
    flechitas.forEach(function(boton) {
        boton.addEventListener('click', function() {
            // Alternar la clase en el contenido: de "resumido" a "completo"
            const contenido = this.closest('.edicion').querySelector('.resumido');
            if (contenido) {
                contenido.classList.toggle('completo'); // Alterna la clase que expande o colapsa el contenido
            }
            
            // Alternar el icono: fa-caret-down <-> fa-caret-up
            if (this.classList.contains('fa-caret-down')) {
                this.classList.remove('fa-caret-down');
                this.classList.add('fa-caret-up');
            } else {
                this.classList.remove('fa-caret-up');
                this.classList.add('fa-caret-down');
            }
        });
    });
});