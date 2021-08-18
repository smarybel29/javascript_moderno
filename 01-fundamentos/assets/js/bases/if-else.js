let a = 6;
if (a >= 10) {
    console.log('a es mayor o igual que 10');
} else {
    console.log('a es menor a 10')
}

//console.log('Fin del programa');

const hoy = new Date(); //{}
let dia = hoy.getDay(); //0:domingo, 1:lunes...
console.log({ dia });

if (dia === 0) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
    // if (dia === 1) {
    // console.log('Es lunes');
    // } else {
    // console.log('no es lunes ni domingo');
    // }

} else if (dia === 2) {
    console.log('Martes');
}

//sin usar if else o switch, unicamente objetos

dia = 5;

const diaLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}

console.log(diaLetras[dia] || 'Dia no definido');