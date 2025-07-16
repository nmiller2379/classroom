// BIG VOWELS
// Given a string, return a new string with all the vowels in the passed string uppercased. All other letters in the returned string should be lowercase.

// Input: string
// Output: New string with all vowels uppercase. AEIOU capitalized. All other letters are lowercase.

// Strings are immutable

// Use a for loop to iterate through the string. Look for vowels. We can probably use regex for that.

// If else statement within the for loop

// Create an empty string. Declare it above the function.




function convertString(string) {
    const pattern = /[aeiou]/ig
    let newString = "";
    for (const letter of string) {
        if (pattern.test(letter)) {
            newString += letter.toUpperCase()
        } else {
            newString += letter.toLowerCase()
        }
    }
    return newString
}

console.log(convertString("hello world I am a princess"))
console.log(convertString("Todd"))
console.log(convertString("I AM FUN"))

