/*EJERCICIO 8 

Dado un arreglo y un número, retornar el índice (posición) del número.
*/
//Definimos el array con distintos elementos 
var listaNumeros = [10,20,30,40,50];

//Le pedimos a indexOf que nos diga la poscion de 50 
var indice = listaNumeros.indexOf(50);

//Deberia retornar 4 
console.log(indice)



/*EJERCICIO 10

Diseñar un programa que lea las calificaciones de un alumno (10 notas en total). Debes calcular e imprimir 
su promedio, y decir a través de un alert si el ramo fue aprobado o no. Las notas van de 1 a 7 y se aprueba 
con un promedio igual o mayor a 4. 

*/

//Ingresamos el array con distintos elementos 
 var lista = ['mari', 'lisa', 'jana', 'dani', 'pepi'];

//Le pedimos a indexOf que nos retorne la posicion de 'lisa', agregamos +1 para asegurarnos que cuenta desde 1 no 0 
 var a = lista.indexOf('lisa')+1;

//Deberia retornar 2
console.log(a)

/*EJERCICIO 11

Escribe una funcion donde dado el nombre de la persona pueda retornar el numero de asiento que le corresponde. 
Si la personas no esta en la lista o no tiene asiento, retornar "0"
*/






/*EJERCICIO 12

Realizar un programa que permita analizar si una palabra que el usuario introduce por teclado es palíndroma o no.
Si es palíndroma debe retornar true, en caso contrario false.
*/






/*EJERCICIO 13

Dado dos string (palabra1 y palabra2) escribir una función para determinar si palabra1 es anagrama de palabra2.
Si es anagrama debe retornar true, en caso contrario false.
*/

//establecemos la funcion con 2 palabras a comparar 
function ordenapalabras (str1, str2) {
  
  //primero con split dividimos la primera palabra elegida en letras individuales, segundo con sort ordenamos las letras alfabeticamente y tercero con join volvemos a juntar las letras ya ordenadas 
  var palabra1 = str1.split('').sort().join('');
  
  //Repetimos las 3 acciones con la segunda palabra
  var palabra2 = str2.split('').sort().join('');

  //luego comparamos lo que quedo de la primera palabra con lo que quedo de la segunda palabra 
  if (palabra1 === palabra2) {
    
    // si es exctameente igual debe retornar 'verdadero'
    return "verdadero";
  } else {
    
    // de lo contrario retorna 'falso'
    return "falso";
  }
  }
//en caso de rama y arma debe retornar verdadero 
console.log(ordenapalabras("rama", "arma"));



