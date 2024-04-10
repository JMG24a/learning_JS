// sync
import fs from 'node:fs';
/*--------------------------------Read - Sync -------------------------------------*/
console.log('--------- Read - sync ---------')

const readSync = fs.readFileSync('./text.txt', 'utf-8');
console.log('Read 1: ', readSync)

console.log('Read 2: ', 'Is a blocking function')

const read2Sync = fs.readFileSync('./text2.txt', 'utf-8');
console.log('Read 3: ', read2Sync)