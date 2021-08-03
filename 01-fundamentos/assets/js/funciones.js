function saludar(nombre) {
    //todas las funciones TRADICIONALES tienen 
    //un objeto implicito llamado arguments
    console.log(arguments)
    console.log('Hola ' + nombre);
    return 1;
    //esto nunca se va a ejecutar porque esta despues el return
    console.log('Soy un codigo que esta despues del return');
}

// funcion anonima
const saludar2 = function(nombre) {
        console.log('Hola ' + nombre);
    }
    // saludar();
    // saludar();
const retornoSaludar = saludar('Sonia', 40, true, 'Costa Rica');
console.log(retornoSaludar);

saludar2('Sonia');

// funcion de flecha
const saludarFlecha = () => {
    console.log('Hola flecha');
}

//los parentesis de los argumentos son opcionales
const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre)
}

saludarFlecha();
saludarFlecha2('Melisa');

function sumar(a, b) {
    return a + b;
}

const sumar2 = (a, b) => {
    return a + b;
}

//resumiendo funcion de flecha cuando solo hay una linea y es el return:
const sumar3 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}

// funcion de flecha sin llaves para aleatorio
const getAletorio2 = () => Math.random();

console.log(sumar(1, 3));

console.log(sumar2(5, 3));

console.log(sumar3(1, 3));

//console.log(getAleatorio());

console.log(getAletorio2());