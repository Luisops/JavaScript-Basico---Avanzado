//te muestra las buenas practicas y va ser estricto en todo el codigo
"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}
//Congelar un objeto en especifico
Object.freeze(producto);

//producto.disponible = false;

console.log(producto);
//SI EL OBJETO ES CONGELADO O NO?
console.log(Object.isFrozen(producto));