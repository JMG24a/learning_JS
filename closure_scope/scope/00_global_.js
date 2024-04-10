/*
    En JavaScript, el "global scope" se refiere al ámbito o alcance global en el que residen las variables y funciones que no están declaradas dentro de ninguna función. En otras palabras, las variables y funciones declaradas fuera de cualquier función están en el ámbito global y pueden ser accedidas desde cualquier parte del código.
*/

var a // Declaracion
var b = 'b' // Declaracion y Inicializacion
b = 'bb' // Reasignacion
var a = 'aa' // Asignacion

// Global scope
var fruit = 'Apple';

function bestFruit () {
    console.log(fruit)
}

bestFruit()

// Ejemplo 1
function countries () {
    var country = 'VE';
    console.log('funcion countries', country)
}
countries()
console.log('de donde eres?', country) // No deberia acceder a este valor que que puede generar errors 
