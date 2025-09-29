/** Ejercicio 12
 * Escriba una función con el nombre de esVocal() que tome un carácter , 
 * devuelva True si es vocal (no importa si es mayúscula o minúscula), 
 * y devuelva False en caso contrario.
 */

const esVocal = (caracter) => {
    const x = caracter.toLowerCase();
    if ((x == "a") || (x == "e") || (x == "i") || (x == "o") || (x == "u")){
        return true;
    }else {
        return false;
    }
}

console.log(esVocal("a"));
console.log(esVocal("A"));
console.log(esVocal("E"));
console.log(esVocal("I"));
console.log(esVocal("o"));
console.log(esVocal("u"));
console.log(esVocal("g"));
console.log(esVocal("h"));
console.log(esVocal("j"));
