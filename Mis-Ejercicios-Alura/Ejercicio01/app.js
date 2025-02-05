alert("¡Bienvenida y bienvenido a nuestro sitio web!");

let nombre = 'Lua';
let edad  = 25;
let numeroDeVenta = 50;
let saldoDisponible = 1000;

alert("¡Error! Completa todos los campos");

let mensajeDeError = "¡Error! Completa todos los campos";

alert(mensajeDeError);

nombre = prompt("Indica tu Nombre");
edad = prompt("Ingresa tu edad");

if (edad >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!");
}
