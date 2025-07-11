/**
 * Array Method – find()
El método find() devuelve el primer elemento de un arreglo dada que cumple la función de comprobación.
Y devuelve undefined si ningún valor satisface la función de comprobación.
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

//mostrar los datos del usuario Cristian
const resultado = usuarios.find((item) => {
    return item.nombre === "Cristian";
}, 0)

//resultado
console.log(resultado) //{id: 2, nombre: 'Cristian', correo: 'cristian@correo.com', sueldo: 7800}