import add from "./add.js"

// 1. Convert arrow function
// function stringLength(str) {
//   console.log(`the length of "${str}" is:`, str.length);
// }

const stringLength = (str) => {
    console.log(`the length of "${str}" is:`, str.length)
}

stringLength("Todd")

// 2. Array spread operator
const oneToFive = [1, 2, 3, 4, 5];
const oneToTen = [... oneToFive, 6, 7, 8, 9, 10];

console.log(oneToTen)

// 3. Unlimted Args
const sumArgs = (...args) => {
    let total = 0
    console.log(args)
    for (const num of args) {
       total += num 
    }
    return total
}

console.log(sumArgs(1, 2, 3, 4, 5))

// 4. Call module
console.log(add(5, 7))
