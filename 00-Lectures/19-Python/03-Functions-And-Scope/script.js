// // const greet = (name) => `Hello, ${name}!`;
// // console.log(greet("Alice")); // Output: Hello, Alice!

// // function greet(...args) {
// //   args.forEach((name) => console.log(`Hello, ${name}!`));
// // }

// // greet("Alice", "Bob"); // Output: Hello, Alice! \n Hello, Bob!

// function greet(name) {
//     return `Hello, ${name}!`;
// }

// greet("Alice");  // Output: Hello, Alice!

// const greet = function(name) {
//     return `Hello, ${name}!`;
// };

// greet("Alice");  // Output: Hello, Alice!

// function outer(name) {
//     function inner() {
//         console.log(`Hello, ${name}!`);
//     }
//     return inner;
// }

// const greet = outer("Alice");
// greet();  // Output: Hello, Alice!


function greet(name) {
    return `Hello ${name}!`
}

const hello = greet("Stan")
console.log(hello)
document.getElementById("greet").innerText = hello

let result = (str) => {
    str.length
}