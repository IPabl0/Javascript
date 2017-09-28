/*
Ciclo FOR
*/
console.log("Ciclo For");
for (var i = 0;i < 100; i++)
    {
    console.log(`El valor de i es : ${i}`);
    }

//Ciclo For of
console.log("Ciclo For of");
//Sirve para recorrer colecciones de inicio a fin 
//Arrays, Map conjuntos etc

var frameworks = new Array ("Rails", "Node", "Lavarel");

for (let framework of frameworks){
    console.log(framework);
}

//Ciclo While
console.log("Ciclop While");
//Ciclo iterativo que se repite mientras se cumpla una condicion

var age = 1;
while(age < 20){
    console.log(`Hola mi edad es: ${age}`);
    age++;
}

//Ciclo Do While
console.log("Ciclo Do While");
//Do While evalua al menos una vez ya que la condicion de cierre se evalua al final

//Ver la diferencia cambiando el valor inicial de péts
var pets = 0;

do{
console.log (`Hola tengo ${pets} mascotas`);
pets++;
}while(pets < 5)
console.log(pets);