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

Escribe una funcion donde dado el nombre de la persona pueda retornar el numero de asiento que le corresponde. 
Si la personas no esta en la lista o no tiene asiento, retornar "0"
*/

//Ingresamos el array con distintos elementos 
 var lista = ['mari', 'lisa', 'jana', 'dani', 'pepi'];

//Le pedimos a indexOf que nos retorne la posicion de 'lisa', agregamos +1 para asegurarnos que cuenta desde 1 no 0 
 var a = lista.indexOf('lisa')+1;

//Deberia retornar 2
console.log(a)



/*EJERCICIO 12

Realizar un programa que permita analizar si una palabra que el usuario introduce por teclado es palíndroma o no.
Si es palíndroma debe retornar true, en caso contrario false.
*/

//Establecemos la funcion*/
function esPalindromo(str){
  //ponemos las condiciones para que retorne false or true
    if(str.length === 0) { return true;}
    if(str[0] !== str[str.length-1]){ return false;}
    //establecemos la funcion para que recorra la palabra y determine si es palindromo o no 
    return esPalindromo(str.slice(1,str.length-1));
}
//Deberia retornar "false"
console.log(esPalindromo("palindromo"));



/*EJERCICIO 13

Dado dos string (palabra1 y palabra2) escribir una función para determinar si palabra1 es anagrama de palabra2.
Si es anagrama debe retornar true, en caso contrario false.
*/

 function esAnagrama (palabra1, palabra2) {
    
     if (palabra1.length !== palabra2.length) {
        return false;    
    }
    
    // 
    var contador1 = {};
    Array.prototype.forEach.call(palabra1, function(ch) {
        contador1[ch] = contador1[ch] ? 1 + contador1[ch] : 1;
    });

    // 
    var contador2 = palabra2.length;
    for (var i = 0; i < contador2; i++) {
        if(!contador1[palabra2[i]]) {
            return false;
        } else {
            contador1[palabra2[i]] -= 1;
        }
    }
    return true;
}
//Deberia retornar 'true'
console.log(esAnagrama('amar','rama')); 


