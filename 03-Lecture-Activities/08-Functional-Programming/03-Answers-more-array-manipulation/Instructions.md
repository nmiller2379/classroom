# Array Methods – Functional Programming Practice Activities

These activities will help you practice using array methods in JavaScript: `forEach`, `map`, `filter`, `slice`, `concat`, `some`, and `every` as covered in our lectures. Each activity focuses on solving a problem using these methods. **Do not use traditional loops**, such as `for` or `for…of`, in your solutions.

---

## 1. Capitalize and Filter Words

Write a function called `capitalizeAndFilter` that takes an array of strings and a number `minLength`. Return a new array containing only the strings whose length is at least `minLength`, converted to uppercase.

```js
console.log(capitalizeAndFilter(['apple', 'pear', 'kiwi', 'banana'], 5));    // => ['APPLE', 'BANANA']
console.log(capitalizeAndFilter(['a', 'ab', 'abc', 'abcd'], 2));             // => ['AB', 'ABC', 'ABCD']
console.log(capitalizeAndFilter([], 3));                                     // => []
console.log(capitalizeAndFilter(['tiny', 'small', 'medium', 'large'], 6));   // => ['MEDIUM', 'LARGE']
```

---

## 2. Merge Unique Arrays

Write a function called `mergeUnique` that takes two arrays and returns a new array containing all unique elements from both arrays, in the order they first appear.

```js
console.log(mergeUnique([1, 2, 3], [3, 4, 5]));                             // => [1, 2, 3, 4, 5]
console.log(mergeUnique(['a', 'b'], ['b', 'c']));                           // => ['a', 'b', 'c']
console.log(mergeUnique([], [1, 1, 2]));                                    // => [1, 2]
console.log(mergeUnique([true, false], [false, false, true]));             // => [true, false]
```

---

## 3. Check Password Strength

Write a function called `isStrongPassword` that takes a password string and returns `true` if the password meets all of the following criteria: at least 8 characters long, contains at least one lowercase letter, one uppercase letter, one digit, and one special character (e.g., `!@#$%^&*`). Use array methods to perform your checks.

```js
console.log(isStrongPassword('Password1!'));    // => true
console.log(isStrongPassword('pwd1!'));         // => false
console.log(isStrongPassword('Password!'));     // => false
console.log(isStrongPassword('PASSWORD1!'));    // => false
console.log(isStrongPassword('password1!'));    // => false
```

---

## 4. Interleave Arrays

Write a function called `interleave` that takes two arrays and returns a new array with elements alternating between the first and second arrays. If one array is longer, ignore any extra elements from the longer array.

```js
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));           // => [1, 'a', 2, 'b', 3, 'c']
console.log(interleave([1, 2], ['x', 'y', 'z']));              // => [1, 'x', 2, 'y']
console.log(interleave([], [1, 2, 3]));                        // => []
console.log(interleave([true, false], [false, true]));        // => [true, false, false, true]
```

---

## 5. Find Array Intersection

Write a function called `intersection` that takes two arrays and returns a new array containing only the elements found in both arrays, in the order they appear in the first array. Use `filter` and `some`.

```js
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));         // => [3, 4]
console.log(intersection(['a', 'b', 'c'], ['d', 'e']));       // => []
console.log(intersection([], [1, 2, 3]));                     // => []
console.log(intersection([true, false, true], [false, false]));// => [false]
```
