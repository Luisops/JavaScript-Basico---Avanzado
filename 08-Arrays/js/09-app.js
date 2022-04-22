const carrito = [
    { nombre: 'Television', precio: 1000},
    { nombre: 'Moto', precio: 3000},
    { nombre: 'Auto', precio: 4000},
    { nombre: 'Radio', precio: 2000},
    { nombre: 'Celular', precio: 300},
]

// for (let i = 0; i <= carrito.length; i++){
//     console.log(`Nombre: ${carrito[i].nombre } - Precio: ${carrito[i].precio }` );
// }



//ITERACION
carrito.forEach( function(producto) {
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio }` );
})