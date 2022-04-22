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

const [primero,,,...cuarta] = numeros;

console.log(primero);
console.log(cuarta);