// Un objeto puede contener cualquier tipo de dato dentro de el, incluso puede tener otros objetos:, esto se le conoce como Objetos anidados.
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