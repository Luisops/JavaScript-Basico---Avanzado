// En este video veremos lo que son los métodos de propiedad, es decir son funciones con una sintaxis similar a las de un método..

// también llegan a ser muy comunes sobretodo porque es un objeto grande con todas las funciones...
//METODOS DE PROPIEDADES - ANADIR FUNCIONAES A UN OBJETO
const reproductor = {
        reproducir: function(id){
            console.log(`Reproduciendo una cancion ${id}`);
        },
        pausar: function(){
            console.log('pausando.....');
        },
        borrar:function(id){
            console.log(`borrando cancion ${id}`);
        },
        crearPlaylist:function(nombre){
            console.log(`Creando la playlist de ${nombre}`);
        },
        reproducirPlaylist:function(nombre){
            console.log(`Reproduciendo la playlist de ${nombre}`);
        }
}

reproductor.reproducir(30);
reproductor.pausar();
// Tambien los métodos pueden quedarse por fuera
// reproductor.borrar = function(id) {
    
// }
reproductor.borrar(30);
reproductor.crearPlaylist("metal");
reproductor.reproducirPlaylist("Rock 90s");