/** Ejercicio 15
 * Crear una función con el nombre de booleanoArray() que tome dos arreglos de números como parámetro 
 * y que retorne un booleano, unir los dos arreglos en uno solo, si la longitud de el nuevo arreglo 
 * es mayor o igual a 10 que retorne true si es menor a 10 que retorne false.
 * 
 */

const booleanoArray = (arr1, arr2) => {
    //const conconcat = arr1.concat(arr2);
    //const spreadO = [...arr1, ...arr2];
    let conFor = [];
    for(let i = 0; i < arr1.length; i++){
        conFor.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++){
        conFor.push(arr2[i])
    }
    //console.log(conconcat);
    //console.log(spreadO);
    console.log(conFor);

    if(conFor.length >= 10){
        return true;
    }else{
        return false;
    }

}

console.log(booleanoArray([1,2,3,4], [4,5,6,7,8,9,10,11]));
