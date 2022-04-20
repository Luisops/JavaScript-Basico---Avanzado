
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        //THIS LO QUE HAC E ES NO BUSCAR LO DE AFUERA SINO BUSCAR EL OBJETO SUS ATRIBUTOS
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}


const producto2 = {
    nombre: "Monitor 45 Pulgadas",
    precio: 3500,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();
