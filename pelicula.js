class Pelicula{
    nombre=''
    duracion=0
    director=''
    genero=''
    

    constructor(nombre, duracion, director, genero){
        this.nombre = nombre
        this.duracion = duracion
        this.director = director
        this.genero = genero
       
    }

    nombrePeliculas(){
        console.log("Peliculas que tenemos disponibles por nombre"+this.nombre)
    }

}
module.exports = Pelicula