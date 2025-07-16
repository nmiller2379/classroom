// 1. Merge Arrays =====================================================================
function mergeArrays(array1, array2) {
  return [...array1, ...array2];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// 2. Extract Object Properties =======================================================
const person = { 
    name: 'John', 
    age: 30, 
    city: 'New York' 
};
const { name, city } = person;
console.log(name); // Output: 'John'
console.log(city); // Output: 'New York'

// 3. Extracting Skills =============================================================
const skills = ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js']
const [javaScript, html, css, react, node] = skills
console.log(javaScript)
console.log(html)
console.log(css)
console.log(react)
console.log(node)

// Dynamic Greeting ================================================================
const firstName = 'Alice';
const age = 25;
const greeting = `Hello, my name is ${firstName}, and I am ${age} years old.`;
console.log(greeting); // Output: 'Hello, my name is Alice and I am 25 years old.'

