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