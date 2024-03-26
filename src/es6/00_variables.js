const constantVariable = true //no se puede reasignar el valor
// constantVariable = false

var globalVariable = 'dog'
globalVariable = 'cat'

let fruit = 'apple'
fruit = 'banana'

console.log('var', globalVariable)
console.log('let', fruit)

function shop () {
    if(true){
        var iceCream1 = '1'  //function scope
        const iceCream2 = '2' //block scope
        let iceCream3 = '3'  //block scope
    }
    
    console.log('var', iceCream1) 
    // console.log('let', iceCream2) //error: no se puede acceder
    // console.log('let', iceCream3) //error: no se puede acceder
}