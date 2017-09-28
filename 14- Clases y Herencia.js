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