
//Gnera un valor entre 0 y 100
var start = Math.floor(Math.random()*101);
var end = Math.floor(Math.random()*101);


function range (valor1,valor2){
var nume  = new Array();
//Determinamos el orden de los argumentos
    if (valor1 < valor2){
        for (let i = valor1 ; i <= valor2; i++ )
        {
            nume.push(i);
        };
        return nume;
    }else{
        for (let i = valor2 ; i <= valor1; i++ )
        {
            nume.push(i);
        };
        return nume;
    }
}


function sum(numeros){
    var acu=0;
    for (let numero of numeros){
        acu = numero + acu;
    };
    return(acu);
}


var miArray = range(start,end);


console.log (miArray);
console.log("la suma del array es: "+sum (miArray));


