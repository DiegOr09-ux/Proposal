let currentScreen = 1; // comenzamos en screen1

    function nextScreen() {
        // Ocultar la pantalla actual
        const current = document.getElementById(`screen${currentScreen}`);
        if (current) current.classList.remove("active");

        // Avanzar a la siguiente pantalla
        currentScreen++;
        const next = document.getElementById(`screen${currentScreen}`);
        if (next) next.classList.add("active");

        // Actualizar barra de progreso
        updateProgress(`screen${currentScreen}`);
    }


function updateProgress(screenId) {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    let progress = 0;

    switch (screenId) {
        case "screen1":
        progress = 0;
        break;
        case "screen2":
        progress = 20;
        break;
        case "screen3":
        progress = 40;
        break;
        case "screen4":
        progress = 60;
        break;
        case "screen5":
        progress = 80;
        break;
        case "screen6":
        progress = 99;
        break;
        case "screen7":
        progress = 100;
        break;
    }

    progressBar.style.width = progress + "%";
    progressText.textContent = progress === 0 ? "❤️ Progreso: 0%" : progress + "%";

    // Si quieres ocultarlo al 100%, puedes hacerlo así:
    if (progress === 100) {
        progressText.textContent = progress === 100? "You've completed this adventure 😍😎" : progress + "%";
    } else {
        progressText.style.display = "flex";
    }
}

function mostrarMensaje() {
    const mensaje = "Gracias por decir que sí ❤️\nPrometo hacerte muy feliz, acompañarte siempre y hacer de cada momento algo especial. \n Toy Feliz " ;
    const mensajeFinal = document.getElementById("mensajeFinal");
    
    mensajeFinal.textContent = "";
    let i = 0;

    const escribir = () => {
        if (i < mensaje.length) {
        mensajeFinal.textContent += mensaje.charAt(i);
        i++;
        setTimeout(escribir, 50); // velocidad de escritura
        }
    };

    escribir();
}


function deshabilitarBoton() {
    const boton = document.getElementById('miBoton');
    boton.disabled = true; // Deshabilita el botón
}
