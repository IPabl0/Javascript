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