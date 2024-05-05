// process
console.log(process.argv)

process.on('uncaughtException', (error, origin) => {
  console.error('Error no cath: ',error)
  console.error('error type: ', origin)
})

process.on('beforeExit', () => {
  console.log('pre-exit');
})

process.on('exit', () => {
  console.log('clear resource');
})

hola()

// console.log(process.env.PEPITO)

console.log(process.cwd())

process.exit(0) // todo bien y el proceso debe terminar
process.exit(1) // algo salio mal y necesitamos cerrar el programa
