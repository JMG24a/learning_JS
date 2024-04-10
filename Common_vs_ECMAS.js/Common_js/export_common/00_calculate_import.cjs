// .js by default, use CommonJS
// .js -> .cjs This extension obliged to Node.js to use CommonJS
// CommonJS require module
const sum = require('./01_sum.cjs');
const { res } = require('./02_res.cjs');
const { multi } = require('./03_multi.cjs');

console.log('sum: ', sum(6,2))
console.log('res: ', res(6,2))
console.log('mul: ', multi(6,2))

