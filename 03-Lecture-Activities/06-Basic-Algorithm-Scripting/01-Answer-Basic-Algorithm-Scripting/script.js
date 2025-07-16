// Write a function called findElement that takes an array and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined. The 'truth test' must be a function that returns a boolean.

function findElement(arr, func) {
  if (typeof func !== "function") {
    return "Truth test must be a function.";
  }
  for (const element of arr) {
    if (func(element)) {
      return element;
    }
  }
  return undefined;
}

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

// Write a function called isBool that takes an input and returns true if that input is a boolean and false if it is not.

function isBool(input) {
  if (typeof input === "boolean") {
    return true;
  } else {
    return false;
  }
}

console.log(isBool(true)) // => true
console.log(isBool(false)) // => true
console.log(isBool([1, 2, 3])) // => false
console.log(isBool("")) // => false

// Write a function called truncateString that takes a string and a number where the number represents the maximum allowable length of the string. If the given string is longer than the given maximum string length return the given string at the given length, with a `...` ending.

function truncateString(str, num) {
  if (str.length > num && num > -1) {
    return str.slice(0, num) + "...";
  }
  return str;
}

console.log(truncateString("Hello World", 8)); // => "Hello Wo..."
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // => "A-tisket..."
console.log(truncateString("cat", 8)); // => "cat"
console.log(truncateString("cat", 0)); // => "..."
console.log(truncateString("cat", -12)); // => "cat"
console.log(truncateString("cat", -1)); // => "cat"
console.log(truncateString("", 12)); // => ""
console.log(truncateString("", 0)); // => ""

// Write a function that takes a string representing the title of a work. Return a new string with the first letter of each word capitalized, except for the following words, which should remain lowercase unless they are the first or last word in the title:
// ["a", "an", "the", "and", "but", "or", "nor", "for", "so", "yet", "at", "by", "for", "in", "of", "on", "to", "up", "with"]

// function titleCase(str) {
//   const noCaps = [
//     "a",
//     "an",
//     "the",
//     "and",
//     "but",
//     "or",
//     "nor",
//     "for",
//     "so",
//     "yet",
//     "at",
//     "by",
//     "for",
//     "in",
//     "of",
//     "on",
//     "to",
//     "up",
//     "with",
//   ];
//   let wordsArr = str.trim().toLowerCase().split(" ");
//   const upperCaseArr = [];
//   let singleWord = "";
//   for (let i = 0; i < wordsArr[0].length; i++) {
//     if (i === 0) {
//       singleWord += wordsArr[0][i] ? wordsArr[0][i].toUpperCase() : "";
//     } else {
//       singleWord += wordsArr[0][i];
//     }
//   }
//   upperCaseArr.push(singleWord);
//   for (let i = 1; i < wordsArr.length; i++) {
//     singleWord = noCaps.includes(wordsArr[i][0])
//       ? wordsArr[i][0]
//       : wordsArr[i][0]
//       ? wordsArr[i][0].toUpperCase()
//       : "";
//     for (let j = 1; j < wordsArr[i].length; j++) {
//       singleWord += wordsArr[i][j];
//     }
//     upperCaseArr.push(singleWord);
//   }
//   return upperCaseArr.join(" ");
// }
// More efficient solution ============================
function titleCase(str) {
  const noCaps = [
    "a", "an", "the",
    "and", "but", "or", "nor", "for", "so", "yet",
    "at", "by", "in", "of", "on", "to", "up", "with"
  ];

  const words = str.trim().toLowerCase().split(" ");
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const isFirst = i === 0;
    const isLast = i === words.length - 1;

    if (isFirst || isLast || !noCaps.includes(word)) {
      // Capitalize first letter + rest of word
      result.push(word[0] ? word[0].toUpperCase() + word.slice(1) : "");
    } else {
      // Keep it lowercase
      result.push(word);
    }
  }
  return result.join(" ")
}

console.log(titleCase("I'm a little tea pot")); // => I'm a Little Tea Pot
console.log(titleCase("I'm a   little tea pot")); // => I'm a   Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt")); // => Short and Stout
console.log(titleCase("   sHorT AnD sToUt")); // => Short and Stout (no leading whitespace here)
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // => Here Is My Handle Here Is My Spout
console.log(titleCase("for whom the bell tolls")) // => For Whom the Bell Tolls
console.log(titleCase("")); // => ''

// Write a function called chunkArrayInGroups that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  if (!Array.isArray(arr)) {
   return "Input must be an array" 
  }
  if (typeof size !== 'number' || size < 1) {
    return "Size must be a number greater than 0"
  }
  const finalArr = [];
  while (arr.length > 0) {
    finalArr.push(arr.splice(0, size));
  }
  return finalArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // => [["a","b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // => [[0, 1, 2, 3], [4, 5]]
console.log(chunkArrayInGroups([1, 2], 5))
console.log(chunkArrayInGroups(["a", "b", "c"], 1))
console.log(chunkArrayInGroups([], 7)) // => []
console.log(chunkArrayInGroups([1, 2, 4, 5], "2")) // => "Size must be a number greater than 0"  
console.log(chunkArrayInGroups([17, 27, 72], 0)) // => "Size must be a number greater than 0"
console.log(chunkArrayInGroups("17, 27, 72", 3)) // => "Input must be an array."
