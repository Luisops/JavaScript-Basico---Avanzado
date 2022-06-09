const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//COMPROBAR SI UN VALOR EXISTE EN UN ARREGLO -- pregunta de entrevista
// meses.forEach(
//     mes => {
//         if (mes === 'Enero') {
//             console.log("Si exisste Enero");
//         }
//     }
// )

// let m = meses.includes('Enero');
// console.log(m);

//.include solo se usa en arreglo tradicionales q' solo tiene su indice
//.some se usa en arrgle con objetos y se puede usar tambien en arreglos tradicionales
let compras = carrito.some(producto => producto.nombre === 'Monitor 27 Pulgadas');
console.log(compras);