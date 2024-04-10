import fs from 'node:fs';

/*----------------------------------Stats-----------------------------------------*/
console.log('\n--------- Stats ---------')

const stats = fs.statSync('./01_fs.txt');

console.log(stats.isFile()) // nos dice si es un fichero
console.log(stats.isDirectory()) // nos dice si es un directorio
console.log(stats.isSymbolicLink()) // nos dice si es un enlace simbolico
console.log(stats.size) // nos dice el tamamo en bytes

/*--------------------------------Read - Sync -------------------------------------*/
console.log('--------- Read - sync ---------')

const readSync = fs.readFileSync('./01_fs.txt', 'utf-8');
console.log('Read 1: ', readSync)

console.log('Read 2: ', 'Is a blocking function')

const read2Sync = fs.readFileSync('./01_fs2.txt', 'utf-8');
console.log('Read 3: ', read2Sync)

/*--------------------------------Read - Async------------------------------------*/
console.log('\n--------- Read - Async ---------')

fs.readFile('./01_fs.txt', 'utf-8', (error, text)=>{
    try {
        console.log('Read 1: ', text)
    } catch {
        console.log('error 1: ', error)
    }
});

console.log('Read 2: ', 'Is not a blocking function')

fs.readFile('./01_fs2.txt', 'utf-8', (error, text)=>{
    try {
        console.log('Read 3: ', text)
    } catch {
        console.log('error 3: ', error)
    }
});

/*--------------------------------node:fs/promise-------------------------------------*/
// import fs from 'node:fs/promises';

// fs.readFile('./01_fs.txt', 'utf-8')
//     .then(text =>{
//         console.log('Read 1: ', text)
//     })
//     .catch((error)=>{
//         console.log('error 1: ', error)
//     });

// console.log('Read 2: ', 'Is not a blocking function')

// fs.readFile('./01_fs2.txt', 'utf-8')
//     .then(text =>{
//         console.log('Read 3: ', text)
//     })
//     .catch((error)=>{
//         console.log('error 3: ', error)
//     });
