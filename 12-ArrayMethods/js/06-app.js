const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//obligatoriamente todos tienen que cumplir la condición AND con el array function .every
const resultado = carrito.every(producto => producto.precio < 500);
console.log(resultado); //false

//no te obliga a cumplir todos todos la condicion OR con el array .some 
const resultado2 = carrito.some(producto => producto.precio < 500);
console.log(resultado2);//true