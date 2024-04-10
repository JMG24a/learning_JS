// old
try {
    hello()
} catch (error) {
    console.log(error)
}

// new
try {
    anotherFn()
} catch {
    console.log('error?')
}