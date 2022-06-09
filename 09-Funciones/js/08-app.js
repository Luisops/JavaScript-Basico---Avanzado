// Funciones que retornan valores

// Actualmente hemos tenido funciones que envian datos a la consola, ya cuando veamos la parte del DOM algunas funciones van a validar formularios y seguramente ejecutaran todo el código ahí, pero también tendremos funciones que retornan valores para pasarlos hacia otras funciones o hacer algo más...

//FUNCIONES QUE RETORNA VALORES
function sumar(a,b){
    return a + b;
}

const resultado = sumar(1,4);

console.log("la suma es :"+resultado);

//EJEMPLO MAS AVANZADO

let total = 0;
function agregarCarrito(precio){
        return total += precio;
};

function calcularImpuesto(total){
        return total * 1.15;
};


total = agregarCarrito(300);
const totalPagar = calcularImpuesto(total);

console.log(total);
console.log(`El total a pagar es de ${totalPagar}`);


