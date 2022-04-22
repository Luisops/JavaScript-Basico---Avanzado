const carrito = [
    { nombre: 'Television', precio: 1000},
    { nombre: 'Moto', precio: 3000},
    { nombre: 'Auto', precio: 4000},
    { nombre: 'Radio', precio: 2000},
    { nombre: 'Celular', precio: 300},
]

//MAP ITERACION
const producto1 = carrito.map( function(producto) {
    return `Nombre: ${producto.nombre} - Precio: ${producto.precio }`;
})

//FORACH ITERACION
const producto2 = carrito.forEach( function(producto) {
    return `Nombre: ${producto.nombre} - Precio: ${producto.precio }`;
})
    
console.log(producto1);
console.log(producto2);

