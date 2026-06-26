const animal = {
    eat() {
        console.log("Eating")
    }
}

const dog = {
    bark() {
        console.log("Bark")
    }
}

Object.setPrototypeOf(dog, animal)

dog.eat()
// dog.hasSleep


// Constructor Example

function User(name) {
    this.name = name
}

User.prototype.sayHello = function () {
    console.log(this.name)
}

const user = new User("Prem");
user.sayHello()