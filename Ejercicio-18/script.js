/**
 * Ejercicio N° 18
 * Crear una función que tome como parámetro un arreglo, retornar el primer elemento del arreglo
 */

const primerElemento = (arr) => {
    let primerEl;
    for(let i = 0; i<arr.length; i++){
        primerEl = arr[i]
        break;
    }
    console.log(primerEl);
    return;
}

primerElemento([1,2,3]);
primerElemento([3,6,9]);
primerElemento([78,4,7]);