// 5.Realizar un ejercicio con encadenamiento de if/else mínimo 3 encadenamientos, lógica aritmética, 
// ciclos for o while y solicitud de datos y respuestas por consola.
// •Ej: Programa que solicite cantidad de productos a comprar, solicitar la cantidad de veces 
// indicadas el nombre y precio de cada producto. Si el producto cuesta más de 5000 pesos, lleva 
// descuento del 5%, si cuesta más de 10000 lleva descuento del 10% y si cuesta más de 20000 lleva 
// descuento del 20%. Mostrar la lista de productos, con el subtotal y total a pagar.

alert('mercado y descuento');

const amountProducts = parseInt(prompt('Por favor indique la cantidad de productos a ingresar'));
let subTotal = 0;
let total = 0;

for(let i = 1 ; i <=  amountProducts; i ++){
    const product = prompt('Ingrese el nombre del producto No. ' + i);
    const valueProduct = parseInt(prompt('Ingrese el valor del producto No. ' + i));
    let discount;
    if(valueProduct > 20000){
        discount = 0.2;
    }else if(valueProduct > 10000){
        discount = 0.1;
    }else if(valueProduct > 5000){
        discount = 0;
    }
    const valueDiscount = (valueProduct - (valueProduct * discount));
    console.log('El producto No. ' + i + ' es: ' + product + 'tiene un precio de: $'+ valueProduct + ' y un valor con descuento de: $' + valueDiscount);
}