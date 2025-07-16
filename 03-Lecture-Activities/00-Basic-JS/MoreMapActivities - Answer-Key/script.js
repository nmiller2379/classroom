// USING THE .map() ARRAY METHOD
// The .map() method is a powerful and versatile array method in JavaScript that allows you to transform each element in an array by applying a function to each element. It creates a new array populated with the results of calling the provided function on every element in the original array, without modifying the original array.

// The important thing to remember is you will get back an arra of the same length as the arry you call map on. The .map() method takes a callback function as an argument. This function is applied to each element of the array. The original array remains unchanged. The callback function passed to the .map() method call can transform each element in any way needed, as long as it returns a value.

// The .map() method takes a callback function as an argument. This function is applied to each element of the array.

// The callback function can accept three arguments:
// 1. Current Value: The current element being processed in the array. (We often call this e or element, and it's often the only parameter in the callback.)
// 2. Index (optional): The index of the current element being processed in the array.
// 3. Array (optional): The array on which .map() was called.
// Return Value: The callback function should return the transformed value, which will be included in the new array.


// 1. Write a function doubleNumbers that takes an array of numbers and returns a new array where each number is doubled.

function doubleNumbers(arr) {
    return arr.map(num => num * 2)
}

console.log(doubleNumbers([1, 2, 3, 4,]))

// 2. Write a function toUpperCaseArray that takes an array of strings and returns a new array where each string is converted to uppercase.

function toUpperCaseArray(arr) {
    return arr.map(string => string.toUpperCase())
}

console.log(toUpperCaseArray(["hello", "world"]))

// 3. Write a function nameLengths that takes an array of names (strings) and returns a new array with the lengths of each name.

function nameLengths(arr) {
    return arr.map(string => string.length)
}

console.log(nameLengths(["Alice", "Bob", "Charlie"]))

// 4. Write a function addExclamation that takes an array of strings and returns a new array where each string has an exclamation mark added to the end.

function addExclamation(arr) {
    return arr.map(string => string += '!')
}

console.log(addExclamation(["wow", "hello", "amazing"]))

// 5. Write a function squareNumbers that takes an array of numbers and returns a new array where each number is squared.

function squareNumbers(arr) {
    return arr.map(num => num * num)
}

console.log(squareNumbers([1, 2, 3, 4]))

// 6. Write a function calculateAges that takes an array of birth years and returns a new array with the corresponding ages based on the current year.

function calculateAges(arr) {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    return arr.map(year => currentYear - year)
}

console.log(calculateAges([1990, 2000, 1985]))

// 7. Write a function addPrefix that takes an array of strings and a prefix string, and returns a new array where each string has the prefix added to the beginning.

function addPrefix(arr, prefix) {
    return arr.map(string => prefix + string)
}

console.log(addPrefix(["dog", "cat", "bird"], "pet-"))

// 8. Write a function extractInitials that takes an array of full names (strings) and returns a new array with the initials of each name.

function extractInitials(arr) {
    return arr.map(string => {
        const tempArr = string.split(" ")
        return tempArr[0][0]+tempArr[1][0]
    })
}

console.log(extractInitials(["John Doe", "Jane Smith", "Alice Johnson"]))

// 9. Write a function filterAndSquareEven that takes an array of numbers, filters out the odd numbers, and returns a new array where the remaining even numbers are squared. 
function filterAndSquareEven(arr) {
    return arr.filter(num => num % 2 === 0).map(num => num * num)
}

console.log(filterAndSquareEven([1, 2, 3, 4, 5, 6]))

// 10. Write a function convertToObjectArray that takes an array of strings and returns a new array of objects, where each object has a single key name with the corresponding string as its value.

function convertToObjectArray(arr) {
    return arr.map(name => {
        return { name: name }
    })
}

console.log(convertToObjectArray(["Alice", "Bob", "Charlie"]))