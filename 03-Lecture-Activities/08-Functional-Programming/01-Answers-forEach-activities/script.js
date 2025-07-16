// Write a function called `logEachElement` that takes an array and logs each item in the array to the console using `forEach`.

function logEachElement(arr) {
  arr.forEach((element) => {
    console.log(element);
  });
}

logEachElement(["apples", "bananas", "grapes"]);
// Console:
// apples
// bananas
// grapes

logEachElement([1, 2, 3, 4]);
// Console:
// 1
// 2
// 3
// 4

logEachElement([]);
// Console: (nothing)

// Write a function called `logItemAndIndex` that takes an array and uses `forEach` to log a string for each item in the array, in the format: `Item at index X is Y`

function logItemAndIndex(arr) {
  arr.forEach((e, i) => console.log(`Item at index ${i} is ${e}`));
}

logItemAndIndex(["a", "b", "c"]);
// Console:
// Item at index 0 is a
// Item at index 1 is b
// Item at index 2 is c

logItemAndIndex(["cat", "dog"]);
// Console:
// Item at index 0 is cat
// Item at index 1 is dog

// Write a function called `countShortWords` that takes an array of strings and returns the number of strings with fewer than 5 characters. Use `forEach`.
function countShortWords(arr) {
  let count = 0;
  arr.forEach((e) => {
    if (e.length < 5) {
      count++;
    }
  });
  return count;
}

console.log(countShortWords(["book", "pen", "notebook", "hi", "yes"])); // => 3
console.log(countShortWords(["longword", "short", "tiny"])); // => 1
console.log(countShortWords([])); // => 0

// Write a function called `doubleNumbers` that takes an array of numbers and returns a new array with each number doubled. Use `forEach` (not `map`).

function doubleNumbers(arr) {
  const doubled = [];
  arr.forEach((e) => doubled.push(e * 2));
  return doubled;
}

console.log(doubleNumbers([1, 2, 3])); // => [2, 4, 6]
console.log(doubleNumbers([0, -2, 5])); // => [0, -4, 10]
console.log(doubleNumbers([])); // => []

// with map=======================================================================
function doubleNumbersMap(arr) {
  return arr.map(e => e * 2)
}

console.log(doubleNumbersMap([1, 2, 3])); // => [2, 4, 6]
console.log(doubleNumbersMap([0, -2, 5])); // => [0, -4, 10]
console.log(doubleNumbersMap([])); // => []

// When using map, the new array is returned by the map method. There are no side effects and the push() method is not needed. Map is more clearly a functional programming approach to solving this problem.

// Write a function called `removeNegatives` that takes an array of numbers and returns a new array containing only the non-negative values (zero and positive). Use `forEach`.

function removeNegatives(arr) {
    const positives = []
    arr.forEach(e => {
        if (e >= 0) {
            positives.push(e)
        }})
    return positives
}

console.log(removeNegatives([1, -2, 3, 0, -5])); // => [1, 3, 0]
console.log(removeNegatives([-1, -2, -3])); // => []
console.log(removeNegatives([10, 20, 30])); // => [10, 20, 30]

// with filter=======================================================================================
function removeNegativesFilter(arr) {
  return arr.filter(e => e >= 0)
}

console.log(removeNegativesFilter([1, -2, 3, 0, -5])); // => [1, 3, 0]
console.log(removeNegativesFilter([-1, -2, -3])); // => []
console.log(removeNegativesFilter([10, 20, 30])); // => [10, 20, 30]

// When using filter, the filter method returns a new array. The array contains those items that pass a test. This test operates the same way as the conditional in the forEach implementation, meaning neither a conditional statement nor the push method are necessary when using filter. No side effects are created when using filter, making it more clearly a functional programming solution to the problem.