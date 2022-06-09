const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
// Filter va a crearte un arreglo basado en un parametro que es evaluado..
let resultado;
//resultado = carrito.filter(producto => producto.precio > 400);// Todos los mayores a 400 - añadir  && producto.precio < 600
//resultado = carrito.filter(producto => producto.precio < 600);
//resultado = carrito.filter(producto => producto.nombre != 'Teclado');// Todos menos la laptop
resultado = carrito.filter(producto => producto.precio === 100);
console.log(resultado);
// Filter es en mi opinión el más util y el más utilizado!