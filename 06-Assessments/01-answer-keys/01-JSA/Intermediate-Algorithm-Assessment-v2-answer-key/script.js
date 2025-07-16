// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Example 3:
// Input: haystack = leetcode, needle = "ode"

// Algorithm:
// 1. Initialize let index to -1
// 2. Initialize stringToCheck
// 2. Iterate through haystack
// If letter in haystack === needle[0]
// stringToCheck = haystack.substring(indexOf(letter, needle.length))
// If striingToCheck === needle
// index = indexOf(letter)
// 4. Return index

function strStr(haystack, needle) {
  let stringToCheck;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack[i] === needle[0]) {
      stringToCheck = haystack.substring(i, i + needle.length);
      if (stringToCheck === needle) {
        return i;
      }
    }
  }
  return -1;
}

console.log(strStr("sadbutsad", "sad")); // Should return 0
console.log(strStr("leetcode", "leeto")); // Should return -1
console.log(strStr("leetcode", "ode")); // Should return 5

// DO NOT CHANGE THE CODE BELOW THIS LINE
if (typeof module !== "undefined" && module.exports) {
  module.exports = strStr;
} else {
  window.strStr = strStr;
}
