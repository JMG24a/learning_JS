// operative system
// old require method => const os = require('node:os')

import os from 'node:os'

console.log('Operative System Info: ')
console.log('-----------------------------')

console.log('Name of Platform: ', os.platform())
console.log('version of Platform: ', os.release())
console.log('Architecture: ', os.arch())
console.log('Free Memory: ', (os.freemem() / 1024 / 1024))
console.log('Total Memory: ', (os.totalmem() / 1024 / 1024))
console.log('Uptime: ', (os.uptime() / 60 / 60 / 24))
console.log('CPUs: ', os.cpus())
