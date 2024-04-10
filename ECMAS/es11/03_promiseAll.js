const promise1 = new Promise((resolve, reject) => reject('Reject1'))
const promise2 = new Promise((resolve, reject) => resolve('Resolve2'))
const promise3 = new Promise((resolve, reject) => reject('Reject3'))
const promise4 = new Promise((resolve, reject) => resolve('Resolve4'))

Promise.allSettled([
    promise1,
    promise2,
    promise3,
    promise4,
])
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('end'))
 