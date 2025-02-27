let iniciando = document.querySelector('h1');
iniciando.textContent = 'Hora del desafío de JavaScript';

// Muestra un mensaje en la consola cuando se hace clic en un botón
function intentoConsole() {
  console.log('El boton fue clickeado');
}

// Solicita al usuario el nombre de una ciudad de Perú y muestra una alerta con el nombre ingresado
function intentoPrompt() {
  let nombreCiudad = prompt('¿Ingrese el nombre de una cuidad de Perú?');
  alert(`La cuidad ingresada es: ${nombreCiudad}`);
}

// Muestra una alerta con el mensaje "Yo amo JS"
function intentoAlert() {
  alert('Yo amo JS');
}

// Solicita al usuario dos números, los suma y muestra el resultado en una alerta
function intentoSuma() {
    let numero1 = prompt('Ingresa el primer número');
    let numero2 = prompt('Ingresa el segundo número');
    let suma = parseInt(numero1) + parseInt(numero2);
    alert(` La suma de ${numero1} + ${numero2} es ${suma}`);
}