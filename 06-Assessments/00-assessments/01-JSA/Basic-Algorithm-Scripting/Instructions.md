# Basic Data Structures and Algorithm Scripting Assessment

Create a `script.js` file and an `index.html` file. Ensure the two are connected. Working in your `script.js` file, complete the algorithm problems below. Working in this `Instructions.md` file, complete the short answer questions at the end fo this document.

## 1. Count Truthy Values

Write a function called `countTruthyValues` that takes an array as input and returns the number of truthy values in the array.

```js
console.log(countTruthyValues([0, "hello", false, 42, "", null, "world"])); // => 3
console.log(countTruthyValues([])); // => 0
console.log(countTruthyValues([true, { name: "Alice" }, [], "false"])); // => 4
```

---

## 2. Reverse Words

Write a function called `reverseWords` that takes a sentence as input and returns a new sentence with the words in reverse order. The words themselves should not be reversed.

```js
console.log(reverseWords("The sky is blue")); // => "blue is sky The"
console.log(reverseWords("JavaScript is fun")); // => "fun is JavaScript"
console.log(reverseWords("hello")); // => "hello"
```

---

## 3. Range of Numbers

Write a function called `rangeOfNumbers` that takes two numbers, `startNum` and `endNum`. The function should return an array of integers which begins with `startNum` and ends with `endNum`. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and must not use loops of any kind. It should also work for cases where both `startNum` and `endNum` are the same.

```js
console.log(rangeOfNumbers(1, 5)); // => [1, 2, 3, 4, 5]
console.log(rangeOfNumbers(3, 3)); // => [3]
console.log(rangeOfNumbers(7, 9)); // => [7, 8, 9]
```

## Short-Answer Questions

Answer the following questions in 1–3 complete sentences. Be clear and concise.

---

### 1. What is the difference between a `for` loop and a `while` loop in JavaScript?

When might you choose one over the other?

---

### 2. When solving an array problem, what are three different goals you might have when manipulating the array?

For each goal, give an example of what a prompt might ask you to do.

---

### 3. Why are strings considered _immutable_ in JavaScript, and how does that affect how we manipulate them?

---
