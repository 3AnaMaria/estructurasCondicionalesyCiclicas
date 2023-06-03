//alert('sí está funcionando');
//1.Solicitar 2 números e indicar cual es el mayor o si son iguales

alert('Vamos a indicar entre dos números cuales es mayor o si son iguales');
const numberOne = parseInt(prompt('Ingrese el primer número a calcular'));
const numberTwo = parseInt(prompt('Ingrese el segundo número a calcular'));

// if (numberOne>numberTwo){
//     console.log(numberOne + ' es mayor que ' + numberTwo);
// }else if(numberTwo>numberOne){
//     console.log(numberTwo + ' es mayor que ' + numberOne);
// }else if(numberOne===numberTwo){
//     console.log(numberOne + ' es igual ' + numberTwo);
// }

//¿Es necesario colocar una última condición else?
switch (true) {
    case numberOne > numberTwo:
        console.log(numberOne + ' es mayor que ' + numberTwo);
        break;
    case numberTwo > numberOne:
        console.log(numberTwo + ' es mayor que ' + numberOne);
        break;
    case numberOne===numberTwo:
        console.log(numberOne + ' es igual ' + numberTwo);
        break;
}

//¿Es necesario colocar un default?