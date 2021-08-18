const carros = ['ford', 'mazda', 'honda', 'kia'];

let i = 0
    //tratar de que la condicion sea siempre verdadera
    // while (i < carros.length) {
    //     console.log(carros[i]);
    //     i++;
    // }

//undefined
//null
//false
console.warn('While');
while (carros[i]) {
    if (i === 1) {
        // break;
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}

//va ejecutar el ciclo al menos una vez
console.warn('Do while');
let j = 10;
do {
    console.log(carros[j]);
    j++;
} while (carros[j]);