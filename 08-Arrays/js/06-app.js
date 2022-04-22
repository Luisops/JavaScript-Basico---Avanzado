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
//AGREGAR FUNCIONES DECLARATIVAS NO MODIFICA
let resultado ;
resultado = [...carrito,producto];
resultado = [...resultado, producto2];
resultado = [product4, ...resultado];

console.table(resultado);




