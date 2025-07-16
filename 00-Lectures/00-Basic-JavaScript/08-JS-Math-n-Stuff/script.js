// Generate a random fraction
let randomFraction = Math.random();
// console.log(randomFraction);

// Generate a random whole number
let randomWholeNumber = Math.floor(Math.random() * 10);
// console.log(randomWholeNumber);

let strNumber = "123";
let intNumber = parseInt(strNumber);
// console.log(intNumber);

let binaryNumber = "1101";
let decimalNumber = parseInt(binaryNumber, 2);
// console.log(decimalNumber);

// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
// (then start over)
// 10, 11, 12, ...

// 0, 1, (then start over)
// 10, 11, (then start over)
// 100, 101, 110, 111, (then start over)
// 1000, ...

let negativeNumber = -5;
let absoluteValue = Math.abs(negativeNumber);
// console.log(absoluteValue);

let isTrue = true;
let result = isTrue ? "It's true!" : "It's false!";
// console.log(result);

let age = 25;
let message =
  age < 18
    ? "You are a minor"
    : age >= 18 && age < 21
    ? "You are an adult but not allowed to drink"
    : "You are a legal adult";
console.log(message);

