# String Practice Problems

These string problems gradually increase in difficulty and explore transformations, pattern recognition, and algorithmic string logic.

---

## 1. Capitalize Words

Write a function called `capitalizeWords` that takes a string and returns a new string with the first letter of each word capitalized.

```js
console.log(capitalizeWords("hello world")); // => "Hello World"
console.log(capitalizeWords("javaScript is fun")); // => "JavaScript Is Fun"
console.log(capitalizeWords("multiple   spaces")); // => "Multiple   Spaces"
console.log(capitalizeWords("123 start")); // => "123 Start"
console.log(capitalizeWords("already Capitalized")); // => "Already Capitalized"
```

---

## 2. Remove Vowels

Write a function called `removeVowels` that takes a string and returns a new string with all the vowels (`a`, `e`, `i`, `o`, `u`, case-insensitive) removed.

```js
console.log(removeVowels("Hello World")); // => "Hll Wrld"
console.log(removeVowels("AEIOUaeiou")); // => ""
console.log(removeVowels("Beautiful day")); // => "Btfl dy"
console.log(removeVowels("why")); // => "why"
console.log(removeVowels("aAaEeEiIoOuU")); // => ""
```

---

## 3. Isomorphic Strings

Write a function called `isIsomorphic` that takes two strings and returns `true` if the characters in the first string can be replaced to get the second string, with a one-to-one mapping.

```js
console.log(isIsomorphic("egg", "add")); // => true
console.log(isIsomorphic("foo", "bar")); // => false
console.log(isIsomorphic("paper", "title")); // => true
console.log(isIsomorphic("abc", "def")); // => true
console.log(isIsomorphic("abca", "zbxz")); // => true
console.log(isIsomorphic("ab", "aa")); // => false
```

---

## 4. Compress String (Run-Length Encoding)

Write a function called `compressString` that takes a string and returns a compressed version using run-length encoding (RLE). Only compress if the result is shorter than the original string.

```js
console.log(compressString("aabcccccaaa")); // => "a2b1c5a3"
console.log(compressString("abc")); // => "abc"
console.log(compressString("aaabbbccc")); // => "a3b3c3"
console.log(compressString("abcd")); // => "abcd"
console.log(compressString("zzzzzz")); // => "z6"
```

---

## 5. Longest Non-Repeating Substring

Write a function called `longestUniqueSubstring` that takes a string and returns the length of the longest substring without repeating characters.

```js
console.log(longestUniqueSubstring("abcabcbb")); // => 3 ("abc")
console.log(longestUniqueSubstring("bbbbb")); // => 1 ("b")
console.log(longestUniqueSubstring("pwwkew")); // => 3 ("wke")
console.log(longestUniqueSubstring("abcdef"));         // => 6 ("abcdef")
console.log(longestUniqueSubstring("aabbccddeeff"));   // => 2 ("ab", "bc", etc.)
console.log(longestUniqueSubstring(""));               // => 0
```

---
