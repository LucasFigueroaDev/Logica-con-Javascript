/**
 * Array Method – reduce()
El método reduce() pasa el valor de retorno del cálculo en el elemento anterior 
y ejecuta una función de devolución de llamada «reductor» proporcionada por el usuario 
en cada elemento de el arreglo. Al ejecutar el reductor en todo el arreglo se obtiene 
un único valor como resultado final.
El «valor de retorno del cálculo anterior» no existe cuando se ejecuta inicialmente la 
llamada de retorno. Si se da uno, se puede sustituir por un valor inicial. En caso contrario, 
se utiliza el valor inicial del elemento del array en el índice 0, y la iteración comienza 
con el elemento siguiente (índice 1 en lugar de índice 0).

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

//mostrar el sueldo total de todos los usuarios
const resultado = usuarios.reduce((total, item) => {
    return total + item.sueldo;
}, 0)

//resultado
console.log("Sueldo total de los usuarios: " + resultado) //Sueldo total de los usuarios: 26100