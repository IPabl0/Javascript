
var miArray = new Array ("123765","estono","estosi");

/*con *.toString() le decimos que convierta el
array completo a string sino especificamos lo contrario*/


console.log(miArray[0].toString().length);


var miString = miArray[0].toString();
//var miString = miArray.toString();

var miArray2 = new Array();

    for (let i of miString)
    {  
        //console.log(miString.charAt(i));
        console.log(i);
        miArray2.push(i);
    }

    console.log(miArray2);



