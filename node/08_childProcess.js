import { exec, spawn } from 'node:child_process';

function main(){

    exec('ls -la', (error, result) => {
        if(error){
            console.error(error.message)
            process.exit(1)
        }
        console.log(result)
    })

    setTimeout(()=>{
        exec('node 00_os.js', (error, result)=> {
            if(error){
                console.error(error.message)
                process.exit(1)
            }
            console.log(result)
        })
    }, 2000)
}

// main()

let init_process = spawn('ls', ['-la']);

console.log(init_process.pid)
console.log(init_process.connected)

init_process.stdout.on('data', (dato) => {
    console.log('killed?: ', init_process.killed)
    console.log(dato.toString())
})

init_process.on('exit', (data) => {
    console.log('killed?: ', init_process.killed)
    console.log('Termino el proceso: ', data)
})
