let message = "hello";
console.log(message.length);  // 5

class Dog {
    constructor(name, age){
        this.name = name;
        this.age = age
    }
}

let myDog = new Dog("Carl", 4)

console.log(myDog)
console.log(typeof myDog)

const myDogAgain = {
    name: "Stan",
}