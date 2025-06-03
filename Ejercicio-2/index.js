/*
* Ejercicio N° 2
Has hecho una compra y sabes el precio del producto y su iva. 
Haz un script que te calcule el precio total que vas a pagar por tu compra.

Iva: 21%
*/
let precio = parseFloat(prompt('¿Cúal es el precio del prodcuto?'));
let iva = 21;
let total = precio + (precio * iva / 100);
let preciofinal = console.log(`El precio final es de: ${total.toFixed(2)}`);