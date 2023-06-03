// 3.Leer la marca de un auto, si es Ford el descuento es del 10%, si es Toyota el descuento es del 
// 5%. Indicar el valor más el total con el descuento.


alert('Vamos a averiguar cual es el descuento del carro');

const carBrand = prompt('Ingrese la marca del carro');
const carValue = parseInt(prompt('Ingrese el valor del carro'));
let discount;

// switch (carBrand) {
//     case 'Ford':
//         discount = 0.1;
//         break;
//     case 'Toyota':
//         discount = 0.05;
//         break;
//     default:
//         discount = 0;
//         break;
// }
// const finalValue = carValue - (carValue * discount);
// console.log('El carro de la marca ' + carBrand + ' que tenia un costo inicial de $ '+ carValue + ' ahora tiene un costo final de $'+ finalValue);

if (carBrand==='Ford'){
    discount =0.1;
}else if(carBrand==='Toyota'){
    discount =0.05;
}else{
    discount =0;
}
 const finalValue = carValue - (carValue * discount);
 console.log('El carro de la marca ' + carBrand + ' que tenia un costo inicial de $ '+ carValue + ' ahora tiene un costo final de $'+ finalValue);