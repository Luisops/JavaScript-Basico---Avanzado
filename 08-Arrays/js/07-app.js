const carrito =[];

//Definir un producto 
const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}
const product3 = {
    nombre: "Teclado",
    precio: 700
}
const product4 = {
    nombre: "Monitor de 120 pulgadas",
    precio: 1200
}
//FORMA IMPERATIVA
//.push agrega al final de un arreglo
carrito.push(producto);
carrito.push(producto2);
carrito.push(product3);
//carrito.unshift(product3);


// console.table(carrito);
// //ELIMINAR ULTIMO ELEMENTO DEL ARREGLO
// carrito.pop();
// console.table(carrito);

// //ELIMINAR DEL INICION DEL ARREGLO
// carrito.shift();
// console.table(carrito);

//@@@@@(posicion,cantidad elmentos a eliminar)@@@@@
carrito.splice(1,2);
console.table(carrito);

