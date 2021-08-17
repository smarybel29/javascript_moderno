const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negacion');
console.log(true); //true
console.log(!true); //false
console.log(!false); //true
console.log(!regresaFalse()); // true

console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); //false
console.log('4 asignaciones', true && true && true && false);


console.log('================');
console.log(regresaFalse() && regresaTrue()); //solo regresa el false porque ya no sigue evaluando despues del and
console.log(regresaTrue() && regresaFalse());

console.warn('OR');
console.log(true || false);
console.log(false || false);
console.log(regresaTrue() || regresaFalse());
console.log('4 asignaciones', true || true || true || false);

console.warn('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
//este es el uso del and en las asignaciones
const a1 = false && 'Hola mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;
console.log({ a1, a2, a3, a4, a5 });