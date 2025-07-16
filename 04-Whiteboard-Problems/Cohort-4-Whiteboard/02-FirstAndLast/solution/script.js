// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.

// Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

function firstAndLast(str) {
  let finalString = "";
  for (let i = 1; i < str.length - 1; i++) {
    finalString += str[i];
  }
  return finalString;
}
