const greeting = (name) => {
    let userName = name

    const displayName = () => {
        return `hello ${userName}`
    }

    return displayName()
}

console.log(greeting('jose'))