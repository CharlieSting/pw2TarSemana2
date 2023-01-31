class Libro{
    nombre=''
    autor=''
    editorial=''
    ISVN=''
    genero=''
    precio=0
    cantidad=0

    constructor(nombre, autor, editorial, ISVN, genero, precio, cantidad){
        this.nombre = nombre
        this.autor = autor
        this.editorial = editorial
        this.ISVN = ISVN
        this.genero = genero
        this.precio = precio
        this.cantidad = cantidad
    }

    nombreLibros(){
        console.log("Libros que tenemos disponibles por nombre"+this.nombre+" con autor:"+this.autor
        +"genero:"+this.genero);
    }
}

module.exports = Libro