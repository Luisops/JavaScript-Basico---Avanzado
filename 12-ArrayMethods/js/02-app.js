const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// meses.forEach( (meses,i) => {
//     if (meses === 'Abril'){
//         console.log(`Encontrado en el indice ${i}`);
//     }
// })

//ENONTRAR EL INDICE DE ABRIL
const indice = meses.findIndex( mes => mes === 'Abril');
console.log(indice)

// FindIndex te dirá el indice es decir la ubicación del elemento en el arreglo...
//ENCONTRAR UN INDICE DE UN ARREGLO DE OBJETOS
const productos = carrito.findIndex( producto =>  producto.precio === 700 );
console.log(productos)