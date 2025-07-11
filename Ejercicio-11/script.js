/*
    Ejercicio 11
    En un arreglo tenemos varios valores numéricos, debemos de hacer una
    función que nos elimine aquellos valores que se repitan en el arreglo
    */

const arr = [1,5,3,4,5,6,7,8,9,10];
const arr2 = [1,1,1,1,1,1,1,2];

function eliminarRepetidos(array) {
    return Array.from(new Set(array));
}

console.log(eliminarRepetidos(arr));
console.log(eliminarRepetidos(arr2));

