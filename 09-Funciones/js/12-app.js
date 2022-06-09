// ForEach y Map con arrow functions...
//Arrows function ForEach y Map

const carrito = [
    { nombre: 'Television', precio: 1000},
    { nombre: 'Moto', precio: 3000},
    { nombre: 'Auto', precio: 4000},
    { nombre: 'Radio', precio: 2000},
    { nombre: 'Celular', precio: 300},
]


// const producto1 = carrito.map( function(producto) {
//     return `Nombre: ${producto.nombre} - Precio: ${producto.precio }`;
// })

//MAP ITERACION
const producto1 = carrito.map( (producto) =>  `Nombre: ${producto.nombre} - Precio: ${producto.precio }`);

// carrito.forEach( function(producto) {
//     return `Nombre: ${producto.nombre} - Precio: ${producto.precio }`;
// })

//FORACH ITERACION
carrito.forEach( producto => console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio }`));
    
console.log(producto1);
// Los arrow functions si no se coloca el return y queda en una sola linea dan por implicito el return.. en el map