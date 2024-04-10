// Async sequential
import fs from 'node:fs/promises';
/* ---------------------------  Async with Promises    ------------------------ */
console.log('--------- Async - Promises ---------')

fs.readFile('./text.txt', 'utf-8')
    .then((text)=>{
        console.log('Promises read 1: ', text)
    })
    .catch((error)=>{
        console.log(error)
    })

console.log('Promises read 2: ', 'Is not a blocking function')

fs.readFile('./text2.txt', 'utf-8')
    .then((text)=>{
        console.log('Promises read 3: ', text)
    })
    .catch((error)=>{
        console.log(error)
    })

/* ---------------------------  Async with Await    ------------------------ */
console.log('--------- Async - Await ---------')

const text = await fs.readFile('./text.txt', 'utf-8')
console.log('Await read 1: ', text)

console.log('Await Read 2: ', 'Is not a blocking function')

const text2 = await fs.readFile('./text2.txt', 'utf-8')
console.log('Await read 3: ', text2)