const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}
//DESTRUCTURING OF OBJECTS
const {nombre, precio, disponible,noExite} = producto; 
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(noExite);