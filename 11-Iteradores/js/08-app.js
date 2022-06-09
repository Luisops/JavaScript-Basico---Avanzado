//for ...in
//LA DIFERENCIA ES QUE EL "FOR ...OF" ITERA SOBRE ARREGLOS MIENTRAS EL "FOR ...IN" ITERA SOBRE OBJETOS
const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for (cadaAutomovil in automovil ){
   console.log(`${automovil[cadaAutomovil]}`);
   //console.log(cadaAutomovil);
}