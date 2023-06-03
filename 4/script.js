//4.Leer número del mes e indicar si tiene 30 o 31 días.

alert('Vamos a ingresar el número del mes para saber la cantidad de días que tiene en el año 2023')

const askedMonth = parseInt(prompt('Ingrese el número del mes a consultar'));

// switch (true) {
//     case askedMonth === 1:
//         console.log('El mes de Enero tiene 31 días');
//         break;
//     case askedMonth === 2:
//         console.log('El mes de Febrero tiene 28 días');
//         break;
//     case askedMonth === 3:
//         console.log('El mes de Marzo tiene 31 días');
//         break;
//     case askedMonth === 4:
//         console.log('El mes de Abril tiene 30 días');
//         break;
//     case askedMonth === 5:
//         console.log('El mes de Mayo tiene 31 días');
//         break;
//     case askedMonth === 6:
//         console.log('El mes de Junio tiene 30 días');
//         break;
//     case askedMonth === 7:
//         console.log('El mes de Julio tiene 31 días');
//         break;
//     case askedMonth === 8:
//         console.log('El mes de Agosto tiene 31 días');
//         break;
//     case askedMonth === 9:
//         console.log('El mes de Septiembre tiene 30 días');
//         break;
//     case askedMonth === 10:
//         console.log('El mes de Octubre tiene 31 días');
//         break;
//     case askedMonth === 11:
//         console.log('El mes de Noviembre tiene 30 días');
//         break;
//     case askedMonth === 12:
//         console.log('El mes de Diciembre tiene 31 días');
//         break;
//     default:
//         console.log('No corresponde a un mes');
//         break;
// }

if (askedMonth === 1) {
    console.log('El mes de Enero tiene 31 días');
} else if (askedMonth === 2) {
    console.log('El mes de Febrero tiene 28 días');
} else if (askedMonth === 3) {
    console.log('El mes de Marzo tiene 31 días');
} else if (askedMonth === 4) {
    console.log('El mes de Abril tiene 30 días');
} else if (askedMonth === 5) {
    console.log('El mes de Mayo tiene 31 días');
} else if (askedMonth === 6) {
    console.log('El mes de Junio tiene 30 días');
} else if (askedMonth === 7) {
    console.log('El mes de Julio tiene 31 días');
} else if (askedMonth === 8) {
    console.log('El mes de Agosto tiene 31 días');
} else if (askedMonth === 9) {
    console.log('El mes de Septiembre tiene 30 días');
} else if (askedMonth === 10) {
    console.log('El mes de Octubre tiene 31 días');
} else if (askedMonth === 11) {
    console.log('El mes de Noviembre tiene 30 días');
} else if (askedMonth === 12) {
    console.log('El mes de Diciembre tiene 31 días');
} else {
    console.log('No corresponde a un mes');
}
