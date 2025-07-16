// Create a JavaScript Object ================================================

// Object literal
const myObj = {};


// Use Classes to create objects
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Methods go here
  greeting() {
    console.log(`Hi, ${this.name} is ${this.age}`)
  }
}

const carl = new Person("Carl", 27)
carl.greeting()
console.log(carl)
console.log(Person)


// Use Constructor functions to create objects
function NewPerson(name, age) {
  this.name = name;
  this.age = age
}

const stan = new NewPerson("Stan", 47)
console.log(stan)

// Access properties on objects ==============================================

// Use Dot Notation to Access Properties of an Object
console.log(carl.name)

// Use Bracket Notation to Access Properties of an Object
const firstName = "name"
console.log(carl[firstName])

// Methods ===================================================================
// Create a method on an object literal
// function sayHello() {
//   console.log("Hello")
// }

const anotherObjs = {
  // This is the method
  sayHello() {
    console.log("Hello")
  }
}



// Assign a method to an existing object using dot notation
myObj.greeting = function() {
  console.log("Hello world!")
}

myObj.greeting()



// Iterate Over All Properties in an object
// Properties in an object (unless it's an array) are not number

const sampleObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

for (const key in sampleObj) {
  console.log(key)
  console.log(sampleObj[key])
}
