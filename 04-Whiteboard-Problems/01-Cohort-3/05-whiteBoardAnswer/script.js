// Sample inputs and outputs ("todd") => "tOdd"; ("Happy birthday") => "hAppy bIrthdAy"

// 1. Initiate fixedString to str.toLowercase()
// 2. Initiate finalString to ""
// 3. Initialize vowels to /[aeiou]/
// 4. Iterate through fixedString.
// a. Check each character in fixedString
//  a1. - if it's a vowel, character.toUpperCase()
// a2. finalString += character
// b. Else finalString += character
// 5. Return final string

function capVowels(str) {
    const fixedString = str.toLowerCase();
    let finalString = "";
    const vowels = /[aeiou]/;
    for (const character of fixedString) {
      if (vowels.test(character)) {
        finalString += character.toUpperCase();
      } else {
        finalString += character;
      }
    }
    return finalString;
  }
  
  console.log(capVowels("Todd"));
  console.log(capVowels("Happy birthday"));