//Funciones
//Empaquetan codigo para hacerlo reutilizable des otras partes de codigo
console.log("Funciones");

//el tope de parametros que recibe una funcion es de 255 parametros
function sayHello (name){
    console.log(`Hola ${name}, como estas?`);
}

//En javascript existen funciones anonimas
var sayHi = function(name){
    console.log(`Hola que pasa ${name}`);
}

sayHello("Pablo");
sayHi("Naty");

//Retornan valor
var suma = function (numA, numB){
    return numA + numB;
}

console.log(`El resultado de la suma es: ${suma(4,7)}`);