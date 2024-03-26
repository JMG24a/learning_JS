const  anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('hey!!')
        }else{
            reject('Whoops');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error));