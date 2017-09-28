//Destructuring assignment
//Opcion de javascript para asignar una estructura completa en una sentencia
console.log("Destructuring assignment");
console.log("Sin destructuring");
var animals = new Array("Perro","Gato","Raton");

var perro = animals[0];
var gato = animals[1];
var raton = animals[2];

console.log(raton, gato, perro);
console.log("Con destructuring");
//Ojo con el orden de asignacion de las variables y el conbtenido del array
var [raton,gato,perro] = animals
console.log(raton, gato, perro);