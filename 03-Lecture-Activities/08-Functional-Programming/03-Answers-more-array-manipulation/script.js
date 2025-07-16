// Write a function called `capitalizeAndFilter` that takes an array of strings and a number `minLength`. Return a new array containing only the strings whose length is at least `minLength`, converted to uppercase.

function capitalizeAndFilter(arr, num) {
  return arr
    .filter((word) => word.length >= num)
    .map((word) => word.toUpperCase());
}

console.log(capitalizeAndFilter(["apple", "pear", "kiwi", "banana"], 5)); // => ['APPLE', 'BANANA']
console.log(capitalizeAndFilter(["a", "ab", "abc", "abcd"], 2)); // => ['AB', 'ABC', 'ABCD']
console.log(capitalizeAndFilter([], 3)); // => []
console.log(capitalizeAndFilter(["tiny", "small", "medium", "large"], 6)); // => ['MEDIUM', 'LARGE']

// Write a function called `mergeUnique` that takes two arrays and returns a new array containing all unique elements from both arrays, in the order they first appear.
function mergeUnique(arr1, arr2) {
  return (
    arr1
      // arr1.concat(arr2) merges both arrays into one.
      .concat(arr2)
      //.filter((item, idx, all) => all.indexOf(item) === idx) keeps only the first occurrence of each value—i.e., if the index of item in the full array matches the current index, it’s the first time we’ve seen it.
      .filter((item, idx, all) => all.indexOf(item) === idx)
  );
}

console.log(mergeUnique([1, 2, 3], [3, 4, 5])); // => [1, 2, 3, 4, 5]
console.log(mergeUnique(["a", "b"], ["b", "c"])); // => ['a', 'b', 'c']
console.log(mergeUnique([], [1, 1, 2])); // => [1, 2]
console.log(mergeUnique([true, false], [false, false, true])); // => [true, false]

// Write a function called `isStrongPassword` that takes a password string and returns `true` if the password meets all of the following criteria: at least 8 characters long, contains at least one lowercase letter, one uppercase letter, one digit, and one special character (e.g., `!@#$%^&*`). Use array methods to perform your checks.

function isStrongPassword(str) {
  const chars = str.split("");
  const hasMinLength = str.length >= 8;
  const hasLower = chars.some((c) => c >= "a" && c <= "z");
  const hasUpper = chars.some((c) => c >= "A" && c <= "Z");
  const hasDigit = chars.some((c) => /\d/.test(c));
  const hasSpecial = chars.some((c) => /[!@#$%^&*]/.test(c));

  return hasMinLength && hasLower && hasUpper && hasDigit && hasSpecial;
}

console.log(isStrongPassword("Password1!")); // => true
console.log(isStrongPassword("pwd1!")); // => false
console.log(isStrongPassword("Password!")); // => false
console.log(isStrongPassword("PASSWORD1!")); // => false
console.log(isStrongPassword("password1!")); // => false

// Write a function called `interleave` that takes two arrays and returns a new array with elements alternating between the first and second arrays. If one array is longer, ignore any extra elements from the longer array.

function interleave(arr1, arr2) {
  return (
    arr1
      // slice(0, Math.min(...)) truncates to the shorter length so we only interleave existing pairs.
      .slice(0, Math.min(arr1.length, arr2.length))
      // .map((value, index) => [value, arr2[index]]) transforms each element into a two‐element array [firstArrayValue, secondArrayValue].
      .map((value, index) => [value, arr2[index]])
      // .flat() flattens that array of pairs by one level, yielding the interleaved sequence.
      .flat()
  );
}

console.log(interleave([1, 2, 3], ["a", "b", "c"])); // => [1, 'a', 2, 'b', 3, 'c']
console.log(interleave([1, 2], ["x", "y", "z"])); // => [1, 'x', 2, 'y']
console.log(interleave([], [1, 2, 3])); // => []
console.log(interleave([true, false], [false, true])); // => [true, false, false, true]

// Write a function called `intersection` that takes two arrays and returns a new array containing only the elements found in both arrays, in the order they appear in the first array. Use `filter` and `some`.

function intersection(arr1, arr2) {
  // arr1.filter(...) iterates over each element in the first array.
  // For each item, arr2.some(el => el === item) checks if that item exists in the second array.
  // If some returns true, filter keeps the item; otherwise it’s dropped—yielding exactly the shared elements in the order of the first array.
  return arr1.filter((item) => arr2.some((el) => el === item));
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // => [3, 4]
console.log(intersection(["a", "b", "c"], ["d", "e"])); // => []
console.log(intersection([], [1, 2, 3])); // => []
console.log(intersection([true, false, true], [false, false])); // => [false]
