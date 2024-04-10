// var - mala practica
firstName = 'morales' // funciona aunque no fue declarado - warning 
console.log(firstName)

var name = 'jose'; // funciona aunque este declarado 2 veces - warning
var name = 'angel';
console.log(name)

/*-----------------------------------------------------------------------------------------------*/
// let - mejora de ES6 para evitar los errores de var

let fruit = 'Apple'; // no funciona porque esta declarado 2 veces - Success
console.log(fruit)
// let fruit = 'kiwi';
console.log(fruit)

/*-----------------------------------------------------------------------------------------------*/
// const - mejora de ES6 para evitar las reasignaciones y asi no modificar ese valor
const animal = 'dog'
console.log(animal) 