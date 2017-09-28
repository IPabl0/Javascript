//Parametros spread
console.log ("Parametros Spread");

function device (type, name, brand){
    console.log(`El ${type} ${name} es de la marca ${brand}`);
}

var cellphone = new Array ("Celular","Moto G","Motorola");

//cazamos type -> celular ; name -> Moto G ; brand -> Motorola
device(...cellphone);