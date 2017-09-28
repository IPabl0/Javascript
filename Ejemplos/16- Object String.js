 //Objeto String
 console.log("Object String");

 var cadena = "Esto es una cadena \n";
 var curso = "Curso de JavaScript 2015"

 console.log(cadena.repeat(5));

 console.log("metodo include de object string \n");
 console.log(curso);
 console.log("JavaScript ?");
 console.log(curso.includes("JavaScript"));
 console.log(curso.includes("j? esta en el indice 10?",10));
 
 console.log("StartWith nos analiza si nuestra cadena empieza por una cadena que designamos respondiendo V o F, curso?");
 console.log(curso.startsWith("Curso"));

 console.log("EndsWith nos analiza si nuestra cadena termina por una cadena que designamos respondiendo V o F, curso?");
 console.log(curso.endsWith("Curso"));