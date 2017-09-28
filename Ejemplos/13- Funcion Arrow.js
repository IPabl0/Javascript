//Funcion ARROW
console.log("Funcion Arrow");
//Es una nueva forma de escribir funciones
//Este tipo de funciones carece con el objeto de argumentos
//no es posible utilizar SPREAD o REST

//Vieja forma
console.log("Vieja Forma \n");
var suma = function(numA, numB){
    return numA + numB;
}
console.log(suma(5,6));

//Nueva Forma
var resta = (numC , numD) => numC - numD;
console.log(resta(19,10));