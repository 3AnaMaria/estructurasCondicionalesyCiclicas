//2.Leer 5 notas de un estudiante, calcular el promedio e indicar si está aprobado o suspendido.
alert('Vamos a calcular el promedio del estudiante y determinar si aprobó o suspendió, por favor recuerde que el sistema de calificación es de 1 a 5 y para aprobar necesita una nota superior a 3');
const mathGrade = parseInt(prompt('Ingrese la nota obtenida en Matematicas'));
const geographyGrade = parseInt(prompt('Ingrese la nota obtenida en Geografía'));
const artGrade = parseInt(prompt('Ingrese la nota obtenida en Artes'));
const biologyGrade = parseInt(prompt('Ingrese la nota obtenida en Biología'));
const philosophyGrade = parseInt(prompt('Ingrese la nota obtenida en Filosofía'));

// No me queda claro en que casos usar let y en que otros const

let average = (mathGrade + geographyGrade + artGrade + biologyGrade + philosophyGrade) / 5;

console.log('El promedio es ',average);

// if(average>3){
//     console.log('El estudiante aprobó');
// }else{
//     console.log('El estudiante suspendió');
// }

switch (true) {
    case average<3:
        console.log('El estudiante suspendió');
        break;
    default:
        console.log('El estudiante aprobó');
        break;
}