// console.log(window); // Navegador
// console.log(global); // node
// console.log(selft);  // webWorker
console.log(globalThis); // funciona segun el contexto lo que da mas versatilidad

let i = 0;
let interval = globalThis.setInterval(()=>{
    i++
    if(i > 3){
        globalThis.clearInterval(interval)
        globalThis.process.exit(1)
    }
    console.log('hola')
},1000)


globalThis.setImmediate(()=>{
    console.log('hey!')
})

globalThis.myVariable = 'Mi variable'
console.log(myVariable)