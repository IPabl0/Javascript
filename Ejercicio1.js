
var numeros = new Array (3,4,5,6,7,5);

//Declaramos una variable para acumular 
//el resultado de la suma 
var acu = 0;

for (var numero of numeros){
acu = numero + acu;
};

console.log (numeros);

console.log(acu);
