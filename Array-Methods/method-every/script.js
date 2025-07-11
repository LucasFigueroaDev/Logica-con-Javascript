/**
 * Array Method – every()
Cada elemento de el arreglo se somete a la prueba suministrada, 
por la función proporcionada utilizando el método every(). 
todos los elementos del arreglo deben cumplir la prueba Devuelve un resultado booleano. 
Devuelve true si cumplen todos con dicha prueba y devuelve false si al menos una no cumple.
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

//saber si todos los usuarios tienen el sueldo de 6500
const resultado = usuarios.every((item) => {
    return item.sueldo === 6500;
})

//resultado
console.log(resultado) //false