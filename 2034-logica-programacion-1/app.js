//variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
// let palabraVeces = 'vez';
let maximosIntentos = 2;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //cuando el usuario acierta le informa
        alert(`Acertaste, el número es: ${numeroUsuario}, Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {

        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }

        //alert('Lo siento, no acertaste el número')
    
        //incrementamos el contador cuando no acierta
        // intentos = intentos + 1;
        // intentos += 1;
        intentos++;
        // palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
    }   

}
    

