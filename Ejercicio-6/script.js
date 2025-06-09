/*
    Ejercicio N° 6
    Hacer una función que haga de forma aleatoria un número entre 1 y 1000
    y que a ese número le saqué su mitad, el doble y su raiz cuadrada.
*/


const mitadDobleRaiz = () => {
    let num = parseInt(Math.random() * (1000 - 1) + 1);
    let mitad = num / 2;
    let doble = num * 2;
    let raiz = Math.sqrt(num);
    return console.log(`El número es: ${num} la mitad es: ${mitad} el doble es: ${doble} y la raiz cuadadra es: ${raiz}`);
}

mitadDobleRaiz();