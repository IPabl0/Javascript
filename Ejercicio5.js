
var numeroDeTarjeta= 1234;

var miString = numeroDeTarjeta.toString();
var miArray = numerosALetras(miString);

console.log(miArray);

function numerosALetras(valor1){
    var numeroDeTarjetaArray = new Array ();
    for( var i of valor1)
    {
        numeroDeTarjetaArray.push(i);
    }
    return numeroDeTarjetaArray;
}      