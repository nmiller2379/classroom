# Recursive Algorithm Practice

These problems will help you practice solving problems using recursion. Do **not** use loops. Focus on identifying base cases and reducing the problem size with each recursive call.

## 1. Sum of Elements

Write a function called `sum` that takes two arguments: an array `arr` and a number `n`. It should return the sum of the first `n` elements of the array.

```js
console.log(sum([1, 2, 3, 4, 5], 3)); // => 6
console.log(sum([10, 20, 30], 0));    // => 0
```

## 2. Repeat a String

Write a function called `repeatString` that takes two arguments: a string `str` and a number `count`. It should return a string consisting of `str` repeated `count` times.

```js
console.log(repeatString("abc", 3)); // => "abcabcabc"
console.log(repeatString("hi", 0));  // => ""
```

## 3. Countdown Array

Write a function called `countdown` that takes a number `n` and returns an array of integers counting down from `n` to 1. If `n` is less than 1, return an empty array.

```js
console.log(countdown(5)); // => [5, 4, 3, 2, 1]
console.log(countdown(0)); // => []
```

## 4. Count Even Numbers

Write a function called `countEvens` that takes an array `arr` and returns the number of even numbers in the array.

```js
console.log(countEvens([1, 2, 3, 4, 5, 6])); // => 3
console.log(countEvens([1, 3, 5]));         // => 0
```

## 5. Sum of Digits

Write a function called `sumDigits` that takes a non-negative integer `n` and returns the sum of its digits.

```js
console.log(sumDigits(123)); // => 6
console.log(sumDigits(0));   // => 0
```