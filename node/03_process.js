// process
console.log(process.argv)

process.on('exit', () => {
  console.log('limpiar los recursos')
})

console.log(process.env.PEPITO)

console.log(process.cwd())

process.exit(0) // todo bien y el proceso debe terminar
process.exit(1) // algo salio mal y necesitamos cerrar el programa
