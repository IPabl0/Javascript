//Parametros por default
console.log("Parametros por Default");

function person (name = "N/N", age = "SIN EDAD"){
console.log(`Hola mi nombre es ${name} y mi edad es: ${age} años`);
}

person();
person("Pablo", 29);