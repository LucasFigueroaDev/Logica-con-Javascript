/*
    Ejercicion N° 9
    Crea una función llamada numeroMayor() que toma tres números como entrada 
    y retornar el numero mayor de ellos, si son iguales devolver un String «son iguales».
*/

const numeroMayor = (n1,n2,n3) =>{
    if(n1 > n2 && n1 > n3){
        return n1
    }else if (n2 > n1 && n2 > n3){
        return n2
    }else if (n3 > n2 && n3 > n1){
        return n3
    }else{
        return 'son iguales'
    }
}

console.log(numeroMayor(1,2,3));
console.log(numeroMayor(543,675,454));
console.log(numeroMayor(5,5,5));
console.log(numeroMayor(14,53,2));
console.log(numeroMayor(10,20,30));
console.log(numeroMayor(1,1,1));
console.log(numeroMayor(50,23,45));