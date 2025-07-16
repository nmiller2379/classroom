// const obj = {
//     name: 'John',
//     greet: function() {
//       console.log("Hello " + this.name);
//     }
//   };
  
//   obj.greet(); // Output: Hello, John!
  
//   const obj = {
//     name: 'John',
//     greet: () => {
//       console.log("Hello " + this.name);
//     }
//   };
  
//   obj.greet(); // Output: Hello, undefined!

function exampleFunction(a, b, c) {
    console.log(arguments.length); // Outputs the number of arguments
    console.log(arguments[0]);     // Outputs the first argument
    console.log(arguments[1]);     // Outputs the second argument
}
  
// exampleFunction(1, 2, 3); // Outputs: 3, 1, 2

// Function with default parameters
// function greet(name = 'Anonymous') {
//     console.log("Hello " + name);
// }

// // Calling the function without passing a parameter
// greet(); // Output: Hello, Anonymous!

// // Calling the function with a parameter
// greet('John'); // Output: Hello, John!

// // Arrow function with default parameters
// const greet = (name = 'Anonymous') => {
//     console.log("Hello " + name);
// };

// // Calling the function without passing a parameter
// greet(); // Output: Hello, Anonymous!

// // Calling the function with a parameter
// greet('John'); // Output: Hello, John!

function myFunction(...restParameter) {
    console.log(restParameter)
}

myFunction(1, 2, 3) // Output: [1, 2, 3]