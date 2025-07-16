// 1. Power calculation: Write a recursive function that calculates the result of raising a given base to a specified exponent. For example, (2, 3) => 8 ================================================
function power(base, exponent) {
  // Base case: If the exponent is 0, return 1
  if (exponent === 0) {
    return 1;
  } else {
    // Recursive case: Multiply the base by the result of the recursive call with a decremented exponent
    return base * power(base, exponent - 1);
  }
}

// Example usage
console.log(power(2, 3)); // Output: 8

// Step 1:
// First Example: power(2, 3)
// Explanation: The function is called with base = 2 and exponent = 3.
// Recursive Call: base * power(base, exponent - 1)
// 2 * power(2, 2)
// Step 2:
// Second Example: power(2, 2)
// Explanation: The function is called recursively with base = 2 and exponent = 2.
// Recursive Call: base * power(base, exponent - 1)
// 2 * power(2, 1)
// Step 3:
// Third Example: power(2, 1)
// Explanation: The function is called recursively with base = 2 and exponent = 1.
// Recursive Call: base * power(base, exponent - 1)
// 2 * power(2, 0)
// Step 4:
// Fourth Example: power(2, 0)
// Base Case: Since exponent is 0, the base case is reached.
// Result: The base case returns 1.
// Step 5:
// Backtracking: The recursive calls start to unwind, combining results:
// 2 * power(2, 0) returns 2 * 1 = 2
// 2 * power(2, 1) returns 2 * 2 = 4
// 2 * power(2, 2) returns 2 * 4 = 8
// power(2, 3) returns 8


// 2. Sum of Digits: Write a recursive function to find the sum of the digits of a given positive integer. For example (123) => 6 =================================================
function sumOfDigits(n) {
  // Base case: If n is a single digit, return it
  if (n < 10) {
    return n;
  } else {
    // Recursive case: Sum the last digit and recurse with the rest of the digits. The modulus operator (%) is used in the sumOfDigits function to extract the last digit of the number n. The expression n % 10 gives the remainder when n is divided by 10, effectively isolating the last digit. This operation is used to obtain the rightmost digit of a number. The combination of n % 10 and Math.floor(n / 10) helps break down the original number n into its individual digits for the recursive summation in the sumOfDigits function. The recursive call processes each digit one by one until the base case is reached.
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
  }
}

// Example usage
console.log(sumOfDigits(123)); // Output: 6

// Step 1:
// Input: n = 123
// Operation: n % 10
// Explanation: 123 % 10 essentially removes the right-most digit, which is 3. Allowing the recursive call to sumOfDigits(12) with the remaining digits.
// Step 2:
// Input: n = 123
// Operation: Math.floor(n / 10)
// Explanation: Math.floor(123 / 10) removes the rightmost digit, resulting in 12.
// Step 3:
// Recursive Call: sumOfDigits(12)
// Explanation: The function is called recursively with the remaining part (12).
// Step 4:
// Input: n = 12
// Operation: n % 10
// Explanation: 12 % 10 gets rid of the rightmost digit, which is 2.
// Step 5:
// Input: n = 12
// Operation: Math.floor(n / 10)
// Explanation: Math.floor(12 / 10) removes the rightmost digit, resulting in 1.
// Step 6:
// Recursive Call: sumOfDigits(1)
// Explanation: The function is called recursively with the remaining part (1).
// Step 7:
// Input: n = 1
// Operation: n % 10
// Explanation: 1 % 10 gives the rightmost digit, which is 1.
// Step 8:
// Here we are in our base case so it will return 1.

// sumOfDigits(1) returns 1
// sumOfDigits(12) returns 2 + 1 = 3
// sumOfDigits(123) returns 3 + 3 = 6
// Final Result:
// Output: The final result for sumOfDigits(123) is 6.








