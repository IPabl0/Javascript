//SETS o conjuntos
//conjunto de valores que pueden iterarse cada valor contenido es unico

console.log("Sets o conjuntos");

var dogs = new Set();
dogs.add("pug");
dogs.add("salchicha");
dogs.add("kiltro");

console.log(dogs);
console.log(dogs.has("kiltro"));

console.log("Tamaño del conjunto: ");
console.log(dogs.size)

console.log("Set No acepta valores repetidos ver codigo");
dogs.add("pug");
console.log(dogs);
console.log(dogs.size);

console.log("borramos un elemento del conjunto con delete");
dogs.delete("kiltro");
console.log(dogs);
console.log(dogs.size);