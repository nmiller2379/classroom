// const pattern = /[a-zA-Z]/;
// const text = "Hello123";
// console.log(pattern.test(text)); // Output: true

// const pattern = /[a-zA-Z0-9]/;
// const text = "Hello123";
// console.log(pattern.test(text)); // Output: true

// const pattern = /[^aeiou]/g;
// const text = "hello";
// console.log(text.match(pattern)); // ['h', 'l', 'l']

// const pattern = /a+/;
// const text = "baaaaad";
// console.log(pattern.test(text)); // Output: true

// const pattern = /ab*d/;
// const text1 = "ad";
// const text2 = "abd";
// const text3 = "abbd";
// console.log(pattern.test(text1)); // Output: true
// console.log(pattern.test(text2)); // Output: true
// console.log(pattern.test(text3)); // Output: true

// const pattern = /t[a-z]*?i/;
// const text = "titanic";
// console.log(text.match(pattern)); // Output: ["ti"]

const pattern = /^hello/;
const text = "hello world";
console.log(text.match(pattern)); // ['hello']