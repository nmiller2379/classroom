# JavaScript Loop Challenges

These challenges will help you practice using loops alongside arrays, strings, functions, and other JavaScript skills you've learned so far.

---

## Challenge 1: Word Reverser

**Write a function that takes a sentence as a string and returns a new string with each word reversed, but in the same order.**

**Example:**

```js
reverseWords("hello world"); // → "olleh dlrow"
```

*Hint: You’ll need to loop through words and do something to each one…*

---

## Challenge 2: Count the Vowels

**Write a function that takes a string and returns the number of vowels (a, e, i, o, u) in it.**

**Example:**

```js
countVowels("banana"); // → 3
```

*Hint: Think about what characters you’re checking for as you loop…*

---

## Challenge 3: Sum of Even Numbers

**Write a function that takes an array of numbers and returns the sum of the even numbers.**

**Example:**

```js
sumEvenNumbers([1, 2, 3, 4, 5, 6]); // → 12
```

*Hint: There’s a way to test if a number is even. Do you remember what it is? Can you find it in your resources?*

---

## 🔁 Challenge 4: Create a Mirror Array

**Write a function that takes an array and returns a new array that includes the original elements followed by the same elements in reverse order.**

**Example:**

```js
mirrorArray([1, 2, 3]); // → [1, 2, 3, 3, 2, 1]
```

*Hint: Can you build part of the array in reverse order?*

---

## Challenge 5: Dice Rolling Simulator

**Simulate rolling a 6-sided die a given number of times and return the number of times a 6 was rolled.**

**Stretch Goal:** If you solve this problem, can you refactor it to return an object showing how many times each number (1–6) appeared.

**Example:**

```js
rollDice(100);
// → { 1: 17, 2: 18, 3: 15, 4: 19, 5: 16, 6: 15 } (as an example, of course we can't really know ahead of time how many times a given number will be rolled)
```

*Hint: You’ll need a loop and some way to store totals…*
