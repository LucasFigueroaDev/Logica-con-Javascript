/**Ejercicio 20
 * Crear una función que tome como parámetro un arreglo de números, 
 * retornar la suma de todos los elementos del arreglo
 */

const sumArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return console.log(sum);
}

sumArr([1, 2, 3, 4, 5]);
sumArr([4,54,234,645,85]);
