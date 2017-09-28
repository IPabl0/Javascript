console.log (100+4*11)
console.log("Modulo entre 100 y 3")
console.log(100%3)

console.log("Operadores Unarios")
console.log(typeof 5.9);
console.log(typeof "Pablo");
console.log(-(10-8));

console.log("Operadores logicos");

//Comentarios de una linea

/*
OPERADOR        DESCRIPCION
==              Igual a
!=              Diferente que
<               Menor que
<=              Menor o igual que
>               Mayor que
>=              Mayor o igual que
&&              Operador and (y)
||              Operador or (o)
!               Operador Not (no)
*/

console.log("Igual que");
console.log(5 == 5);
console.log(5==3);

console.log("Diferente que");
console.log(5 != 5);
console.log(5 != 3);

console.log("Menor que");
console.log(5 < 5);
console.log(5 < 3);

console.log("Menor o igual que");
console.log(5 <= 5);
console.log(5 <= 3);

console.log("Mayor que");
console.log(5 > 5);
console.log(5 > 3);

console.log("Mayor o igual que");
console.log(5 >= 5);
console.log(5 >= 3);

console.log("Y");
console.log(true && true);
console.log(true && false);

console.log("O");
console.log(true && false);
console.log(false && false);

console.log("Negacion");
console.log(!true);
console.log(!false);

//Variables y Constantes

console.log("Variables y constantes \n");
//JS es debilmente tipado por que no requiere especificar el tipo de dato
//Decalracion Variables
var edad = 26;
var lugar = "Chile";

//Constantes
const NOMBRE = "Pablo";

console.log (`Hola mi nombre es ${NOMBRE} vivo en ${lugar} y tengo ${edad} años`);

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

//Variables de Bloque
//Diferencia con las normales
//* se declara con let y tiene un alcance limitado dentro de un if, for etc
console.log("Variables de bloque");
function suma (){
    let resultado = 5 + 6;
    console.log(`El resultado de la suma es: ${resultado}`)
}
//intentamos imprimir resultado fuera de la funcion
/*console.log(resultado);
nos da error y nos indicara que la variable resultado no esta definida*/
suma();

for (var i = 0;i < 10; i++)
{
console.log(`El valor de i es : ${i}`);
}
console.log(`El ULTIMO valor de i es : ${i}`);

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

//Parametros por default
console.log("Parametros por Default");

function person (name = "N/N", age = "SIN EDAD"){
console.log(`Hola mi nombre es ${name} y mi edad es: ${age} años`);
}

person();
person("Pablo", 29);

//Parametros spread
console.log ("Parametros Spread");

function device (type, name, brand){
    console.log(`El ${type} ${name} es de la marca ${brand}`);
}

var cellphone = new Array ("Celular","Moto G","Motorola");

//cazamos type -> celular ; name -> Moto G ; brand -> Motorola
device(...cellphone);

//Parametros REST o agrupados
console.log("Parametros REST o agrupados /n");

function hardware(...components){
    //Ojo con la variable let es distinta a la recibida o designada como 
    //parametro de la funcion
    for (let component of components){
        console.log(component);
    }

}

hardware("RAM","HDD","CPU");

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

//Clases
console.log("Clases \n");

//Crear Clases
//Define caracteristicas de los objetos
//contructor construye un objeto de una clase

class Dog{
    constructor(name,color){
        //this hace referencia a los atributos propios de la clase
        this.name = name;
        this.color = color;

    }

    //Metodos acciones de nuestro objetos
    sayGuau (){
        return "guau GUAU!!"
    }

    //Metodo Statico
    static sayMiau(){
        return("Miau MIAUU!!!")
    }
}

//instancia de clase
var dog = new Dog ("Loki","White");
//Otra Instancia
var dog2 = new Dog ("IronDog","Black");
console.log(dog, dog2.name);

//utilizamos el metodo sayguau de nuestro objeto
console.log(dog.sayGuau());

//Accedemos al metodo statico sin crear un objeto solo 
//accciendo a la clase
console.log(Dog.sayMiau());

//HERENCIA
console.log("HERENCIA \n\n");
 //suponemos una raza de perro distinta

 class Raza1perro extends Dog{
     constructor (raza, name, color){
         super(name, color);
         this.raza = raza;
         this.name = name;
         this.color = color;
     }

     sayInformation (){
         return `Hola mi nombre es ${this.name} soy de color ${this.color} y soy raza ${this.raza}`
     }

     sayGuauGuau (){
         return `${super.sayGuau()} GUUUUUUUUUAAAAAUUUUU!!!`
     }

 }

 var raza = new Raza1perro ("pug", "Peroperoo", "azul")

 console.log (raza.sayGuauGuau());

 console.log ("Accedemos a los metodos de la clase perro \n");
 console.log (raza.sayGuau());
 console.log (Raza1perro.sayMiau());


 //Getters and Setters
 console.log("Getters and Setter \n");

 class Persona {

     set name (name){
         //this._nombreVariable  hace referencia a la propiedad privada de la clase
        this._name = name;
     }

     get name (){
         return this._name;
     }
 }

 //Funcion fibonaci
 n = 20;

 function fibo (numA){
    if (numA == 0){
    return (console.log(0));
    }else{
        console.log(Math.abs((numA-1) + (numA-2)));
        fibo(numA-1);
    }
     
 }

 fibo(n);

 //Objeto String
 console.log("Object String");

 var cadena = "Esto es una cadena \n";
 var curso = "Curso de JavaScript 2015"

 console.log(cadena.repeat(5));

 console.log("metodo include de object string \n");
 console.log(curso);
 console.log("JavaScript ?");
 console.log(curso.includes("JavaScript"));
 console.log(curso.includes("j? esta en el indice 10?",10));
 
 console.log("StartWith nos analiza si nuestra cadena empieza por una cadena que designamos respondiendo V o F, curso?");
 console.log(curso.startsWith("Curso"));

 console.log("EndsWith nos analiza si nuestra cadena termina por una cadena que designamos respondiendo V o F, curso?");
 console.log(curso.endsWith("Curso"));

  //Objeto number
  console.log("Object Number");
  console.log("Metodo IsNan verifica que un numero no es un numero");
  num1 = 8;
  console.log(num1);
  console.log(Number.isNaN(num1));
  console.log("0/0");
  console.log(Number.isNaN(0/0));
  console.log("Metodo IsFinite verifica que un numero sea finito");
  console.log(Number.isFinite(num1));
  console.log(Infinity+"?");
  console.log(Number.isFinite(Infinity));
  console.log("Metodo IsInteger verifica que un numero sea entero");
  console.log(Number.isInteger(num1));
  console.log(Infinity+"?");
  console.log(Number.isInteger(Infinity));

    //Objeto Assign
    console.log("Object Assign");
    var datos = {name : "Pablo"};
    var lastName = {Last_name : "Ortega"};
    var age = {Age: 29};

    Object.assign(datos,lastName,age);

    console.log(datos);

    //Promise
    console.log("Promise\n");
    console.log("Representa una operacion que no se ha completado pero se espera a que se complete\n");
    console.log("Estas promesas las utilisamos en tareas asincronas\n");
    console.log("Se debe tomar en cuenta su estado, inicial o espera, cumplida la operacion se completa exitosamente y su estado de rechazo\n");
    
   //Fijarse en el cierre de New Promise
    var promesa = new Promise (function (resolve, reject) {
        const FLAG = 5;

        if (FLAG == 5)
            resolve ("Todo bien");
        else
            reject(Error("Algo salio mal!! T_T"));
    });

    promesa.then (function(response){
        console.log(response)
    }, function (error){
        console.log(error);
    })