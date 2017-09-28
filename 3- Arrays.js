//ARRAYS
console.log(`Arrays \n`);

var miArray = new Array();
var miArray2 = new Array(`uno`,`dos`,`tres`);

//agregar y quitar elementos
console.log("Primero vemos el contenido de los dos arrays \n");
console.log(`Primer Array ${miArray} \n`);
console.log(`Segundo Array ${miArray2} \n`);

//Numero de elementos length
console.log("Numero de elementos \n");
console.log(`Primer Array ${miArray.length} \n`);
console.log(`Segundo Array ${miArray2.length} \n`);


//Ordenamos los ARRAY con sort
console.log("Ordenamos el contenido alfabeticamente \n");
miArray.sort();
miArray2.sort();
console.log("Vemos el contenido de los dos arrays \n");
console.log(`Primer Array ${miArray} \n`);
console.log(`Segundo Array ${miArray2} \n`);


//Agregamos elementos
console.log("Agregamos elemetos con el metodo push");
miArray.push(`Cuatro`);
miArray2.push (`One`);

console.log("contenido de los dos arrays luego de agregar\n");
console.log(`miArray ${miArray} \n`);
console.log(`miArray2 ${miArray2} \n`);
 
//Quitamos elemento
console.log(`Quitamos el ultimo elemetos con el metodo pop \n`);
miArray2.pop();
console.log("Quitamos el primer elemetos con el metodo shift \n");
miArray2.shift ();

console.log("contenido de miArray luego de usar pop y shift para quitar elementos \n");
console.log(`miArray2 ${miArray2} \n`);
console.log("");
console.log("");