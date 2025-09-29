/** Ejercicio 14
 * Crear una función inversa() que calcule la inversión de una cadena y lo retorne. 
 * Por ejemplo, la cadena «Hola Mundo» debería retornar la cadena «odnum aloh» 
 * (retornar todo el String en minúsculas).
 */

const inversa = (cadena) => {
    const strMin = cadena.toLowerCase();
    let strInve = ''
    for (let i = strMin.length - 1; i >= 0; i --) { // Empezar desde el ultimo indice y llega a 0 hasta la primera letra
        strInve += strMin[i]
    }
    return strInve
}

console.log(inversa('hola mundo'));
console.log(inversa('Hola'));
console.log(inversa('MUNDO'));
console.log(inversa('Javascript'));
console.log(inversa('PYTHON'));
console.log(inversa('NEXT'));
