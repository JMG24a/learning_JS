// Async Parallel
import fs from 'node:fs/promises';

Promise.all([
    fs.readFile('./text.txt', 'utf-8'),
    fs.readFile('./text2.txt', 'utf-8')
])  
    .then(([text, text2])=>{
        console.log('all read: ', text)
        console.log('all read2: ', text2)
    })
    .catch((error)=>{
        console.log(error)
    })

Promise.any([
    fs.readFile('./text.txt', 'utf-8'),
    fs.readFile('./text2.txt', 'utf-8')
])  
    .then(([text, text2])=>{
        console.log('any read: ', text)
        console.log('any read2: ', text2)
    })
    .catch((error)=>{
        console.log(error)
    })