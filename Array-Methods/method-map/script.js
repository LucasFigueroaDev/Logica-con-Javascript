/** Array Method – map()
Nos permite recorrer a través del array y cambiar los elementos dentro de él, 
devolviendo un nuevo array con la misma longitud que el original.
Ahora veamos un ejemplo practico utilizando dicho método de arreglo.
 */

//arreglo de objetos
const numeros = [1, 2, 3, 4, 5];

//devolver un nuevo arreglo con los números multiplicados por 5
const resultado = numeros.map((item) => {
    return item * 5;
})
console.log(resultado); // [5, 10, 15, 20, 25]