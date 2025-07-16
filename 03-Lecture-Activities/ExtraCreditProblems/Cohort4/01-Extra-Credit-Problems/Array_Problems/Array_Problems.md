# Array Practice Problems

These array-focused problems build from basic iteration to more complex traversal and transformation logic.

---

## 1. Find Minimum Value

Write a function called `findMin` that takes an array of numbers and returns the smallest value. You may assume the array is non-empty.

```js
console.log(findMin([5, 2, 8, 1, 4])); // => 1
console.log(findMin([10])); // => 10
console.log(findMin([-3, -10, 0, 5])); // => -10
console.log(findMin([42, 42, 42])); // => 42
console.log(findMin([100, 50, 25, 0, -1])); // => -1
```

---

## 2. Remove Duplicates

Write a function called `removeDuplicates` that takes an array and returns a new array with duplicates removed, preserving the original order.

```js
console.log(removeDuplicates([1, 2, 2, 3, 4, 1])); // => [1, 2, 3, 4]
console.log(removeDuplicates([])); // => []
console.log(removeDuplicates(["a", "b", "a", "c", "b"])); // => ["a", "b", "c"]
console.log(removeDuplicates([true, false, true])); // => [true, false]
console.log(removeDuplicates([1, 2, 3, 4, 5])); // => [1, 2, 3, 4, 5]
```

---

## 3. Find Index of All Matches

Write a function called `findAllIndexes` that takes an array and a target value, and returns an array of all the indexes where the target appears.

```js
console.log(findAllIndexes(["a", "b", "a", "c"], "a")); // => [0, 2]
console.log(findAllIndexes([1, 2, 3], 4)); // => []
console.log(findAllIndexes([1, 1, 1, 1], 1)); // => [0, 1, 2, 3]
console.log(findAllIndexes(["x", "y", "x"], "z")); // => []
console.log(findAllIndexes([null, 0, null], null)); // => [0, 2]
```

---

## 4. Rotate Array

Write a function called `rotateArray` that takes an array and a number `k`, and returns a new array with the elements rotated to the right `k` times.

```js
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // => [4, 5, 1, 2, 3]
console.log(rotateArray([1, 2], 5)); // => [2, 1]
console.log(rotateArray([1, 2, 3, 4], 0)); // => [1, 2, 3, 4]
console.log(rotateArray([1], 3)); // => [1]
console.log(rotateArray(["a", "b", "c"], 4)); // => ["c", "a", "b"]
```

---

## 5. Zigzag Flatten

Write a function called `zigzagFlatten` that takes a 2D array (array of arrays) and returns a single array with the elements flattened in a _zigzag_ row-wise order. That means elements in even-indexed rows go left to right, and elements in odd-indexed rows go right to left.

```js
console.log(
  zigzagFlatten([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // => [1, 2, 3, 6, 5, 4, 7, 8, 9]

console.log(
  zigzagFlatten([
    [10, 11],
    [12, 13],
    [14, 15],
  ])
); // => [10, 11, 13, 12, 14, 15]
console.log(zigzagFlatten([[1], [2], [3]])); // => [1, 2, 3]
console.log(zigzagFlatten([[1, 2], [], [3, 4]])); // => [1, 2, 3, 4]
console.log(zigzagFlatten([[5, 6, 7], [8, 9], [10]])); // => [5, 6, 7, 9, 8, 10]
```

---
