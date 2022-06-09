//.foreach y .map UNA DE LAS DIFERENCIAS ES QUE EL MAP PUEDE ENCADENAR OTROS METODOS MIENTRAS QUE EL FOREACH NO
//OTRA DIFERENCIA EL MAP PUEDE CREAR UNA VARIABLE, EL FOREACH NO PERMITE CREAR UNA VARIABLE 
/** foreach
 * const exampleArray1 = [5, 4, 3, 2, 1]
console.log(exampleArray.forEach(x => x * x * x).sort(function(a, b) {
    return a - b
}));
*/

//MAP
/** 
 * const exampleArray = [5, 4, 3, 2, 1]
console.log(exampleArray.map(x => x * x * x).sort(function(a, b) {
    return a - b
}));
*/

const carrito = [
    { nombre: 'Television', precio: 1000},
    { nombre: 'Moto', precio: 3000},
    { nombre: 'Auto', precio: 4000},
    { nombre: 'Radio', precio: 2000},
    { nombre: 'Celular', precio: 300},
]
//carrito.forEach( (producto,indice) => console.log(`${indice} : ${producto.nombre} , ${producto.precio}`))
//let carro = carrito.forEach( producto => producto.nombre)

let carro = carrito.map( producto => producto.nombre/**itenrando...  */)
console.log(carro);
// let carro = carrito.map( (car) => car.nombre );
