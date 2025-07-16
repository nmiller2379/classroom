// // const myString = `I'm a string.`;

// // console.log(myString.length); //Outputs 13

// // console.log(String.prototype);

// const arr = new Array(1, 2, 3, 4)

// console.log(arr)

// // Creating a prototype object
// const personPrototype = {
//   greet () {
//     console.log("Hello, my name is " + this.name);
//   },
// };

// // Creating an object using the prototype
// const person1 = Object.create(personPrototype);
// person1.name = "Alice";

// // Accessing inherited method
// person1.greet(); // Output: Hello, my name is Alice

// Creating an object with getters and setters
let person = {
  _name: "", // conventionally, properties that are to be accessed via getters and setters often start with an underscore
  _age: 0,
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

// Trying to set invalid values
person.name = 42; // Output: Name must be a string
person.age = -10; // Output: Age must be a positive number

const myObj = {
    name: "Todd",
    age: 35,
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

myObj.greet() // Outputs: Hello, my name is Todd