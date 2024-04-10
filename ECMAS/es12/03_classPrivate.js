class User {
    constructor(name = 'jose', age = 23){
        this.name = name;
        this.age = age;
    }

    greeting(){
        return `hello`;
    }

    speak(){
        return `${this.greeting()} ${this.name}`;
    }

    get #userAge(){
        return this.age;
    }

    set #userAge(age){
        this.age = age;
    }
};

const newUser = new User()
console.log(newUser.greeting())
console.log(newUser)
