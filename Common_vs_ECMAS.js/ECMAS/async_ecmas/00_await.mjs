import fs from 'node:fs/promises';

const text = await fs.readFile('./00_await.txt', 'utf-8')
console.log('read: ', text)