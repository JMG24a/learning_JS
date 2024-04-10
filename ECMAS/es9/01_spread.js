const user = {username: 'jose24', age: 23, country: 'VE'}
const {age, ...values} = user;
console.log(age, values)