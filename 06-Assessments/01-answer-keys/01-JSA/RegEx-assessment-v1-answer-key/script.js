// 1. Hexidecimal codes ==========================================================
const cssCode = `
  body {
    background-color: #ffffff;
    color: #000000;
  }

  .container {
    border: 1px solid #ff0000;
    padding: 10px;
  }

  .text {
    color: #00ff00;
  }
`;

const pattern = /#[0-9a-fA-F]{6}/g;
const hexadecimalColorCodes = cssCode.match(pattern);
console.log(hexadecimalColorCodes);

// /#[0-9a-fA-F]{6}/g: This regular expression matches hexadecimal color codes in CSS code. It looks for the "#" symbol followed by exactly six characters that are either digits (0-9) or lowercase/uppercase letters (a-f, A-F).
// g flag: This flag is used to find all matches in the CSS code.

// 2. Extract Numbers
const text = "Hello123World456";
const numbersPattern = /\d/g;
const numericalDigits = text.match(numbersPattern);
console.log(numericalDigits);
// /\d/g: This regular expression matches any numerical digit in the string.
// \d: This matches any digit character (0-9).
// g flag: This flag is used to find all matches in the string.
// text.match(pattern): This method finds all numerical digits in the text based on the regular expression pattern.
// numericalDigits: This variable stores an array containing all the numerical digits found in the text.

// 3. Find the right end-ing
const endingText = "I went walking, running and ate before sleeping";
const textPattern = /\b\w*ing\b/g;
const wordsEndingWithIng = endingText.match(textPattern);
console.log(wordsEndingWithIng);
// /\b\w*ing\b/g: This regular expression matches words that end with the letters "ing".
// \b: This matches a word boundary to ensure we're matching whole words.
// \w*: This matches zero or more word characters before the letters "ing".
// ing: This matches the literal letters "ing".
// \b: This matches a word boundary to ensure we're matching whole words.
// g flag: This flag is used to find all matches in the string.

// SHORT ANSWER ANSWERS
// 1)  Character classes in regular expressions allow us to match any one character from a set of characters. They are denoted by square brackets []. For example, the character class [aeiou] matches any vowel character. This is useful when we want to match specific sets of characters without specifying each character individually.  

// 2) The "^" anchor is used to match the start of a string, while the "$" anchor is used to match the end of a string. They are often used to ensure that a regex pattern matches the entire string rather than just a part of it. For example, the regex pattern ^hello$ would only match strings that consist of exactly "hello", ignoring any leading or trailing characters.

// 3) ANY THREE OF THE FOLLOWING 
// 1. Open the Google Chrome browser and navigate to the webpage containing the JavaScript code you want to debug.
// 2. Right-click on the webpage and select "Inspect" or press Ctrl + Shift + I to open the Developer Tools.
// 3. Go to the "Sources" tab in the Developer Tools.
// 4. Find the JavaScript file you want to debug in the file navigator on the left-hand side.
// 5. Set breakpoints by clicking on the line number where you want the execution to pause.
// 6. Interact with the webpage to trigger the execution of the JavaScript code.
// 7. When the code execution reaches a breakpoint, the execution will pause, and you can inspect variables, step through code, and analyze the call stack using the controls provided in the debugger panel.
// 8. Use next step to move through the code a step at a time and identify issues.
// 9. Use features like stepping over, stepping into, and stepping out of functions to navigate through the code and identify issues.

// 4) Console Logging: Inserting console.log() statements strategically within your code to print out values of variables, function outputs, or execution paths. This helps in tracking the flow of execution and identifying unexpected behavior or errors.

// MAY ALSO HAVE SOMETHING LIKE:
// Code Review: Reviewing your code line by line or with a peer to spot syntax errors, logic flaws, or potential pitfalls. Fresh eyes can often catch mistakes that the original author might overlook.


