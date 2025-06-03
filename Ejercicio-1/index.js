/**
 * Ejercicio 1
    Realizar una funcion que nos permita realizar las 4 operaciones aritméticas,
    es decir, sumar, restar, multiplicar y dividir. La función debe recibir tres
    parametros, dos de ellos deben ser los valores (a y b) y uno el nombre de la operación
    (en minúsculas). Si el parametro de la operación no es valido que mande un error
    personalizado a la consola
 */

let a = parseInt(prompt("Primer número"));
let b = parseInt(prompt("Segundo número"));
let operacion = prompt("Operación").toLowerCase();

function realizarOperacion(a, b, operacion) {
    switch (operacion) {
        case "sumar":
            return a + b;
            break;
        case "restar":
            return a - b;
            break;
        case "multiplicar":
            return a * b;
            break;
        case "dividir":
            return a / b;
            break;
        default:
            console.log(`La operación ${operacion} no es valida, debe ingresar sumar, restar, multiplicar o dividir`);
    }
}

let resultado = realizarOperacion(a, b, operacion);
console.log(resultado);