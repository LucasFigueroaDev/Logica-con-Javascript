/**
 *      Array Method – some()
El método some() determina si al menos un elemento del array cumple la prueba 
que la función suministrada ha implementado. Si localiza un elemento en el array 
para el que la función especificada devuelve true; en caso contrario, devuelve false, 
muy importante el arreglo no se modifica.
Ahora veamos un ejemplo practico utilizando dicho método de arreglo.
 */

//arreglo de objetos
const usuarios = [
    { id: 1, nombre: "Alejandro", correo: "alejandro@correo.com", sueldo: 3500 },
    { id: 2, nombre: "Cristian", correo: "cristian@correo.com", sueldo: 7800 },
    { id: 3, nombre: "Dorys", correo: "dorys@correo.com", sueldo: 6500 },
    { id: 4, nombre: "Andrés", correo: "andres@correo.com", sueldo: 6200 },
    { id: 5, nombre: "Daniela", correo: "daniela@correo.com", sueldo: 2100 },
];

//saber si existe algún usuario que se llame Andrés
const resultado = usuarios.some((item) => {
    return item.nombre === "Andrés";
})

//resultado
console.log(resultado) //true