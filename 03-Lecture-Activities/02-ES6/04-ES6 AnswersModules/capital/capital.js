// Write a function that takes a string as an input and returns the string with the first letter capitalized. For more information about how to upper case a string, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase 
export default function capLetter(string) {
    let finalString = "";
    const firstChar = string[0].toUpperCase()
    finalString += firstChar
    for (let i = 1; i < string.length; i++) {
        finalString += string[i];
    }
    return finalString
}
// Export the function so tha tit can be used in your main module.