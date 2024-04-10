// Paths
import path from 'node:path'

// There are two different to separator paths: unix-> '/'  and windows-> '\'

console.log(path.sep) // return separator path \ or /

const filePath = path.join('content', 'subfolder', 'test.txt') // created a root path
console.log('FilePath', filePath)

const baseNameFile = path.basename('/tmp/jmg-secret-file/password.txt', '.txt') // take filename
console.log(baseNameFile)

const baseExtensionFile = path.extname('/tmp/jmg-secret-file/password.txt') // take extension name
console.log(baseExtensionFile)
