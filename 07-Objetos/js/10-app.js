const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso : '1kg',
    medida: '1m'
}
//JUNTAR DOS OBJETS ASIGNANDO A UNA VARIABLE
const resultado = Object.assign(producto,medidas);
//const resultado2 = {...producto,...medidas};

console.log(resultado);
//console.log(resultado2);