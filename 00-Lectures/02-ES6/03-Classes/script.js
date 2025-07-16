class ClassName {
  constructor() {
    // Constructor method
  }

  method1() {
    // Method 1
  }
}

// Creating a new instance of ClassName
const obj = new ClassName();

// class ChildClass extends ParentClass {
//   constructor() {
//     super(); // Call the parent class constructor
//     // Additional child class initialization
//   }

//   // Additional methods specific to the child class
// }

class Animal {
  constructor(name, noise) {
    this.name = name;
    this.noise = noise;
  }

  speak() {
    console.log(`${this.name} says ${this.noise}.`);
  }
}

class Dog extends Animal {
  constructor(name, noise, breed) {
    super(name, noise); // Call the constructor of the superclass
    this.breed = breed;
  }
  dogBreed() {
    console.log(`${this.name} is a ${this.breed}`);
  }
}

class Tiger extends Animal {
  run() {
    console.log(`The tiger runs fast`);
  }
}

const rover = new Dog("Rover", "bark", "German Shepard");
rover.speak(); // Outputs: Rover says bark.
rover.dogBreed(); //Outputs: Rover is a German Shepard

const gary = new Dog("Gary", "yip", "mutt");
gary.speak(); // Outputs: Gary says yip.
gary.dogBreed(); //Outputs: Gary is a mutt

const myTiger = new Tiger("A tiger", "growl");
myTiger.speak(); //Outputs: A tiger says growl

class MathUtils {
  static add(x, y) {
    return x + y;
  }

  static multiply(x, y) {
    return x * y;
  }
}

console.log(MathUtils.add(5, 3)); // Output: 8
console.log(MathUtils.multiply(5, 3)); // Output: 15

class MyClass {
  constructor() {
    this._property = 0;
  }

  get property() {
    return this._property;
  }

  set property(value) {
    if (typeof value === "number") {
      this._property = value;
    } else {
      console.error(`Value must be a number`);
    }
  }
}

const myObj = new MyClass();
myObj.property = 10; // Using setter
console.log(myObj.property); // Using getter
myObj.property = "Todd"; //Error: Value must be a number

