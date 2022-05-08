const reproductor = {
    cancion: '',
    reproducir: (id) => console.log(`Reproduciendo una cancion ${id}`),
    pausar: () => console.log('pausando.....'),
    borrar: id => console.log(`borrando cancion ${id}`),
    crearPlaylist:nombre => console.log(`Creando la playlist de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist de ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Anadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Marcot Wiit';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("metal");
reproductor.reproducirPlaylist("Rock 90s");