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