/**
 * Array Method – filter()
el método filter reduce el contenido de el arreglo a sólo los elementos que pasan 
la prueba establecida por la función suministrada, muy importante retorna un nuevo arreglo.
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

//mostrar sueldos mayores a 5000
const resultado = usuarios.filter((item) => {
    return item.sueldo > 5000;
})

//resultado
console.log(resultado)
/* [{id: 2, nombre: 'Cristian', correo: 'cristian@correo.com', sueldo: 7800},
{id: 3, nombre: 'Dorys', correo: 'dorys@correo.com', sueldo: 6500},
{id: 4, nombre: 'Andrés', correo: 'andres@correo.com', sueldo: 6200}] */