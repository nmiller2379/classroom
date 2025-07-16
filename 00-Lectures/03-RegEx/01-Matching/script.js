// const pattern = /hello/;
// const text = "hello world";

// console.log(pattern.test(text)); // Output: true

// const pattern = /hello/;
// const text = "hello world";

// console.log(text.match(pattern)); // Output: ["hello"]

// const pattern = /hello|world/;
// const text = "hello world";

// console.log(text.match(pattern)); // Output: ["hello"]


// const pattern = /hello/i;
// const text = "Hello world";

// console.log(pattern.test(text)); // Output: true

// const pattern = /hello/;
// const text = "hello world hello";

// console.log(text.match(pattern)); // Output: ["hello"]

// const pattern = /hello/g;
// const text = "hello world hello";

// console.log(text.match(pattern)); // Output: ["hello", "hello"]

// const pattern = /he.../;
// const text = "hello world";

// console.log(text.match(pattern)); // Output: ["hello"]

// const pattern = /[aeiou]/;
// const text = "hello world";

// console.log(text.match(pattern)); // Output: ["e"]

const pattern = /[aeiou]/g;
const text = "hello world";
console.log(text.match(pattern)); // Output: ["e", "o", "o"]







