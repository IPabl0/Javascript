//Estructura de datos 
//MAP o MAPA

console.log("Estructura de datos MAP Clave - Valor \n");

var car = new Map();

//asigancion propiedades
car.set ("marca", "Lotus");
car.set ("name", "spider");
car.set ("color", "Amarillo");

console.log (car);
console.log("");
console.log(car.get("marca"));
console.log("");
//Preguntamos si existe propiedad con en nuestro map con has
console.log(car.has("marca"));
//Eliminamos propiedad
car.delete("marca");
console.log(car.has("brand"));
console.log("");
console.log(car);