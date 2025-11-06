/** Ejercicio 16
 * Crear una función con el nombre de funcionArray() que tome dos arreglos de números enteros 
 * como parámetro y retornar un único arreglo, cada elemento del arreglo debe estar multiplicado 
 * por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6].
 */

const funcionArray = (arr1,arr2) => {
    let arr = [];
    for (let i = 0; i < arr1.length; i++){
        let result = arr1[i] * 2;
        arr.push(result);
    }
    for (let i = 0; i < arr2.length; i++){
        let result = arr2[i] * 2;
        arr.push(result);
    }
    console.log(arr);
    return arr;
}

funcionArray([2,3,4],[3,4,5]);
funcionArray([12,33,44],[30,48,52]);
funcionArray([24,13,64],[13,24,5]);