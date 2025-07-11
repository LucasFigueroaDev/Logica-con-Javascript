/*
    Ejercicio N° 10
    Realizar una función que nos diga la fecha de apertura de un examen de la universidad,
    es decir, la cantidad de horas restantes que faltan para que abra el examen. En caso de que 
    el examen haya cerrado que nos retorne un mensaje que diga "El examen ya cerro"
    */

const aperturaExamen = (fecha) => {
    let fechaActual = new Date();
    let fechaExamen = new Date(fecha);
    let diferenciaMilisegundos = fechaExamen - fechaActual; 
    if (diferenciaMilisegundos < 0) {
        console.log("El examen ya cerró.");
    } else {
        const totalMinutos = Math.floor(diferenciaMilisegundos / (1000 * 60));
        const horas = Math.floor(totalMinutos / 60);
        const minutos = totalMinutos % 60;
        let mensaje = "El examen se abre en ";
        if (horas > 0) {
            mensaje += `${horas} hora${horas === 1 ? '' : 's'}`;
            if (minutos > 0) {
                mensaje += ` y ${minutos} minuto${minutos === 1 ? '' : 's'}`;
            }
        } else if (minutos > 0) {
            mensaje += `${minutos} minuto${minutos === 1 ? '' : 's'}`;
        } else {
            mensaje = "El examen se abre ahora mismo.";
        }
        console.log(mensaje);
    }
}
aperturaExamen("2025-07-09T10:00:00");
aperturaExamen("2025-07-10T23:07:28");
aperturaExamen("2025-07-10T22:37:28");
aperturaExamen("2025-07-10T20:47:28");
aperturaExamen("2025-07-15T10:00:00");
