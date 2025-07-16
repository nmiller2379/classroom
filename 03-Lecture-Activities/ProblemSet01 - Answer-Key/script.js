// 1. Given a string return its reverse. Do not use the reverse array method.
// Input: A string.
// Output: A string with letters in reverse order from the passed string.

// Example:
// Input: "hello"

// Manual steps
// 1. Take the last character ('o') and put it first in the new string (or word)
// 2. Take the second to last character ('l') and put it first in the new word.
// 3. Continue the process until the first character is placed last

// Output: "olleh"

// Algorithm
// 1. Declare a variable reversedString set it equal to an empty string
// 2. Iterate from passedString.length-1 to 0
// Concatenate each letter from passed string into reversedString
// 3. Return reversedString

function reverseString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

console.log(reverseString("hello"));
console.log(reverseString("Todd"));
console.log(reverseString("racecar"));

// 2. Write a function that converts the input string to uppercase.

// Input: A string
// Output: A string with each letter of the passed string in uppercase.

// Example
// "todd" => "TODD"

// Manual Steps
// Create a box to store our new letters
// Start wtih the first letter (t). Add an uppercase version of that letter (T) to the box
// Go to the next letter (o). Add an uppercase version of that letter (O) in the box
// Repeate this process until all letters are uppercase in the box
// Return the box

// Algorithm
// 1. Initialize capString to ""
// 2. Iterate over string
    // For each char in string uppercase it
    // Concatenate it to capString with compound assignment
// Return capString

function capitalizeString(str) {
    return str.toUpperCase()
} 

console.log(capitalizeString("todd"))


// 3. Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Input n = a number, s = a string
// Output a string that repeats s n number of times

// Examples
// s = "carl", n = 2
// "carlcarl"

// Manual steps
// Create a box to store the return value
// Repeatedly add s to the box until we've done it n times
// Once we reach n times, we're done return the box.

// Algorithm
// 1. Initialize result to ""
// 2. Initialize counter to n
// 3. While counter is greather than or equal to 0
    // concatenate s to counter with compound assignment
    // Decrement counter
// 4. Return result.

function repeatString(s,n) {
    let result = "";
    let counter = n
    while (counter > 0) {
        result += s
        counter--
    }
    return result
}

console.log(repeatString("carl", 2))
console.log(repeatString("abc", 10))
console.log(repeatString("joker", 5))

// 4. Write a function that takes two strings and returns true if the second string is a substring of the first string, and false otherwise.

// Input: two strings
// Output: boolean indicating whether second arg is substring of first arg. (true if it is a substring, false if it's not)

// Example
// ("hello world", "world") => true

// Start with an empty box to store our substring
// Go to the first letter of "world" (w)
// Go letter by letter through "hello world" looking for w
// If we find w, add it to our box 
// Move on to the next letter in world (o)
// Go letter by letter through "hello world" looking for o
// If we find it add it to our box
// Repeat this process until we've looked for every letter of "world" in "hello world"
// Compare what's in our box with the second argument
// Return the result of that comparison

// Algorithm
// 1. Initialize result to false
// 2. Iterate through first string up to the point where their aren't enough letters left to make the second string.
    // Starting with each letter create a substring of secondArgument length
    // compare that substring with secondArgument
    // If true, result = true
    // return result
// return result

function findSubstring(str1, str2) {
    let result = false;
    for (let i = 0; i < str1.length - str2.length; i++) {
        if (str1.substring(i, i+str2.length) === str2) {
            result = true;
            return result
        } 
    }
    return result
}

console.log(findSubstring("hello world", "world"))
console.log(findSubstring("javascript", "script"))
console.log(findSubstring("openai", "ai"))
console.log(findSubstring("test", "best"))

// 5. Write a function that takes an array of strings and returns the longest common prefix string amongst them. If there is no common prefix, return an empty string "".

// Input: an array of strings of varying lengths.
// Output: A string representing the first x number of letters each string in the array have in common. If none are in common an empty string.

// Examples
// ["flower", "flow", "flight"] => "fl"
// ["dog", "racecar", "car"] => ""
// ["interview", "internet", "internal"] => "inter"

// Manual Steps
// 1. Start with the first letter of the first word (f in flower) and compare it with the first letter of the other words in the array (f in flow, f in flight)
// 2. If they're all the same when you've finished the compairson, add that letter to the prefix (f)
// 3. Repeate this process until find a letter in one of the other words (i in flight) that doesn't match flower
// 4. When you find a letter where they are not the same, stop looking. You've found the longest common prefix (fl).

// 1. Initialize prefix to ""
// 2. Initialize compare to sortedArr[0]
// 3. Initialize newArr to array of all strings except the first
// 4. Iterate through compare.
// Initialize matchFound to true
// Iterate through newArr.
// For each string in newArr, if firstString[i] !== string[i]
// matchFound = false
// If matchFound === true
// prefix += i
// else, return prefix
// 5. Return prefix

function longestPrefix(arr) {
  let prefix = "";
  let compare = arr[0];
  const newArr = arr.slice(1);
  for (let i = 0; i < compare.length; i++) {
    let matchFound = true;
    newArr.forEach((element) => {
      if (element[i] !== compare[i]) {
        matchFound = false;
      }
    });
    if (matchFound) {
      prefix += compare[i];
    } else {
      return prefix;
    }
  }
  return prefix;
}

console.log(longestPrefix(["flower", "flow", "flight"]));
console.log(longestPrefix(["dog", "racecar", "car"]));
console.log(longestPrefix(["interview", "internet", "internal"]));
