function crearPersona(nombre, apellido) {
    //ecma script 6 permite regresarlo asi si el atributo es igual que la variable
    return {
        nombre,
        apellido
    }
    //lo anterior es igual a esto
    /*return {
        nombre: nombre,
        apellido: apellido
    }*/
}

//los segundos parentesis indican que todo lo de adentro lo quiero regresar como un objeto
const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });
const persona2 = crearPersona2('Soni', 'Pena');
const persona = crearPersona('Sonia', 'Peña');
console.log(persona);

console.log(persona2);

//solo las funciones tradicionales tienen el argument
function imprimeArgumentos() {
    console.log(arguments);
}

//esto marca error porque las funciones de flecha 
//no tiene el objeto de argumentos
/*const imprimeArgumentos2 = () => {
    console.log(arguments);
}*/

//esta seria la forma correcta de recuperar los argumentos
//se llama parametro rest
const imprimeArgumentos2 = (edad, ...args) => {
    //si hay un parametro antes del rest
    // console.log({edad, args});
    return args;
}


//imprimeArgumentos(10, true, false, 'Fernando', 'Hola');

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');

console.log({ casado, vivo, nombre, saludo });

const { apellido: NuevoApellido } = crearPersona2('Fernando', 'Herrera');
console.log({ NuevoApellido });

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    //edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

/*const imprimePropiedades = (personaje) => {
    console.log(personaje.nombre);
    console.log(personaje.codeName);
    console.log(personaje.vivo);
    console.log(personaje.edad);
    console.log(personaje.trajes);
}*/

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

console.log(imprimePropiedades(tony));