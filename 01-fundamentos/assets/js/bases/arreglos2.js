let juegos = ['zelda', 'mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo })

juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr })
})

let nuevaLongitud = juegos.push('Kirby');
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift('Bomberman');
console.log({ nuevaLongitud, juegos });

let borrado = juegos.pop();
console.log({ borrado, juegos });

let pos = 1;

let juegosEliminados = juegos.splice(pos, 2);
console.log({ juegosEliminados, juegos })

let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex);