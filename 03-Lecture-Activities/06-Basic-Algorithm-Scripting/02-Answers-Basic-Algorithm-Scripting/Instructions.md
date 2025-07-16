# Basic Algorithm Scripting Part III

These problems will help you practice your problem-solving skills by working with some of the basic JavaScript problem solving patterns we've discussed.

## 1. Find the First Even Number

Write a function called `findFirstEven` that takes an array of numbers and returns the first even number in the array. If no even number exists, return `undefined`. If the input is not an array, return the string `"Please submit an array of numbers."`

```js
console.log(findFirstEven([1, 3, 7, 10, 11])); // => 10
console.log(findFirstEven([1, 3, 7])); // => undefined
console.log(findFirstEven([])); // => undefined
console.log(findFirstEven("banana")); // => "Please submit an array of numbers."
```

---

## 2. Double All Numbers

Write a function called `doubleNumbers` that takes an array of numbers and returns a new array where each number is doubled. 

```js
console.log(doubleNumbers([1, 2, 3])); // => [2, 4, 6]
console.log(doubleNumbers([])); // => []
console.log(doubleNumbers(["a", 2])); // => "Please submit an array of numbers."
console.log(doubleNumbers("5, 6, 7")); // => "Please submit an array of numbers."
```

---

## 3. Count Strings Longer Than 3

Write a function called `countLongStrings` that takes a sentence as a string and returns the number of strings with a length greater than 3.

```js

```

---

## 4. Remove All Falsy Values

Write a function called `removeFalsy` that takes an array and returns a new array with all falsy values removed. 

```js
console.log(removeFalsy([0, "hello", false, 42, "", null])); // => ["hello", 42]
console.log(removeFalsy(["", null, undefined, NaN, false])); // => []
console.log(removeFalsy([true, "hi", 1])); // => [true, "hi", 1]
```

---

## 5. Find the Most Frequent Element

Write a function called `findMostFrequent` that takes an array and returns the element that appears the most times. If there is a tie, return any one of the most frequent elements. HINT: Can an object help us here?

```js
console.log(findMostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"])); // => "apple"
console.log(findMostFrequent([1, 2, 2, 3, 3])); // => 2 or 3 (either is acceptable)
console.log(findMostFrequent(["a", "b", "c"])); // => "a" or "b" or "c"
console.log(findMostFrequent([])); // => "Array must not be empty."
```
