function outer() {
  const message = "Hello from outer!";
  return function inner() {
    console.log(message);
  };
}

const greet = outer();
greet(); // "Hello from outer!"

function createGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

console.log(sayHello("Alice"));
console.log(sayHi("Bob"));

function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const next = counter();
console.log(next()); // 1
console.log(next()); // 2
console.log(next()); // 3
