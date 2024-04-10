const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('hello'), 1000)
        : reject(new Error('Error'))
    })
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something)
    console.log('something')
}

console.log('before')
console.log(anotherFn())
console.log('after')
