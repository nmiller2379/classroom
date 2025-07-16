# The forEach Method – Practice Activities

These activities will help you practice using the `forEach` method in JavaScript. Each activity focuses on a different application of `forEach`. Do not use traditional loops, such as a `for` loop or a `for... of` loop in your solutions.

---

## 1. Log Each Element

Write a function called `logEachElement` that takes an array and logs each item in the array to the console.

```js
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
```

---

## 2. Log Item and Index

Write a function called `logItemAndIndex` that takes an array and logs a string to the console for each item in the array, in the format: `Item at index X is Y`.

```js
logItemAndIndex(["a", "b", "c"]);
// Console:
// Item at index 0 is a
// Item at index 1 is b
// Item at index 2 is c

logItemAndIndex(["cat", "dog"]);
// Console:
// Item at index 0 is cat
// Item at index 1 is dog
```

---

## 3. Count Short Words

Write a function called `countShortWords` that takes an array of strings and returns the number of strings with fewer than 5 characters.

```js
console.log(countShortWords(["book", "pen", "notebook", "hi", "yes"])); // => 3
console.log(countShortWords(["longword", "short", "tiny"])); // => 1
console.log(countShortWords([])); // => 0
```

---

## 4. Double Numbers

Write a function called `doubleNumbers` that takes an array of numbers and returns a new array with each number doubled. If you finish early, see if you can solve the same problem using the `.map` method (for extra credit). Observe the differences. Be sure to include comments explaining the differences to receive extra credit. You may need to research the `.map` method because we haven't discussed it in class yet.

```js
console.log(doubleNumbers([1, 2, 3])); // => [2, 4, 6]
console.log(doubleNumbers([0, -2, 5])); // => [0, -4, 10]
console.log(doubleNumbers([])); // => []
```

---

## 5. Remove Negatives

Write a function called `removeNegatives` that takes an array of numbers and returns a new array containing only the non-negative values (zero and positive). If you finish early, see if you can solve the same problem using the `.filter` method. Observe the differences. Be sure to include comments explaining the differences to receive extra credit. You may need to research the `.map` method because we haven't discussed it in class yet.

```js
console.log(removeNegatives([1, -2, 3, 0, -5])); // => [1, 3, 0]
console.log(removeNegatives([-1, -2, -3])); // => []
console.log(removeNegatives([10, 20, 30])); // => [10, 20, 30]
```
