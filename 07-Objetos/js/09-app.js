//te muestra las buenas practicas y va ser estricto en todo el codigo
"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}
//nO SE PUEDE ELIMINAR Y AGREGAR ,PERO SI SE PUEDE MODIFICAR LAS EXISTENTES
Object.seal(producto);

producto.disponible = false;
//producto.imagen = "imagen.png";
//delete producto.precio;

console.log(producto);
//SI EL OBJETO ES CONGELADO O NO?
console.log(Object.isSealed(producto));