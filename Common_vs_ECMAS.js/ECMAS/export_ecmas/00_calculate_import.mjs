// .js by default, use CommonJS
// .js -> .cjs This extension obliged to Node.js to use CommonJS
// CommonJS require module
import res, {sum} from './01_sum.mjs';
import operator from './02_res.mjs';



console.log('sum: ', sum(6,2))
console.log('res: ', res(6,2))
console.log('mul: ', operator.mul(6,2))
console.log('div: ', operator.div(6,2))


