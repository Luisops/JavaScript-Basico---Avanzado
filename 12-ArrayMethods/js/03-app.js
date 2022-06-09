// Si buscas la definición de que es una función reduce te dirá que es una función reductora...

// Pero basicamente es tomar una gran cantidad de datos y entregar un resultado..

// Supongamos que tenemos nuestro carrito de compras y queremos decirle al usuario cuanto es el total a pagar...

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//con un foreach
let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total);

// Puedes ver que si bien no se ve mal, podemos tenerlo todo en una sola linea con un .reduce
//con un reduce
let resultado = carrito.reduce( (valorPrevio, valorActual) => valorPrevio + valorActual.precio, 0);//0 es el inicio
console.log(resultado);

