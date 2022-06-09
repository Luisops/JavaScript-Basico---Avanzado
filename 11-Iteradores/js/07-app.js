//for ...of
//arreglo
const carrito = [
    { nombre: 'Television', precio: 1000},
    { nombre: 'Moto', precio: 3000},
    { nombre: 'Auto', precio: 4000},
    { nombre: 'Radio', precio: 2000},
    { nombre: 'Celular', precio: 300},
]

for( let producto of carrito){
    console.log(producto.nombre);
}