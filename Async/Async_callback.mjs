/* ---------------------------  Async with Callbacks    ------------------------ */
console.log('---------Async - Callbacks ---------')
import fs from 'node:fs';

fs.readFile('./text.txt', 'utf-8', (error, text)=>{
    try {
        console.log('Read 1: ', text)
    } catch {
        console.log('error 1: ', error)
    }
});

console.log('Read 2: ', 'Is not a blocking function')

fs.readFile('./text2.txt', 'utf-8', (error, text)=>{
    try {
        console.log('Read 3: ', text)
    } catch {
        console.log('error 3: ', error)
    }
});