//Objeto Assign
    console.log("Object Assign");
    var datos = {name : "Pablo"};
    var lastName = {Last_name : "Ortega"};
    var age = {Age: 29};

    Object.assign(datos,lastName,age);

    console.log(datos);