// -------------------{ recursive function BigO(n²) }-------------------------
function fib(n){
    if(n < 2){
        return n;
    }
    return fib(n-1) + fib(n-2)
}

// -------------------{ recursive function BigO(n) }-------------------------