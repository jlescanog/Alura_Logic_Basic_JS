let numeroSecreto = generarNumeroSecreto();

// Crea una función asignarTextoElemento que reciba dos parámetros: un elemento y un texto. La función debe asignar el texto recibido al elemento recibido.
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario == numeroSecreto);
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento('h1', 'Juego del número secreto!'); // Cambia el contenido de h1 por 'Juego del número secreto!'
asignarTextoElemento('p', 'Ingresa un número del 1 al 10') // Cambia el contenido de p por 'Bienvenido a mi sitio'
