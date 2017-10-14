
//añadimos una propiedad a la clase Array
Array.prototype.descriptorr = null;

dias = new Array ('lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes');

dias.descriptorr = "Dias laborables de la semana";


console.log (dias.descriptorr);
console.log (dias);