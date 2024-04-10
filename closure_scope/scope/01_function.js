/*
    El "function scope" en JavaScript se refiere al alcance de una variable declarada dentro de una función. Cuando una variable se declara dentro de una función, su alcance está limitado a esa función en particular, lo que significa que la variable solo es accesible desde dentro de esa función y no desde fuera de ella. Esto se conoce como "scope" o alcance de función.
*/

function greeting () {
    let userName = 'jose'
    console.log(userName)

    if(userName === 'jose'){
        console.log(`hello ${userName}`)
    }
}

greeting()

console.log(userName) // Error la variable userName solo existe en la funcion