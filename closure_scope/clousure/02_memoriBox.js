// bad closure
function badMoneyBox (money) {
     let saveCoins = 0;
     saveCoins += money
     console.log(`bad closure $${saveCoins}`)
}
badMoneyBox(5)
badMoneyBox(5)


// success closure
function moneyBox(){
    let saveCoins = 0;

    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`money = $${saveCoins}`)
    }

    return countCoins;
}

const myMoney = moneyBox();
myMoney(5)
myMoney(20)


function sumWithClosure(firstNum) {
    return function (secNum) {
      console.log( firstNum + (secNum ?? 0));
    }
  }
  
  sumWithClosure(2)(3);
  sumWithClosure(8)()



function createPetList() {
    // Tu código aquí 👈
    const list = [];

    return function petList(pet) {
        if(pet){
            list.push(pet)
        }
        console.log(list)
    } 
}
  

const pets = createPetList()
pets('dog')
pets('cat')
pets()
pets('rat')

