// Write a function called `findFirstEven` that takes an array of numbers and returns the first even number in the array. If no even number exists, return `undefined`. If the input is not an array, return the string `"Please submit an array of numbers."

function findFirstEven(arr) {
  if (!Array.isArray(arr)) {
    return "Please submit an array of numbers.";
  }
  for (const num of arr) {
    if (num % 2 === 0) {
      return num;
    } else if (typeof num !== "number") {
      return "Please submit an array of numbers.";
    }
  }
}

console.log(findFirstEven([1, 3, 7, 10, 11])); // => 10
console.log(findFirstEven([1, 3, 7])); // => undefined
console.log(findFirstEven([])); // => undefined
console.log(findFirstEven("banana")); // => "Please submit an array of numbers."

// Write a function called `doubleNumbers` that takes an array of numbers and returns a new array where each number is doubled.

function doubleNumbers(arr) {
  if (!Array.isArray(arr)) {
    return "Please submit an array of numbers.";
  }
  const doubled = [];
  for (const num of arr) {
    if (typeof num === "number") {
      doubled.push(num * 2);
    } else {
      return "Please submit an array of numbers.";
    }
  }
  return doubled;
}

console.log(doubleNumbers([1, 2, 3])); // => [2, 4, 6]
console.log(doubleNumbers([])); // => []
console.log(doubleNumbers(["a", 2])); // => "Please submit an array of numbers."
console.log(doubleNumbers("5, 6, 7")); // => "Please submit an array of numbers."

console.clear()
// Write a function called `countLongStrings` that takes a sentence as a string and returns the number of strings with a length greater than 3.

function countLongStrings(str) {
  if (typeof str !== "string") {
    return "Please submit a string.";
  }
  const words = str.split(" ");
  let count = 0;
  for (const word of words) {
    if (word.length > 3) {
      count++;
    }
  }
  return count;
}

// — Your original samples —
console.log(countLongStrings("Hello World"));
// → 2

console.log(countLongStrings("Hi, bye"));
// → 0

console.log(countLongStrings(""));
// → 0

console.log(
  countLongStrings("The quick brown fox jumped over the lazy red dog")
);
// → 5

console.log(countLongStrings(1, 2, 3));
// → "Please submit a string."

// — Your additional edge cases —
console.log(countLongStrings(""));
// → 0

console.log(countLongStrings("hi    there"));
// → 1  (splits to ["hi","","","", "there"] → only "there" counts)

console.log(countLongStrings(null));
// → "Please submit a string."


// Write a function called `removeFalsy` that takes an array and returns a new array with all falsy values removed.

function removeFalsy(arr) {
  const truthyArr = [];
  for (const element of arr) {
    if (element) {
      truthyArr.push(element);
    }
  }
  return truthyArr;
}

console.log(removeFalsy([0, "hello", false, 42, "", null])); // => ["hello", 42]
console.log(removeFalsy(["", null, undefined, NaN, false])); // => []
console.log(removeFalsy([true, "hi", 1])); // => [true, "hi", 1]

// Write a function called `findMostFrequent` that takes an array and returns the element that appears the most times. If there is a tie, return any one of the most frequent elements. HINT: Can an object help us here?

function findMostFrequent(arr) {
  if (arr.length > 0) {
    const counter = {};

    for (const element of arr) {
      if (!counter[element]) {
        counter[element] = 1;
      } else {
        counter[element]++;
      }
    }

    const most = Object.entries(counter);
    const sortedMost = most.sort((a, b) => b[1] - a[1]);
    return sortedMost[0][0];
  }
  return "Array must not be empty.";
}

console.log(
  findMostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"])
); // => "apple"
console.log(findMostFrequent(["z", "a", "a", "z", "z"])); // => "z"
console.log(findMostFrequent([1, 2, 2, 3, 3])); // => 2 or 3 (either is acceptable)
console.log(findMostFrequent(["a", "b", "c"])); // => "a" or "b" or "c"
console.log(findMostFrequent([])); // => "Array must not be empty."


