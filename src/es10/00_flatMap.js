const array = [1,2,3,[4,5,6,[7,8,9]]];
console.log(array.flat(3)) // crea un array de un solo nivel


const array2 = [1,2,3]
console.log(array2.flatMap(v => [v, v * 2])) //