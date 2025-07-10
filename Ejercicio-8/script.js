/*
    Ejercicio N° 8
    Hacer una función que, dado como dato de entrada una oración, nos devuelva un arreglo
    que contenga todas las palabras usadas en la oración.
*/

const arrFrase = (frase) =>{
    let arr = frase.split(' ');
    return console.log(arr);
}

arrFrase('Esto es una oración');
arrFrase('Tengo tres hermanas y un hermano.');
arrFrase('En la clase hay veinticinco alumnos.');
