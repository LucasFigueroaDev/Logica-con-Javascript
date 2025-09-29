/** Ejercicio 13
 * 
 * Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) 
 * y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), 
 * debería retornar «xxxxx».
 * 
 */

const generarCaracteres = (n, l) => {
    // return l.repeat(n)
    let result = ''
    for (let index = 0; index < n; index++) {
        result += l
    }
    return result
} 

console.log(generarCaracteres(5,'x'));
console.log(generarCaracteres(15,'b'));
console.log(generarCaracteres(25,'a'));
