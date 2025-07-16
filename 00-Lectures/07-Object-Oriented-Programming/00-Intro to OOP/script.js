// Represent a car in programming: Procedural
let car = {
  model: "Toyota",
  year: 2020,
};

function displayCarInfo(car) {
  console.log(`${car.model} made in ${car.year}`);
}

displayCarInfo(car);

// Represent a car in programming: OOP
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(`${this.model} made in ${this.year}`);
  }
}
const myCar = new Car("Toyota", 2020);
myCar.displayInfo();

class ElectricCar extends Car {
  constructor(model, year, batteryLife) {
    super(model, year);
    this.batteryLife = batteryLife;
  }

  displayBatteryLife() {
    console.log(`Battery life: ${this.batteryLife} hours`);
  }
}
const myElectricCar = new ElectricCar("Tesla", 2021, 24);
myElectricCar.displayInfo(); // Inherited method
myElectricCar.displayBatteryLife();

class Animal {
  speak() {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}

const myDog = new Dog();
const myCat = new Cat();
myDog.speak(); // Bark
myCat.speak(); // Meow

function dogSpeak() {
  console.log("Bark");
}

function catSpeak() {
  console.log("Meow");
}

dogSpeak(); // Bark
catSpeak(); // Meow

class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposit ${amount}, New Balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdraw ${amount}, New Balance: ${this.balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }
}

const myAccount = new BankAccount("John Doe");
myAccount.deposit(100); // Deposit 100, New Balance: 100
myAccount.withdraw(50); // Withdraw 50, New Balance: 50

let account = {
  owner: "John Doe",
  balance: 0,
};

function deposit(account, amount) {
  account.balance += amount;
  console.log(`Deposit ${amount}, New Balance: ${account.balance}`);
}

function withdraw(account, amount) {
  if (amount <= account.balance) {
    account.balance -= amount;
    console.log(`Withdraw ${amount}, New Balance: ${account.balance}`);
  } else {
    console.log("Insufficient funds");
  }
}

deposit(account, 100); // Deposit 100, New Balance: 100
withdraw(account, 50); // Withdraw 50, New Balance: 50

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("Dog", "bark");
dog.speak(); // Outputs: Dog says bark

class Person {
  #name; // private property
  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

const john = new Person("John");
console.log(john.getName()); // Outputs: John
// console.log(john.#name); // Error: Private field '#name' must be declared in an enclosing class

