/*EJERCICIO 10

Escribe una funcion donde dado el nombre de la persona pueda retornar el numero de asiento que le corresponde. 
Si la personas no esta en la lista o no tiene asiento, retornar "0"
*/

//Ingresamos el array con distintos elementos 
var lista = ['mari', 'lisa', 'jana', 'dani', 'pepi'];
//
var a = lista.indexOf('lisa')+1;
console.log(a)





/*Establecemos la funcion*/
function esPalindromo(str){
  //ponemos las condiciones para que retorne false or true
    if(str.length === 0) { return true;}
    if(str[0] !== str[str.length-1]){ return false;}
    //establecemos la funcion para que recorra la palabra y determine si es palindromo o no 
    return esPalindromo(str.slice(1,str.length-1));
}

console.log(esPalindromo("palindromo"));
