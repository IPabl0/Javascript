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