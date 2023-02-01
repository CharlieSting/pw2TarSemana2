// persona 
var Persona = require('./persona');

const persona1 = new Persona('Luke', 'Skywalker', [], 25, 1);
const persona2 = new Persona('Leia', 'Organa', [], 18, 2);
const persona3 = new Persona('vladmir', 'Putin', [], 35, 3);

var lstPersonas=[];
lstPersonas.push(persona1);
lstPersonas.push(persona2);
lstPersonas.push(persona3);

// filtrar persona por apellido
var personaApellido=lstPersonas.find((persona) => persona.apellido === 'Putin');
console.log(personaApellido);

// delete persona por nombre
lstPersonas = lstPersonas.filter((persona) => persona.nombre !== 'Leia');
console.log(lstPersonas);

// libro
var Libro=require('./libro');

const libro1 = new Libro('El señor de los anillos', 'J.R.R. Tolkien', 'Minotauro', '978-84-450-0000-0', 'Fantasia', 2090, 10);
const libro2 = new Libro('El principito', 'Antoine de Saint-Exupéry', 'Minotauro', '123-84-450-2500-0', 'Fantasia', 250, 87);



var lstLibros=[];
lstLibros.push(libro1);
lstLibros.push(libro2);

// filrar libros por genero
var librosFantasia=lstLibros.filter((libro) => libro.genero === 'Fantasia');
console.log(librosFantasia);

// delete libro por ISVN
lstLibros = lstLibros.filter((libro) => libro.ISBN !== '123-84-450-2500-0');
console.log(lstLibros);

// consola
var Consola=require('./consola');

const consola1 = new Consola('Xbox', 'Microsoft', '2013', 500);
const consola2 = new Consola('Playstation', 'Sony', '2015', 600);
const consola3= new Consola('Nintendo', 'Switch', '2017', 700);

var lstConsolas=[];
lstConsolas.push(consola1);
lstConsolas.push(consola2);
lstConsolas.push(consola3);

// filtrar consola por nombre
var consolaNintendo=lstConsolas.find((consola) => consola.nombre === 'Nintendo');
console.log(consolaNintendo);

// delete consola por nombre
lstConsolas = lstConsolas.filter((consola) => consola.nombre !== 'Xbox');
console.log(lstConsolas);

// pelicula
var Pelicula=require('./pelicula');

const pelicula1 = new Pelicula('El señor de los anillos', 290, 'Donald Trump' , 'Fantasia');
const pelicula3= new Pelicula('Soldado Ryan', 123, 'Steven Spielberg', 'Guerra');

var lstPeliculas=[];
lstPeliculas.push(pelicula1);
lstPeliculas.push(pelicula3);

// filtrar pelicula por genero
var peliculasGuerra=lstPeliculas.filter((pelicula) => pelicula.genero === 'Guerra');
console.log(peliculasGuerra);

// delete pelicula por nombre genero
lstPeliculas = lstPeliculas.filter((pelicula) => pelicula.genero !== 'Fantasia');
console.log(lstPeliculas);



