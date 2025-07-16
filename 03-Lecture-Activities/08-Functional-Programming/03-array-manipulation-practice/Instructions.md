# Array Methods – Practice Activities

These activities will help you practice using the `slice`, `concat`, `some`, and `every` methods in JavaScript as covered in your lecture on four new methods. Each activity focuses on a different application of one of these methods and follows the style of your earlier practice activities. Do not use traditional loops, such as `for` or `for…of`, in your solutions.

---

## 1. Extract Subarray

Write a function called `extractSubarray` that takes an array and two indices, `start` and `end`, and returns a new array containing the elements from `start` up to, but not including, `end`.

```js
console.log(extractSubarray([10, 20, 30, 40, 50], 1, 4)); // => [20, 30, 40]
console.log(extractSubarray(["a", "b", "c", "d"], 0, 2)); // => ['a', 'b']
console.log(extractSubarray([1, 2, 3], 2, 5)); // => [3]
console.log(extractSubarray([], 0, 1)); // => []
```

---

## 2. Merge Arrays

Write a function called `mergeArrays` that takes two arrays and returns a new array that is the result of concatenating the second array to the first.

```js
console.log(mergeArrays([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(mergeArrays([], ["x", "y"])); // => ['x', 'y']
console.log(mergeArrays(["hello"], [])); // => ['hello']
console.log(mergeArrays([true], [false, true])); // => [true, false, true]
```

---

## 3. Contains Even Number

Write a function called `containsEvenNumber` that takes an array of numbers and returns `true` if at least one number in the array is even; otherwise, return `false`.

```js
console.log(containsEvenNumber([1, 3, 5, 7])); // => false
console.log(containsEvenNumber([1, 4, 5])); // => true
console.log(containsEvenNumber([])); // => false
```

---

## 4. All Positive Numbers

Write a function called `allPositive` that takes an array of numbers and returns `true` if every number in the array is greater than zero; otherwise, return `false`.

```js
console.log(allPositive([2, 4, 6])); // => true
console.log(allPositive([0, 1, 2])); // => false
console.log(allPositive([-1, 2, 3])); // => false
console.log(allPositive([])); // => true
```
