function* iterate(array) {
    for (let value of array){
        yield value;
    }
}

const array = [1,2,3,4,5];

const whatIsThis = iterate(array);
console.log(whatIsThis.next().value)
console.log(whatIsThis.next().value)
console.log(whatIsThis.next().value)
console.log(whatIsThis.next().value)
console.log(whatIsThis.next().value)
console.log(whatIsThis.next().value)

