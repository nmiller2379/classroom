# Recursive Practice Problems

These recursion problems are ordered by increasing difficulty and focus on core skills like base cases, array recursion, string manipulation, and conditional logic.

---

## 1. Count Occurrences

Write a function called `countOccurrences` that takes an array and a target value, and returns how many times the target appears in the array.

```js
console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); // => 3
console.log(countOccurrences([], 5)); // => 0
console.log(countOccurrences(["a", "b", "a", "a"], "a")); // => 3
console.log(countOccurrences([true, false, true], true)); // => 2
console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // => 0
```

---

## 2. Multiply Array Elements

Write a function called `multiplyElements` that takes an array of numbers and returns the product of all elements. You may assume the array is non-empty.

```js
console.log(multiplyElements([2, 3, 4])); // => 24
console.log(multiplyElements([5])); // => 5
console.log(multiplyElements([1, 1, 1, 1])); // => 1
console.log(multiplyElements([10, -1, 2])); // => -20
console.log(multiplyElements([0, 100, 200])); // => 0
```

---

## 3. Reverse String

Write a function called `reverseString` that takes a string and returns a new string with the characters in reverse order.

```js
console.log(reverseString("hello")); // => "olleh"
console.log(reverseString("a")); // => "a"
console.log(reverseString("OpenAI")); // => "IAnepO"
console.log(reverseString("racecar")); // => "racecar"
console.log(reverseString("")); // => ""
```

---

## 4. Flatten Nested Array

Write a function called `flattenArray` that takes an array which may contain nested arrays and returns a flat array with all values.

```js
console.log(flattenArray([1, [2, [3, 4]], 5])); // => [1, 2, 3, 4, 5]
console.log(flattenArray([1, 2, 3])); // => [1, 2, 3]
console.log(flattenArray([[1, 2], [3], [4, [5]]])); // => [1, 2, 3, 4, 5]
console.log(flattenArray([[[[1]]], 2])); // => [1, 2]
console.log(flattenArray([])); // => []
```

---

## 5. Balanced Parentheses Check

Write a function called `isBalanced` that takes a string of parentheses `(` and `)` and returns `true` if the string is balanced, `false` otherwise. You must use recursion only (no loop or stack).

```js
console.log(isBalanced("((()))")); // => true
console.log(isBalanced("(()")); // => false
console.log(isBalanced("())(")); // => false
console.log(isBalanced("")); // => true
console.log(isBalanced("((())())")); // => true
console.log(isBalanced("(()(()))(()")); // => false
```

_Hint: You may need to use a helper function to track the open count recursively._
