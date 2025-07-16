// [USED JULY 8]COUNT DIFFERENCE
// ================================================================================
// Given an array of distinct integers, count the number of pairs of integers that have a difference of k.

// SAMPLE SOLUTIONS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Input: An array of integers, and a single integer k. The array of integers will not be empty and will have at least one pair of integers.

// Output: The number of pairs of integers in the array that have a difference of k.

// Example
// Input: [1, 7, 5, 9, 2, 12, 3], 2 => Output: 4; [12, 17, 19, 11, 15, 3, 5, 1, 2, 10], 5 => Output: 6

// Algorithm
// 1. Initialize a variable count to 0
// 2. Iterate through the array
// 3. For each element in the array, iterate through the array again
// 4. If the absolute value of the difference between the two elements is equal to k, increment count
// 5. Return count

function countPairs(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === k) {
        count++;
      }
    }
  }
  return count;
}

console.log(countPairs([1, 7, 5, 9, 2, 12, 3], 2)); // 4

// Time complexity: O(n^2)

// Optimized solution
// Algorithm
// 1. Initialize a variable count to 0
// 2. Create a set from the array
// 3. Iterate through the array
// 4. If the set contains the current element + k, increment count
// 5. Return count

// function countPairsOptimized(arr, k) {
//   let count = 0;
//   let set = new Set(arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (set.has(arr[i] + k)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countPairsOptimized([1, 7, 5, 9, 2, 12, 3], 2)); // 4

// Time complexity: O(n)

// Another optimized solution
// Algorithm
// 1. Initialize a variable count to 0
// 2. Initialize an empty object
// 3. Iterate through the array
// 4. Create property on object for each element in the array
// 5. Iterate over properties in the object
// 5. If the object contains the current element + k, increment count
// 6. Return count

// function countPairsAnotherOptimized(arr, k) {
//   let count = 0;
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = true;
//   }
//   for (let prop in obj) {
//     if (obj[Number(prop) + k]) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countPairsAnotherOptimized([1, 7, 5, 9, 2, 12, 3], 2)); // 4

// Time complexity: O(n)

//[USED July 1] UNDERGROUND MIN ===============================================================
// The Supreme Court has declared JavaScript's Math.min method unconstitutional. But we're rebels. We're going to keep finding the minimum value of a group of numbers. Implement your own function. The function should take 0 or more numbers and return the lowest.
// Constraints:
// Return NaN if either of the arguments is not a number.
// Treat null as 0.
// If the arguments are empty, return Infinity.

// Input: 0 or more numbers.
// Output: A number that is the lowest of the input numbers.
// Examples:
// min(1, 2, 3, 4, 5) => 1
// min(1) => 1
// min() => Infinity
// min(1, 'a') => NaN
// Algorithm
// 1. If there are no arguments, return Infinity
// 2. Create a variable to store the minimum number
// 3. Iterate through the arguments
// 4. If the current argument is not a number, return NaN
// 5. If the current argument is null, set it to 0
// 6. If the current argument is less than the minimum number, set the minimum number to the current argument
function min(...args) {
  if (args.length === 0) {
    return Infinity;
  }
  let min = args[0];
  for (const num of args) {
    if (typeof num !== "number") {
      return NaN;
    }
    if (num === null) {
      num = 0;
    }
    if (num < min) {
      min = num;
    }
  }
  return min;
}
console.log(min(1, 2, 3, 4, 5)); // 1
console.log(min(1)); // 1
console.log(min()); // Infinity
// Time complexity: O(n)

// Another solution
function min(...args) {
  if (args.length === 0) {
    return Infinity;
  }
  return args.reduce((min, num) => {
    if (typeof num !== "number") {
      return NaN;
    }
    if (num === null) {
      num = 0;
    }
    return num < min ? num : min;
  }, args[0]);
}
// Time complexity: O(n)

// [USED JUNE 26] MAXIMUM GAP =====================================================================================
//
// Find the maximum difference between two elements in a sorted array.
// Constraints:
// The array will have at least two elements.
// The numbers in the array will be unique.
// The numbers in the array will be positive.
// Input: An array of integers.
// Output: An integer that is the maximum difference between two elements in the array.
// Examples:
// maxGap([1, 3, 5, 6, 8]) => 2
// maxGap([1, 10, 5]) => 5
// maxGap([1, 100, 5]) => 95
// Algorithm
// 1. Sort the array
// 2. Create a variable to store the maximum difference
// 3. Iterate through the array
// 4. Find the difference between the current element and the next element
// 5. If the difference is greater than the maximum difference, set the maximum difference to the difference
// 6. Return the maximum difference
function maxGap(numbers) {
  numbers.sort((a, b) => a - b);
  let maxDiff = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    const diff = numbers[i + 1] - numbers[i];
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }
  return maxDiff;
}
console.log(maxGap([1, 3, 5, 6, 8])); // 2
console.log(maxGap([1, 10, 5])); // 5
console.log(maxGap([1, 100, 5])); // 95
// Time complexity: O(n log n)

// Another solution
function maxGap(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers.reduce((maxDiff, num, i) => {
    const diff = numbers[i + 1] - num;
    return diff > maxDiff ? diff : maxDiff;
  }, 0);
}
// Time complexity: O(n log n)

// Another solution
const maximumGap = function (nums) {
  const n = nums.length;
  // Early exit if the array has less than 2 elements
  if (n < 2) {
    return 0;
  }
  // Early exit if the array has 2 elements
  if (n < 3) {
    return Math.abs(nums[0] - nums[1]);
  }
  // Find the maximum and minimum numbers in the array
  let maxNum = -Infinity;
  let minNum = +Infinity;
  // Iterate through the array to find the maximum and minimum numbers
  for (let i = 0; i < n; i++) {
    maxNum = Math.max(maxNum, nums[i]);
    minNum = Math.min(minNum, nums[i]);
  }
  // If the maximum and minimum numbers are the same, return 0
  if (maxNum === minNum) {
    return 0;
  }
  // Create a variable to store the number of buckets
  const k = n - 1;
  const averageGap = (maxNum - minNum) / k;
  // Create arrays to store the minimum and maximum numbers in each bucket
  const minBuckets = new Array(k);
  const maxBuckets = new Array(k);
  // Initialize the first and last buckets
  minBuckets[0] = minNum;
  maxBuckets[0] = minNum;
  // Set min and max for the first and last buckets
  minBuckets[k - 1] = maxNum;
  maxBuckets[k - 1] = maxNum;
  // Iterate through the array to find the minimum and maximum numbers in each bucket
  for (let i = 0; i < n; i++) {
    // Skip the minimum and maximum numbers
    if (minNum === nums[i] || nums[i] === maxNum) {
      continue;
    }
    // Find the index of the current number in the array
    const j = Math.floor((nums[i] - minNum) / averageGap);
    // Update the minimum and maximum numbers in the bucket
    minBuckets[j] = minBuckets[j] ? Math.min(minBuckets[j], nums[i]) : nums[i];
    maxBuckets[j] = maxBuckets[j] ? Math.max(maxBuckets[j], nums[i]) : nums[i];
  }
  // Declare variables to store the largest gap and the previous maximum index
  let largestGap = 0;
  let prevMaxIndex = 0;
  // Iterate through the buckets to find the largest gap
  for (let i = 1; i < n - 1; i++) {
    if (minBuckets[i]) {
      largestGap = Math.max(
        largestGap,
        minBuckets[i] - maxBuckets[prevMaxIndex]
      );
    }
    if (maxBuckets[i]) {
      prevMaxIndex = i;
    }
  }
  // Return the largest gap
  return largestGap;
};
console.log(maximumGap([1, 3, 5, 6, 8])); // 2
console.log(maximumGap([1, 10, 5])); // 5
console.log(maximumGap([1, 100, 5])); // 95
// Time complexity: O(n)

// [USED JULY 3] PRODUCT OF MAXIMUMS OF ARRAY ==========================================================
// Given an array of integers, find the product of the k maximal numbers.

// Input: An array of numbers
// Output: A number that is the product of the k largest numbers in the array

// Examples
// ([1, 2, 3], 2) => 6
// ([4,3,5], 2) => 20
// ([10,8,7,9], 3), 720)
// ([8,6,4,6], 3), 288)
// ([10,2,3,8,1,10,4], 5), 9600)
// ([13,12,-27,-302,25,37,133,155,-14], 5)

// Algorithm:
// 1. Initialize const product to 1
// 1. Sort the array largest to smallest
// 2. Iterate through sorted array from start to k
// 3. Using compound multiplication multiply each integer by product
// 4. Return product
function maxProduct(arr, k) {
  let product = 1;
  const sortedArr = arr.sort((a, b) => b - a);
  console.log(sortedArr);
  for (let i = 0; i < k; i++) {
    product *= sortedArr[i];
  }
  return product;
}
console.log(maxProduct([4, 3, 5], 2));
console.log(maxProduct([10, 8, 7, 9], 3));
console.log(maxProduct([8, 6, 4, 6], 3));
console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5));
console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5));
// Time complexity: O(n log n)
// Another solution
function maxProduct(numbers, size) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((acc, n) => acc * n);
}
// Time complexity: O(n log n)
// Another solution
function maxProduct(numbers, size) {
  return [...numbers]
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((produce, num) => produce * num, 1);
}
// Time complexity: O(n log n)
console.clear();
// [USED JULY 3]MINIMUM STEPS ==========================================================
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
// Constraint:
// Array size is at least 3.
// All numbers will be positive.
// Numbers could occur more than once.
// K will always be reachable.

// Input: Array of positive integers, and a number.
// Output: A number counting the amount of steps it takes to add the smallest numbers in the array to reach or exceed K.
// Examples
// ([4, 6, 3], 7)) => 1
// ([10, 9, 9, 8], 17) => 1
// ([8, 9, 10, 4, 2], 23) => 3
// ([19, 98, 69, 28, 75, 45, 17, 98, 67], 464) => 8
// ([4, 6, 3], 2) => 0
// Algorithm
// 1. Sort the array
// 2. Create a variable to store the sum
// 3. Create a variable to store the number of steps
// 4. Iterate through the array
// 5. Add the current number to the sum
// 6. Increment the number of steps
// 7. If the sum is greater than or equal to K, return the number of steps
function minimumSteps(numbers, value) {
  const sortedArr = numbers.sort((a, b) => a - b);
  let sum = sortedArr[0];
  let steps = 0;
  for (let i = 1; i < sortedArr.length; i++) {
    if (sum >= value) {
      break;
    }
    sum += sortedArr[i];
    steps++;
  }
  return steps;
}
console.log(minimumSteps([4, 6, 3], 7)); // 1 [3, 4, 6]
console.log(minimumSteps([10, 9, 9, 8], 17)); // 1
console.log(minimumSteps([8, 9, 10, 4, 2], 23)); // 3
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)); // 8
console.log(minimumSteps([4, 6, 3], 2)); // 0
// Time complexity: O(n log n)
// Another solution
function minimumSteps(numbers, value) {
  return numbers.sort((a, b) => a - b).filter((e, i) => (value = value - e) > 0)
    .length;
}
// Time complexity: O(n log n)
// Another solution
function minimumSteps(numbers, value) {
  let arr = numbers.sort((a, b) => a - b);
  for (i = 0; i < arr.length; i++) {
    if (arr.slice(0, i + 1).reduce((a, b) => a + b, 0) >= value) {
      return i;
    }
  }
  return i;
}
// Time complexity: O(n^2)

// [USED June 26] REMOVE NOISE FROM A STRING ==============================================================
// Given a string containing both letters and numbers, remove all the numbers from the string.
// Constraints:
// The string will contain at least one character.
// The string will contain at most 100 characters.
// The string will contain only letters and numbers.
// Input: A string containing both letters and numbers.
// Output: A string containing only letters, or undefined if there are no letters in the string.
// Examples:
// removeNumbers('a1b2c3') => 'abc'
// removeNumbers('1a2b3c') => 'abc'
// removeNumbers('123') => undefined
// Algorithm
// 1. Initialize const str = '';
// 2. Iterate through input string.
// a. check each character to see if it includes a number.
// a1. If it does not, use compound addition to add character to str
// 3. Return str
function removeNums(string) {
  let str = "";
  const pattern = /[0-9]/;
  for (const char of string) {
    if (!pattern.test(char)) {
      str += char;
    }
  }
  return str ? str : "undefined";
}
console.log(removeNums("a1b2c3"));
console.log(removeNums("123"));
console.log(removeNums("1a2b3c"));
console.log(removeNums("abc55"));
// Time complexity: O(n)
// Another solution
function removeNumbers(string) {
  return string.replace(/[0-9]/g, "");
}
// Time complexity: O(n)
// Another solution
function removeNumbers(string) {
  return string
    .split("")
    .filter((char) => isNaN(char))
    .join("");
}
// Time complexity: O(n)
console.clear();
// [USED July 2] PRODUCT OF MAXIMUMS OF ARRAY ==========================================================
// Given an array of integers, find the product of the k maximal numbers.

// Input: An array of numbers and a number (k)
// Output: A number that is the product of the k largest numbers in the array
// Examples
// ([1, 2, 3], 2) => 6
// ([4,3,5], 2) => 20
// ([10,8,7,9], 3), 720)
// ([8,6,4,6], 3), 288)
// ([10,2,3,8,1,10,4], 5), 9600)
// ([13,12,-27,-302,25,37,133,155,-14], 5)
// Algorithm:
// 1. Initialize const product to 1
// 1. Sort the array largest to smallest
// 2. Iterate through sorted array from start to k
// 3. Using compound multiplication multiply each integer by product
// 4. Return product
function maxProduct(arr, k) {
  let product = 1;
  const sortedArr = arr.sort((a, b) => b - a);
  console.log(sortedArr);
  for (let i = 0; i < k; i++) {
    product *= sortedArr[i];
  }
  return product;
}
console.log(maxProduct([4, 3, 5], 2));
console.log(maxProduct([10, 8, 7, 9], 3));
console.log(maxProduct([8, 6, 4, 6], 3));
console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5));
console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5));
// Time complexity: O(n log n)
// Another solution
function maxProduct(numbers, size) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((acc, n) => acc * n);
}
// Time complexity: O(n log n)
// Another solution
function maxProduct(numbers, size) {
  return [...numbers]
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((produce, num) => produce * num, 1);
}
// Time complexity: O(n log n)
console.clear();
// [USED JULY 3]MINIMUM STEPS ==========================================================
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
// Constraint:
// List size is at least 3.
// All numbers will be positive.
// Numbers could occur more than once.
// K will always be reachable.

// Input: Array of positive integers, and a number.
// Output: A number counting the amount of steps it takes to add the smallest numbers in the array to reach or exceed K.
// Examples
// ([4, 6, 3], 7)) => 1
// ([10, 9, 9, 8], 17) => 1
// ([8, 9, 10, 4, 2], 23) => 3
// ([19, 98, 69, 28, 75, 45, 17, 98, 67], 464) => 8
// ([4, 6, 3], 2) => 0
// Algorithm
// 1. Sort the array
// 2. Create a variable to store the sum
// 3. Create a variable to store the number of steps
// 4. Iterate through the array
// 5. Add the current number to the sum
// 6. Increment the number of steps
// 7. If the sum is greater than or equal to K, return the number of steps
function minimumSteps(numbers, value) {
  const sortedArr = numbers.sort((a, b) => a - b);
  let sum = sortedArr[0];
  let steps = 0;
  for (let i = 1; i < sortedArr.length; i++) {
    if (sum >= value) {
      break;
    }
    sum += sortedArr[i];
    steps++;
  }
  return steps;
}
console.log(minimumSteps([4, 6, 3], 7)); // 1 [3, 4, 6]
console.log(minimumSteps([10, 9, 9, 8], 17)); // 1
console.log(minimumSteps([8, 9, 10, 4, 2], 23)); // 3
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)); // 8
console.log(minimumSteps([4, 6, 3], 2)); // 0
// Time complexity: O(n log n)
// Another solution
function minimumSteps(numbers, value) {
  return numbers.sort((a, b) => a - b).filter((e, i) => (value = value - e) > 0)
    .length;
}
// Time complexity: O(n log n)
// Another solution
function minimumSteps(numbers, value) {
  let arr = numbers.sort((a, b) => a - b);
  for (i = 0; i < arr.length; i++) {
    if (arr.slice(0, i + 1).reduce((a, b) => a + b, 0) >= value) {
      return i;
    }
  }
  return i;
}
// Time complexity: O(n^2)

// [USED JULY 9](DON'T) MAKE ME REPEAT MYSELF ==========================================================================

// There's a built-in function called repeat on strings. It repeats the given string N times.

// 'a'.repeat(3) => 'aaa'
// 'around the world '.repeat(2) => 'around the world around the world'

// Now imagine this function wasn't built-in. Can you implement it yourself?
String.prototype.repeat = function (count) {
  let newString = "";
  while (count > 0) {
    newString += this;
    count--;
  }
  return newString;
};

console.log("a".repeat(3));
console.log("abc".repeat(3));
console.log("todd".repeat(2));

// With a for loop
// String.prototype.repeat = function(count) {
//   let newString = "";
//   for (let i = 0; i < count; i++) {
//     newString += this;
//   }
//   return newString;
// };

// With the array constructor
// String.prototype.repeat = function(count) {
//   return new Array(count + 1).join(this);
// };

// console.log("a".repeat(3)); // Output: "aaa"

// Using .reduce()

// Recursive approach
// String.prototype.repeat = function(count) {
//   if (count <= 0) return "";
//   if (count === 1) return this;
//   let half = Math.floor(count / 2);
//   let halfString = this.repeat(half);
//   return halfString + halfString + (count % 2 === 1 ? this : "");
// };

// console.log("a".repeat(3)); // Output: "aaa"

// Time complexity O(n)
// Space complexity O(n), althogh the recursive method can be inefficient due to stack overhead

// [STILL WORKING DON'T USE] SUM THE REPEATS===========================================================================
// Write a function that takes an array comprised of other arrays of integers and returns the sum of all numbers that appear in two or more arrays in the input array.

// Input: An array of arrays with integers
// Output: An integer reflecting the sum of those integers that appear in more than one sub-array.

// Example inputs and outputs
// repeat_sum([[1, 2, 3],[2, 8, 9],[7, 123, 8]])
// >>> sum of [2, 8] => 10

// repeat_sum([[1], [2], [3, 4, 4, 4], [123456789]])
// >>> sum of [] => 0

// repeat_sum([[1, 8, 8], [8, 8, 8], [8, 8, 8, 1]])
// >>> sum of [1,8] => 9

// function repeatSum(arr) {
//   // Step 1: Flatten the input array
//   let flatArr = arr.flat();

//   // Step 2: Initialize the count object
//   let count = {};

//   // Step 3: Iterate through the flattened array
//   flatArr.forEach(num => {
//     // Step 4: Increment the count for each number
//     if (count[num]) {
//       count[num]++;
//     } else {
//       count[num] = 1;
//     }
//   });

//   // Step 5: Initialize the sum variable
//   let sum = 0;

//   // Step 6: Iterate through the count object
//   for (let num in count) {
//     // Step 7: If the count is greater than 1, add the number to the sum
//     if (count[num] > 1) {
//       sum += parseInt(num);
//     }
//   }

//   // Step 8: Return the sum
//   return sum;
// }

// // Test cases
// console.log(repeatSum([[1, 2, 3], [2, 8, 9], [7, 123, 8]])); // Output: 10
// console.log(repeatSum([[1], [2], [3, 4, 4, 4], [123456789]])); // Output: 0
// console.log(repeatSum([[1, 8, 8], [8, 8, 8], [8, 8, 8, 1]])); // Output: 9

// 3. [USED July 11 by dev Harris]TRUE FOR ALL ===============================================================================================================================
// Write a function that takes two arguments, a sequence and a function, and returns true if the passed function returns true for everey element in the sequance. Otherwise, it should return false.

// - Constraints
// If the sequence is empty, it should return true, since nothing is false in the sequence.

// Algorithm
// Initialize result to true
// Iterate through sequence, calling passed function on each element in sequence
// If passed function returns false, result = false
// Return result

function all(arr, fun) {
  // for (const element of arr) {
  //   if (!fun(element)) {
  //     return false
  //   }
  // }
  // return true

  let result = arr.map(fun);
  console.log(result);
  if (result.includes(false)) {
    return false;
  } else {
    return true;
  }
}

// OTHER SOLUTIONS
// function all( arr, fun ){
//   return arr.every(fun)
// }

// function all( arr, fun ){
//   let array = [];
//     for(let i=0; i< arr.length; i++){
//       if(fun(arr[i])){
//         array.push(arr[i])
//       }
//     }
//     if(arr.length === array.length){
//       return true
//     }

//     return false;
//   }

function isNonEmptyString(element) {
  return element !== "";
}

console.log(all(["a", "b", "c"], isNonEmptyString)); // true
console.log(all(["a", "", "c"], isNonEmptyString)); // false
console.log(all(["", "", ""], isNonEmptyString)); // false

// [FOR 071524] Write a function that takes an array of numbers and returns a new array with all the duplicate numbers removed.

// Input Size: Assume the input array can be of any length, but you should aim for a solution that is efficient in terms of both time and space complexity.
// Order Preservation: The order of elements in the output array should be the same as their first occurrence in the input array.
// Data Types: The array will only contain numbers, so you don’t need to handle other data types.

// Input: An array of numbers, which may contain duplicative numbers
// Output: An array of numbers that contains all of the same nubmers as those in the input array but does not contain duplicative numbers. The numbers in the input should be in the same order they were in the passed array.

// Algorithm
// 1. Initialize resultArray to an empty array
// 2. Iterate through arr, for each num in arr
// 2a. Check if num is in resultArray
// 2aa. If it is not, push num into result array
// 3. Return resultArray

function removeDuplicates(arr) {
  const resultArray = [];
  for (const num of arr) {
    if (!resultArray.includes(num)) {
      resultArray.push(num);
    }
  }
  return resultArray;
}

// Algorithm
// 1. Turn the passed array into a Set, which will eliminate duplicates
// 2. Turn the set back into an array
// 3. Return the array

// function removeDuplicates(arr) {
//   return [... new Set(arr)]
// }

console.log(removeDuplicates([1, 2, 2, 3, 8, 8, 4, 4, 9])); //[1, 2, 3, 8, 4, 9]
console.log(removeDuplicates([7]));
console.log(removeDuplicates([]));

//[USED JULY 17 DEVELOPER LEODIS] 4. DESCENDING ORDER ====================================================================================================================
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Input a multi-digit number
// Output: A new multi-digit number made by rearranging the the digits of the input to start with the largest number and move to the next largest, etc.

// Examples
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// Algorithm
// Initialize arrString to num split turned into a string and split into an array of strings.
// Iterate through arrString to convert each value back to a number, store this in arrNum
// Sort arrNum from greatest to smallest
// Join arr num
// Parse the value back to a number and return it

function descendingOrder(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log(descendingOrder(42145)); //54421
console.log(descendingOrder(145263)); //654321
console.log(descendingOrder(123456789)); //987654321

// console.clear()

// [FOR 071924] Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Algorithm
// Flatten the array
// Sort the flattened array
// Return the sorted array

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}

// Another solution
// function flattenAndSort(array) {
//   var newArray = [];
//   for(var i =0;i<array.length;i++)
//   {
//     for(var j=0;j<array[i].length;j++)
//     {
//       newArray.push(array[i][j]);
//     }
//   }

//   return newArray.sort((a,b) =>  a-b);
// }

// console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))

// 4. [used 072424 with developer Sullivan] COUNT THE DIGIT =====================================================================================================
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
// Square all numbers k (0 <= k <= n) between 0 and n.
// Count the numbers of digits d used in the writing of all the k**2.
// Implement the function taking n and d as parameters and returning this count.

// Input: Two numbers. N will be a number representing the upperbound (inclusive) of the numbers to square and D will be a digit to look for in the result of squaring all numbers up through N
// Output: A number representing the count of times d appears in numbers squared up through n.

// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// NOTE that 121 has twice the digit 1.

// N = 3 and d = 1
// 1*1 = 1, 2*2 = 4, 3*3 = 9
// There is one 1 in these results. Therefore count = 1

// Algorithm
// 1. Initialize count to 0.
// 2. Iterate through numbers from 0 to n (inclusive):
//  2a. Square each number.
//  2b. Convert the squared number to a string.
//  2c. Iterate through each character of the string:
//    2aa. If the character matches the digit d, increment count.
// Return count.

function nbDig(n, d) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    const squared = i * i;
    const squaredStr = squared.toString();
    for (const char of squaredStr) {
      if (char === d.toString()) {
        count++;
      }
    }
  }
  return count;
}



// Other solutions
// function nbDig(n, d) {
//   var res = 0;
//   for (var g = 0; g <= n; g++) {
//     var square = (g * g + "").split("");
//     square.forEach((s) => (s == d ? res++ : null));
//   }
//   return res;
// }

// function nbDig(n, d) {
//   var o = '';
//     for(var i = 0; i <= n; i++){
//       o += Math.pow(i, 2);
//     }
//   return o.split(d).length-1
// }

// function nbDig(n, d) {
//   let count = '';
//   const re = RegExp(d, 'g');
//   for (let i = 0; i <= n; i++){
//     count += i**2;
//   }
//   return count.match(re).length;  
// }

console.log(nbDig(5750, 0)); // Should return the correct count of digits 0
console.log(nbDig(5750, 0)) //4700

//[USED 072324 with Developer Beatty] 5. HELP BOB COUNT LETTERS AND DIGITS

// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Input: A string comprised of letters, digits and symbols
// Output: A number representing the total of digits and letters in the string.

// Examples:
// "hel2!lo" --> 6
// "wicked .. !" --> 6
// "!?..A" --> 1

// Algorithm
// Initialize newString to ""
// Iterate through passed string
  // Check if each character is a digit or a letter
    // Concatinate into newString with compound concatenation
// Return newString.length

function countLettersAndDigits(str) {
  let newString = ""
  let pattern = /[a-zA-Z0-9]/
  for (const char of str) {
    if (pattern.test(char)) {
      newString += char
    }
  }
  return newString.length
} 

// Other solutions
// function countLettersAndDigits(s) {
//   return s.replace(/[^a-z\d]/gi,"").length;
// }

// const countLettersAndDigits = input => input.replace(/[\W_]/g, ``).length;

// function countLettersAndDigits(input) {
//   return (input.match(/[a-z0-9]/gi) || []).length
// }

// If needed ASCII codes
// lowercase: 97-122
// UPPERCASE: 65-90
// Digits: 48-57

// Solution using ASCII
function countLettersAndDigits(input) {
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);

    if (
      (charCode >= 65 && charCode <= 90) || // Uppercase letters A-Z
      (charCode >= 97 && charCode <= 122) || // Lowercase letters a-z
      (charCode >= 48 && charCode <= 57) // Digits 0-9
    ) {
      count++;
    }
  }

  return count;
}

// Test examples
console.log(countLettersAndDigits("hel2!lo")); // 6
console.log(countLettersAndDigits("wicked .. !")); // 6
console.log(countLettersAndDigits("!?..A")); // 1

// [Used 072924 Developer Roof] 8. DIGITIZED REVERSE ==================================================================================
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Input: A random non-negative number
// Output: An array of digits from the random number in reverse order

// Examples
// 35231 => [1,3,2,5,3]
// 0 => [0]

// Algorithm
// 1. Initialize numArr to empty array
// 2. Parse the number into string
// 3. reverse string
// 4. Iterate through string, parsing each character back into a number
// 5. Push numbers into numArr
// 6. Return numArr


function digitize(n) {
  const numArr = []
  const numString = n.toString().split("").reverse()
  for (const char of numString) {
    numArr.push(parseFloat(char))
  }
  return numArr
}

// Other solutions
// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }

// function digitize(n) {
//   return Array.from(String(n), Number).reverse();
// }

// function digitize(n){
//   return (n + '').split('').map(Number).reverse();
// }

console.log(digitize(35231))
console.log(digitize(0))

console.clear()
console.log(Number("123"))

function Reverse(num) {
  let finalArr = []
  let str = num.toString().split("")
  str.reverse()
  for (let i = 0; i < str.length; i++) {
    let num = Number(str[i])
    finalArr.push(num)
  }
  return finalArr
}

console.log(Reverse(123))

// [USED AUG 13: Sullivan and Hice]3. TRUE FOR JUST ONE ========================================================================
// Create a function called one that accepts two params:

// - a sequence
// - a function
// and returns true only if the() function in the params returns true for exactly one (1) item in the sequence.

// Input: an array and a function
// Output: Booolean indicating whether the passed function returns true for exactly one element in the array.

// Examples
// one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten) -> true
// one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten) -> false
// one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten) -> false

// Algorithm
// Initialize count to 0
// Iterate through arr
// Call fun on each element
// If fun(element) returns true
// Increment count
// return count === 1

function one(arr, fun) {
  let count = 0;
  for (const element of arr) {
    if (fun(element)) {
      count++;
    }
    if (count > 1) {
      return false;
    }
  }
  return count === 1;
}

// Other solutions
// const one = (arr, fun) => arr.filter(fun).length === 1;

// function one(arr, fun){
//   let qtyTrue = 0, i = 0;

//   // if qtyTrue is >= two, for loop stop and don't run anymore
//   while (qtyTrue < 2 && i < arr.length) {
//     if (fun(arr[i])) {
//       qtyTrue += 1;
//     }
//     i += 1;
//   }

//   return qtyTrue === 1;
// }

// function one(arr, fun) {

//   let found = false;

//   for (let el of arr) {
//     if (fun(el)) {
//       if (found)
//         return false;
//       else
//         found = true;
//     }
//   }

//   return found;

// }

console.log(one([1, 3, 5, 6, 99, 1, 3], (e) => e > 10));
console.log(one([1, 3, 5, 6, 99, 88, 3], (e) => e > 10));
console.log(one([1, 3, 5, 6, 5, 1, 3], (e) => e > 10));

console.clear();

// [USED 81924 Developer Haynes] Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9 

// Input is an array of numbers
// Output is the result of adding the sqares of each number in the array

// Sample: [1, 2, 2] => 0
// Sample: [3, 7, 1] => 59

// Algorithm:
// 1. Create a variable to store an empty array
// 2. Iterate through the array and square each number
// 3. Push each square into empty array
// 4. Return a reduced the array of squares

// function squareNumbers(nums) {
//   const squares = []
//   for (const num of nums) {
//     squares.push(num * num)
//   }
//   return squares.reduce((acc, curr) => acc + curr, 0)
// }

function squareNumbers(numbers) {
  return numbers.reduce((acc, curr) => acc + Math.pow(curr, 2), 0)
}


//[USED 082824 McAtee] 4. ARRAY ARRAY ARRAY HOORAY
// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

// Another example
// x = [2, 2] => [[2, 2], [2, 2], [2, 2], [2, 2]]

// Input an array, which could contain numbers or any value
// Output: An array or a string. If no numbers are present in our input our output will be the string "Void!". If One number is present in the array, that number will determine how many sub arrays we have in our array. If two numbers are present the sum of those numbers will determine how many sub arrays we have. In either case, the sub arrays will be duplicates of the passed in array.

// Initialize count to "Void!"
// Initialize finalArray to an empty array
// Check if every element in x is a number.
// If they are, set count to the sum of the two numbers
// Check if x includes a number
// If it does, set count to that number
// If neither element is a number
// return count
// While count > 0
// push x into final array
// Return finalArray

function explode(x) {
  let count = "Void!";
  const finalArray = [];
  if (typeof x[0] === "number" && typeof x[1] === "number") {
    count = x[0] + x[1];
  } else if (typeof x[0] === "number") {
    count = x[0];
  } else if (typeof x[1] === "number") {
    count = x[1];
  } else {
    return count;
  }
  while (count > 0) {
    finalArray.push(x);
    count--;
  }
  return finalArray;
}

console.log(explode([2, 2]));
console.log(explode(["a", 3]));
console.log(explode(["todd", "stan"]));

console.clear();
