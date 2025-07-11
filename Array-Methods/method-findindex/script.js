/**
 * Array Method – findIndex()
El método findIndex() devuelve el primer miembro de un arreglo cuyo índice coincide 
con la función de comprobación suministrada. Se devuelve -1 si ningún elemento pasa el método de comprobación.

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

//mostrar la posicion del arreglo en la que se encuentra la usuario Daniela
const resultado = usuarios.findIndex((item) => {
    return item.nombre === "Daniela";
}, 0)

//resultado
console.log(resultado) //4