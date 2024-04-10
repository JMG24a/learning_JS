async function* anotherFn () {
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
    yield await Promise.resolve(4)
    yield await Promise.resolve(5)
}

const other = anotherFn()

other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value, response.done))

console.log('hello')

async function arrayOfNames(array){
    for await (let value of array){
        console.log(value)
    }
}

arrayOfNames(['jose', 'victor', 'madier', 'rafael'])

console.log('after')
