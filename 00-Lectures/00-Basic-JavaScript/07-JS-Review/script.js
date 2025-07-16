// Functions and loops and conditionals ==============================================
// Write a function called maxNumber that takes two numbers as parameters and returns the larger of the two.

// Output: a number represting the largest of the two passed numbers. If the numbers are equal, a string that says "Numbers are equal."
// Input: two numbers

// Examples: (7, 8) => 8; (10, 5) => 10; (7, 7) => "The numbers are even" (10)

function maxNumber(num1, num2) {
  // 1. check if num1 is greater num2
  if (num1 > num2) {
    // a. if it is return num1
    return num1;
    // 2. Else if num2 is greater than num1
  } else if (num2 > num1) {
    // a. Return num2
    return num2;
  } else {
    return "Not applicable.";
  }
}

console.log(maxNumber(7, 8));
console.log(maxNumber(10, 5));
console.log(maxNumber(7, 7));
console.log(maxNumber(7));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Write a function called sumOfSquares that takes two numbers as parameters and returns the sum of their squares.

// Output: A number representing the sum of the squares of two numbers.

// Input: Two numbers

// Sample inputs and outputs: (2, 8) => 68; (1, 3) => 10; (-2, 8) => 68;

function sumOfSquares(num1, num2) {
   
  // 1. multiply num1 * num1
  // 2. mutiliy num2 * num2
  // 3. add result of multiplication together 
  // 4. return result of step 3.
  
  // 5. Add squareNum1 to squareNum2
  // 6. Return result of addition in step 5.
  return Math.pow(num1, 2) + Math.pow(num2, 2)
}

console.log(sumOfSquares(2, 8))
console.log(sumOfSquares(1, 3))
console.log(sumOfSquares(-2, 8))
console.log(sumOfSquares(100, 150))
let result = Math.pow(2, 2) + Math.pow(8, 2)
// Write a function called listOfSquares that takes an array of numbers and returns the square of each number.

// Counting with objects and dynamic access ==========================================================
// Write a function that takes an array as input and returns a dictionary with the count of each unique item in the array. The items in the array will always be strings or numbers. For instance, if the input is ["dog", "cat", "cat", "dog", "bear"], the function should output { dog: 2, cat: 2, bear: 1 }.

// Output: An object representing the count of each unique item in the array.

// Input: is going to be an array of strings or numbers

// Sample values: [1, 1, 2, 2, 3] => {1:2, 2:2, 3:1}; ["Mars Bar", "Snickers", "Twix"] => { "Mars Bar": 1, "Snickers": 1, "Twix": 1 }
  
function arrayDictionary(arr) {
    // 1. Declare variable obj and Initialize it to {}
    const obj = {};
    // 2. Iterate through arr
    for (const item of arr) {
        // 3. For each item, check if obj has a property for that item
        if (!obj.hasOwnProperty(item)) {
            // a. add 1 to value of obj[item]
            obj[item] = 1
        } else {
            // b. create property obj[item] and assign a value of 1
            obj[item]++
        }  
    }
    // 4. Return obj with count of unique items.
    return obj
}

console.log(arrayDictionary(["dog", "cat", "cat", "dog", "bear"]))

console.log(arrayDictionary([1, 1, 2, 2, 3]))

console.log(arrayDictionary(["Mars Bar", "Snickers", "Twix"]))


