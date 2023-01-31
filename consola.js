class Consola{
    nombre=''
    marca= ''
    modelo= ''
    precio= 0

    constructor(nombre, marca, modelo, precio){
        this.nombre = nombre
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
    }

    nombreConsola(){
        console.log("Consola que tenemos disponibles por nombre"+this.nombre+" con marca:"+this.marca
        +"modelo:"+this.modelo);
    }


}
module.exports = Consola