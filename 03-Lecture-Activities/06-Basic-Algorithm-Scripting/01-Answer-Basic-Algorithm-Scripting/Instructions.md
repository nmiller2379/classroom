# Basic Algorithm Scripting Part II

These problems will help you practice their problem-solving skills.

## 1. Finders Keepers

Write a function called `findElement` that takes two arguments: an array and a function (func). Return the first element in the array for which func(element) returns true. If no such element exists, return undefined. If the second argument is not a function, return the string "Truth test must be a function".

```js
console.log(
  findElement([1, 3, 5, 8, 9, 10], (num) => {
    return num % 2 === 0;
  })
); // => 8
console.log(findElement([1, 3, 5, 8, 9, 10], 8)); // => "Truth test must be a function"
console.log(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  })
); // => undefined
console.log(
  findElement(["Alex", "Timothy", "Bob", "Abe"], (str) => str.length > 4)
); // => "Timothy"
```

## 2. Boo who

Write a function called `isBool` that takes an input and returns true if that input is a boolean and false if it is not.

```js
console.log(isBool(true)); // => true
console.log(isBool(false)); // => true
console.log(isBool([1, 2, 3])); // => false
console.log(isBool("")); // => false
```

## 3. Truncate A String

Write a function called `truncateString` that takes a string and a number where the number represents the maximum allowable length of the string. If the given string is longer than the given maximum string length return the given string at the given length, with a `...` ending.

```js
console.log(truncateString("Hello World", 8)); // => "Hello Wo..."
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // => "A-tisket..."
console.log(truncateString("cat", 8)); // => "cat"
console.log(truncateString("cat", 0)); // => "..."
console.log(truncateString("cat", -12)); // => "cat"
console.log(truncateString("cat", -1)); // => "cat"
console.log(truncateString("", 12)); // => ""
console.log(truncateString("", 0)); // => ""
```

## 4. Title Case a Work

Write a function called `titleCase` that takes a string representing the title of a work. Return a new string with the first letter of each word capitalized, except for the following words, which should remain lowercase unless they are the first word in the title:
"a", "an", "the", "and", "but", "or", "nor", "for", "so", "yet", "at", "by", "in", "of", "on", "to", "up", "with"

```js
console.log(titleCase("I'm a little tea pot")); // => I'm a Little Tea Pot
console.log(titleCase("I'm a   little tea pot")); // => I'm a   Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt")); // => Short and Stout
console.log(titleCase("   sHorT AnD sToUt")); // => Short and Stout (no leading whitespace here)
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // => Here Is My Handle Here Is My Spout
console.log(titleCase("for whom the bell tolls")); // => For Whom the Bell Tolls
console.log(titleCase("")); // => ''
```

## 5. Chunky Monkey

Write a function called `chunkArrayInGroups` that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

```js
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // => [["a","b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // => [[0, 1, 2, 3], [4, 5]]
console.log(chunkArrayInGroups([1, 2], 5)); // => [[1, 2]]
console.log(chunkArrayInGroups(["a", "b", "c"], 1)); // => [["a"], ["b"], ["c"]]
console.log(chunkArrayInGroups([], 7)); // => []
console.log(chunkArrayInGroups([1, 2, 4, 5], "2")); // => "Size must be a number greater than 0"
console.log(chunkArrayInGroups([17, 27, 72], 0)); // => "Size must be a number greater than 0"
console.log(chunkArrayInGroups("17, 27, 72", 3)); // => "Input must be an array."
```
