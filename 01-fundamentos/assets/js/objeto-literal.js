const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880,90265',
        ubicacion: 'Malibu, California'
    },
    //este caso aplica cuando queremos espacio o guion medio, 
    //se pone la propiedad como string
    'ultima-pelicula': 'Infinity War',
};

console.log(personaje);

console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coords', personaje.coords);
console.log('Lat', personaje.coords.lat);
console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length - 1]);
const x = 'vivo';
console.log('Vivo', personaje[x]);
//con el nombre como string no se puede usar la notacion de punto sino solo entre corchetes
console.log('Ultima pelicula', personaje['ultima-pelicula']);

// Mas detalles

//delete properties
delete personaje.edad;
console.log(personaje);

personaje.casado = true;
// obtain keypair entries
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// esto no es valido porque es constante, no puedo cambiar su valor pero si puedo
//trabajar con funciones del objeto en si
//personaje = true;

console.log(personaje);
//esto si bloquea todos los metodos del objeto personaje
Object.freeze(personaje);

personaje.dinero = 10021231212121;
personaje.casado = false;

//esto si se puede porque Object.freeze congela las asignaciones directas 
//pero no a los objetos dentro
personaje.direccion.ubicacion = 'costa rica';
console.log(personaje);

//listado de propiedades
const propiedades = Object.getOwnPropertyNames(personaje);
//listado de valores
const valores = Object.values(personaje);
console.log(propiedades, valores);