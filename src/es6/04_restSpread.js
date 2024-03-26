// array destructuring
const fruits = ['apple', 'banana'];
const [a, b] = fruits;
console.log(a, fruits[1]);

// object destructuring
let user = {username: 'jose', age: 23};
const { username, age } = user;
console.log(username, user.age);

// spread operator
let person = { name: 'angel', age: 24 };
let country = 'VE';
let data = {...person, country};
console.log(data);

// rest
const sum = (num, ...values) => {
    console.log(values);
    console.log(num + values[0]);
}
sum(1, 4, 4, 4 ,4)

// Combina objetos JSON con el Spread Operator
const solution = (json1 = { name: 'Mr. Michi', food: "Pescado" }, json2 = { age: 12, color: "Blanco" }) => {
    console.log({ ...json1, ...json2 })
    return { ...json1, ...json2 }
}

solution()