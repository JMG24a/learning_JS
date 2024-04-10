function fib(n){
    if(n < 2){
        return n;
    }
    return fib(n-1) + fib(n-2)
}

self.addEventListener('message', (event)=>{
    const { number } = event.data;
    const result = fib(number);
    self.postMessage({result})
})