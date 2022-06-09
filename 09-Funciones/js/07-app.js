// Como se comunican las funciones entre si...

// Tus funciones se van a comunicar, en lugar de tener una gran función con 800 lineas es recomendable dividirla en pequeñas partes, realizan una operación y se van hacia la otra función...

//COMO SE COMUNICA ENTRE FUNCIONES
iniciarApp();

function iniciarApp(){
    console.log('Iniciando app...');
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Luis');
}

function usuarioAutenticado(nombre){
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario Autenticado Exitosamente: ${nombre}`);
}