/**
 * // Funciones que toman parametros y argumentos...

// Nuestra primera función no tiene nada de emocionante, es demasiado simple, para que tus funciones puedan ser más versatiles e inteligentes deberán utilizar parametros y argumentos


function saludar(nombre, apellido) { // nombre y apellido son parametros, son valores que se le pueden pasar a la función... Los valores digamos no son reales, pues son variables...
    console.log( `Hola ${nombre}  ${apellido} ` );
}
saludar('Juan', 'De la torre'); // Pablo y De la torre son argumentos, son los valores reales...

saludar();

 */
function sumar(a,b){ //SON PARAMETROS 
    console.log(a + b);
}

sumar(3,3);//SON ARGUMENTOS

function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Luis','Fernando');
saludar('Luis',);
saludar();