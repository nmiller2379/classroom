
// const pattern = /\d{2,4}/g;
// const text = "2 44 333 5555";
// console.log(text.match(pattern)); // Output: ["44", "333"]


// const pattern = /\d{2,}/g;
// const text = "2 44 333 5555";
// console.log(text.match(pattern)); // Output: ["44", "333", "5555"]

// const pattern = /\d{3}/g;
// const text = "2 44 333 5555";
// console.log(text.match(pattern)); // Output: ["333", "555"]

// const pattern = /\d{3}/g;
// const text = "2 44 333 5555";
// console.log(text.match(pattern)); // Output: ["333", "555"]

// const pattern = /goa?l/;
// console.log(pattern.test("goal")); // Output: true
// console.log(pattern.test("gol")); // Output: true

// const pattern = /\w+(?=\d)/g;
// const text = "hello world456";
// console.log(text.match(pattern)); // Output: ["world"]

// const pattern = /apple(?! pie)/g;
// const text = "I like apple pie, but not apple strudel.";
// console.log(text.match(pattern)); // Output: ["apple"]

// const pattern = /(\d\w)+/;
// console.log(pattern.test("1a2b3c")); // Output: true

// const pattern = /(\w+)\s\1/;
// console.log(pattern.test("hello hello")); // Output: true

// const text = "apple orange banana";
// const pattern = /(\w+)\s(\w+)/g;
// const result = text.replace(pattern, "$2 $1");
// console.log(result); // Output: "orange apple banana"

// const text = "   hello world   ";
// const pattern = /^\s+|\s+$/g;
// const result = text.replace(pattern, "");
// console.log(result); // Output: "hello world"

const pattern = /line1\nline2/;
console.log(pattern.test(`line1
line2`)); // Output: true












