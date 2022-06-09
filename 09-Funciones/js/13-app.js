// Arrow functions en métodos de propiedad
const reproductor = {
    cancion: '',
    reproducir: (id) => console.log(`Reproduciendo una cancion ${id}`),
    pausar: () => console.log('pausando.....'),
    borrar: id => console.log(`borrando cancion ${id}`),
    crearPlaylist:nombre => console.log(`Creando la playlist de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist de ${nombre}`),

    // También existen los Set y Get si tienes experiencia con esos términos, y si no, set es para añadir un valor, get es para obtenerlo...

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Anadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}
// Probando set y get se utilizando de la siguiente forma
reproductor.nuevaCancion = 'Marcot Wiit';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();
// Tambien los métodos pueden quedarse por fuera
// reproductor.borrar = function(id) {
    
// }
reproductor.borrar(30);
reproductor.crearPlaylist("metal");
reproductor.reproducirPlaylist("Rock 90s");