// enhanced object literals

function newUser (user, age, country, uid) {
    return {
        user: user,
        age: age,
        country: country,
        id: uid
    }
} 

console.log(newUser('jose', 23, 'VE', 4))

const newAdmin = (user, age, country, uid) => {
    return {
        user,
        age,
        country,
        id: uid
    }
} 

console.log(newAdmin('jose', 23, 'VE', 4))
