/**
 * Ejercicio N° 17
 * Crear una función que tome como parámetro un arreglo, retornar el último elemento del arreglo
 */

const ultimoElemento = (arr) => {
    /*.at(-1) es parte de ES2022. Admite índices negativos. Es seguro y más legible que usar índices manuales. COMPATIBILIDAD ES2022+*/
    //const ultimo = arr.at(-1);
    //const ultimoLength = arr[arr.length-1] // --> compatible con todos 
    //console.log(`Con lenght ${ultimoLength}`);
    let ultimo;
    for(let i=0; i<arr.length; i++){
        ultimo = arr[i];
    }
    console.log(ultimo);
    return ultimo;
}

ultimoElemento([1,2,3,45,86,26,47]);
ultimoElemento([1,2,3,45,86,26,47,65,7,89,2123,12,3]);
ultimoElemento([1,2,3,45,86,26,47,6,7,2,123,45,68]);
ultimoElemento([1,2,3,45,86,26,1241,15,654,5]);