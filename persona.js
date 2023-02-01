class Persona {
    nombre=''
    apellido=''
    nombreCompleto= ''
    direccion=''
    telefono=''
    referencias=[]
    edad=0
    pasosCaminados= 0
    id= 0

    constructor(nombre, apellido, referencias, edad, id){
        this.nombre = nombre
        this.apellido = apellido
        this.referencias = referencias
        this.nombreCompleto = this.nombre + ' ' + this.apellido
        this.edad = edad
        this.id = id
    }

    saludar(){
        console.log("Hola, mi nombre es ", this.nombreCompleto)
    }

    caminar(cantidadPasos){
        this.pasosCaminados = this.pasosCaminados + cantidadPasos
        //this.nombreCompleto + " Ha caminado " + this.pasosCaminados + " pasos"
        console.log(`${this.nombreCompleto} ha caminado ${this.pasosCaminados} pasos`)
        //backtick
    }

}

module.exports = Persona