// array.reduce((accumulator, currentValue, currentIndex, array) => {
//     // Your reducer function here
// }, initialValue)

// Example: Summing all integers in an array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

// Example: Flattening an array of arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattened = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]

// Example: Frequency Counter
const array = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const countOccurrences = array.reduce((acc, curr) => {
    if (acc[curr]) {
        acc[curr] += 1; // Increment count if key exists
    } else {
        acc[curr] = 1; // Initialize count to 1 if key doesn't exist
    }
    return acc;
}, {});

console.log(countOccurrences);


