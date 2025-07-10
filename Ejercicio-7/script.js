/*
    Ejercicion N° 7
    Hacer una función que, dado como dato de entrada nuestra fecha de cumpleaños,
    nos diga cuantos dias falta para el mismo
*/

const calcularDias = (fecha) => {
    let nacimiento = new Date(fecha);
    let hoy = new Date();
    let cumpleanos = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());
    if (cumpleanos < hoy) {
        cumpleanos.setFullYear(cumpleanos.getFullYear() + 1);
    }
    let diferencia = (cumpleanos - hoy) / (1000 * 60 * 60 * 24);
    console.log(`Faltan ${Math.ceil(diferencia)} días para tu cumpleaños`);
};


calcularDias('1993-05-06');
calcularDias('1991-11-13');