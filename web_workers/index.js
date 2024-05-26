/* -----------------------------------Without Optimization--------------------------------------------- */
// const volume = document.querySelector('#volume') 
// const volumeResult = document.querySelector('#volumeResult')
// // fibonacci
// const fibNumber = document.querySelector('#fibNumber')
// const fibButton = document.querySelector('#fibButton')
// const fibResult = document.querySelector('#fibResult')

// fibButton.addEventListener('click', () => {
//     const result = fib(fibNumber.value);
//     fibResult.innerHTML = `<li>${result}</li>`
// })

// volume.addEventListener('input', (event)=>{
//     volumeResult.innerHTML = `${event.target.value}%`;
// })

// function fib(n){
//     if(n < 2){
//         return n;
//     }
//     return fib(n-1) + fib(n-2)
// }

/* -----------------------------------Optimization With Web Worker--------------------------------------------- */
// const worker = new window.Worker('wk_fib.js') // Init constructor of the worker 

// const volume = document.querySelector('#volume') 
// const volumeResult = document.querySelector('#volumeResult')
// // fibonacci
// const fibNumber = document.querySelector('#fibNumber')
// const fibButton = document.querySelector('#fibButton')
// const fibResult = document.querySelector('#fibResult')

// worker.addEventListener('message', (event) => {
//     const { result } = event.data;
//     fibResult.innerHTML = `<li>${result}</li>`
// })

// fibButton.addEventListener('click', () => {
//     worker.postMessage({number: fibNumber.value})
// })

// volume.addEventListener('input', (event)=>{
//     volumeResult.innerHTML = `${event.target.value}%`;
// })

/* -----------------------------------Optimization With Memorization--------------------------------------*/
const fibResults = document.querySelector('#fibResult');
const fibButton = document.querySelector('#fibButton')
const fibNumber = document.querySelector('#fibNumber')

fibButton.addEventListener('click', () => {
    const result = fib(fibNumber.value);
    fibResults.innerHTML = `<li>${result}</li>`
})

function fib(n) {
  // Verify result has been previously calculated
  if (fibResults.hasOwnProperty(n)) {
    return fibResults[n];
  }

  // calculate result if did not save
  let result;
  if (n < 2) {
    result = n;
  } else {
    result = fib(n - 1) + fib(n - 2);
  }

  // save result
  fibResults[n] = result;
  return result;
}