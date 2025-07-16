function lastWordLength(s) {
  let words = s.trim().split(" ");
  return words[words.length - 1].length;
}

// Another solution: This solution is more efficient than the previous one because it doesn't create an array of words. It works by iterating over the string from the end and counting the length of the last word.
// function lastWordLength(s) {
//   let count = 0;
//   let i = s.length - 1;
//   while (i >= 0 && s[i] === " ") {
//     i--;
//   }
//   while (i >= 0 && s[i] !== " ") {
//     count++;
//     i--;
//   }
//   return count;
// }

// DO NOT CHANGE THE CODE BELOW THIS LINE
if (typeof module !== "undefined" && module.exports) {
  module.exports = lastWordLength;
} else {
  window.lastWordLength = lastWordLength;
}
