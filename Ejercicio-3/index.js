/**
 * Ejercicio 3
    Realizar una función que alamcene en un arreglo
    todos los números pares desde a hasta b
 */

let numPares = [];

function almacenarNumPares (a,b) {
    for (let i = a; i <= b; i++) {
        if ( i % 2 == 0 ){
            numPares.push(i)
        }
    }
    return numPares;
}

console.log(almacenarNumPares(2, 200));

