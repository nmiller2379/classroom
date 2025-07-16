// 1. Create a person ============================================
let person = {
  _name: "",
  _age: 0,
  _country: "Unknown",

  // Getter and setter for name
  get name() {
    return this._name;
  },
  set name(newName) {
    if (typeof newName === "string") {
      this._name = newName;
    } else {
      console.error("Name must be a string");
    }
  },

  // Getter and setter for age
  get age() {
    return this._age;
  },
  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) {
      this._age = newAge;
    } else {
      console.error("Age must be a positive number");
    }
  },
};

// Using getters and setters
person.name = "Alice";
person.age = 30;
console.log(person.name); // Output: Alice
console.log(person.age); // Output: 30

// 2. Prototype Chain =======================================

// Define the base object
let baseObject = {
  greet () {
    console.log("Hello from the base object!");
  },
};

// Create a child object inheriting from the base object
let childObject = Object.create(baseObject);
childObject.sayHello = function () {
  console.log("Hello from the child object!");
};

// Create a grandchild object inheriting from the child object
let grandchildObject = Object.create(childObject);
grandchildObject.sayHi = function () {
  console.log("Hi from the grandchild object!");
};

// Test prototype chain
baseObject.greet(); // Output: Hello from the base object!
childObject.greet(); // Output: Hello from the base object! (inherited)
childObject.sayHello(); // Output: Hello from the child object!
grandchildObject.greet(); // Output: Hello from the base object! (inherited)
grandchildObject.sayHello(); // Output: Hello from the child object! (inherited)
grandchildObject.sayHi(); // Output: Hi from the grandchild object!

const myOjb = Object.create()
