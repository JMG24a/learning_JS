const myGlobal = 0;

function myFunction () {
    const myNumber = 1;
    console.log(myGlobal)

    const myFunction1 = () => {
        const inner = 2;
        console.log(myNumber)

        const myFunction2 = () => {
            console.log("🚀 ~ myFunction2 ~ myGlobal:", myGlobal)
            console.log("🚀 ~ myFunction2 ~ myNumber:", myNumber)
            console.log("🚀 ~ myFunction2 ~ inner:", inner)
        }

        return myFunction2()
    }

    return myFunction1()
}

myFunction()