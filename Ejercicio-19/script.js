/**
 * Ejercicio N° 19
  Crear una función que tome como parámetro un arreglo y un número, 
  retornar un nuevo arreglo con todos los elementos y el número agregado al final del arreglo
 */

  const addNumber = (arr, num) =>{
    // let newArry = [...arr, num];
    // return console.log(newArry);
    let newArry = [];
    for (let i = 0; i < arr.length; i ++){
        newArry.push(arr[i]);
    }
    newArry.push(num);
    return newArry;
  };

  console.log(addNumber([1,2,3],4));
  