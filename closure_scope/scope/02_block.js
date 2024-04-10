/*
    El "block scope" en JavaScript se refiere al alcance de una variable declarada dentro de un bloque de código delimitado por llaves {}. Las variables declaradas con let y const tienen un alcance limitado al bloque en el que se declaran.
*/

function fruits () {
    if(true){
        var fruit = 'avocado';   // function scope
        let fruit1 = 'apple';    // block scope
        const fruit2 = 'banana'; // block scope
    }
    console.log("🚀 ~ fruits ~ fruit:", fruit)
    console.log("🚀 ~ fruits ~ fruit1:", fruit1)
    console.log("🚀 ~ fruits ~ fruit2:", fruit2)
}

fruits()