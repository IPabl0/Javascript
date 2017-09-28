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