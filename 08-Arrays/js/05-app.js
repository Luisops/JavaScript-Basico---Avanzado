// Supongamos que creamos un carrito de compras desde la consola, más adelante lo haremos ya desde una interfaz web.
const carrito =[];

// Añadir un elemento al carrito...
//Definir un producto 
const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}
// Añadir al Inicio del carrito...
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
carrito.unshift(product3);

// Existen otras formas más modernas de hacerlo... pero esta sintaxis aún se utiliza mucho asi que veamos como hacerlo en el proximo video

console.table(carrito);




