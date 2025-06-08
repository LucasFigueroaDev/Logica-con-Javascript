/*
 * Realizar una tabla de multiplicación de un número (a)
desde 0 hasta x, pero que no se muestre la multiplicación 
de "a x 5".
 */

const tabla = (a,x)=>{
    for (let i = 0; i <= x; i++){
        if (i == 5){
            continue;
        }
        console.log(`${a} x ${i} = ${a*i}`);
    }
}

tabla(10, 100);