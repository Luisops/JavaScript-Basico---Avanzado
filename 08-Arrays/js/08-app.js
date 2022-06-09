// Array Destructuring - Al igual que los objetos algunas veces quieres crear la variable y el valor del arreglo, veamos algunos ejemplos:
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}
//DESTRUCTURING OF OBJECTS
const {nombre, precio, disponible,noExite} = producto; 

console.log(nombre);

//DESCTRUTURING CON ARREGLOS
const numeros = [10,20,30,40,50];

// Si quieres saltarte un valor, pon una coma....

// ahora, como extraes todos los otros valores, digamos que solo quieres crear la primer variable, mantener el arreglo original..

const [primero,,,...cuarta] = numeros;

console.log(primero);
console.log(cuarta);