// Create a JavaScript Object
const myObj = {
  name: "Mr. Miller",
  age: 46,
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Methods would go here, if we needed them
}

const miller = new Person("Mr. Miller", 46);

function CreatePerson(name, age) {
  this.name = name;
  this.age = age;
}

const anotherMiller = new CreatePerson("Mr. Miller", 46);

// Use Dot Notation to Access Properties of an Object
console.log(miller.age);
console.log(anotherMiller.name);

// Use Bracket Notation to Access Properties of an Object
console.log(myObj["name"]);

// Create a method on an object
myObj.sayHello = function () {
  console.log(`${this.name} is ${this.age} years old and says hello.`);
};

myObj.sayHello();

const numsObj = {
  a: 1,
  b: 2,
  add() {
    return this.a + this.b;
  },
};

console.log(numsObj.add());

// Iterate Over All Properties in an object

const sampleObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

for (const key in sampleObj) {
  console.log("key: ", key);
  // Log each value
  console.log(sampleObj[key]);
}
