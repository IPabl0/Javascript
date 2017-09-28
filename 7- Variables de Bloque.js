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