const fs = require('node:fs/promises');

// IIFE - Immediately Invoked Function Expression => (()=>{})()
;(async () => {
    const text = await fs.readFile('./00_await.txt', 'utf-8')
    console.log('read: ', text)
})()