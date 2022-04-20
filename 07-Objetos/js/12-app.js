//Objtect Literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}


//Object Constructor 
function Producto(nombre,precio){
    this.nombre= nombre;
    this.precio= precio;
    this.disponible=true;
}

const producto1 = new Producto("Monitor 24 pulgadas", 2500);
console.log(producto1);


const producto2 = new Producto("Monitor 128 pulgadas", 5500);
console.log(producto2);
