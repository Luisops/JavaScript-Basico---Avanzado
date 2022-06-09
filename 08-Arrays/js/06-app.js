// Veamos como añadir un elemento a un arreglo utilizando el Spread Operator o Rest Operator...
const carrito =[];

//Definir un producto 
// Añadir un elemento al carrito...
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
// Para añadir producto al arreglo simplemente agregamos...
//AGREGAR FUNCIONES DECLARATIVAS NO MODIFICA
let resultado ;
resultado = [...carrito,producto];
resultado = [...resultado, producto2];
// Para añadir al inicio...
resultado = [product4, ...resultado];
//Esta forma se conoce más como Declarativa mientras que la del video anterior es más imperativa, ambas son muy utilizadas en programación JavaScript

console.table(resultado);




