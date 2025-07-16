
let word = "Cipher";
console.log(word.toUpperCase()); // "CIPHER"
console.log(word.toLowerCase()); // "cipher"

const anotherWord = "Caesar";
const anotherWordUpper = anotherWord.toUpperCase();
const anotherWordLower = anotherWord.toLocaleLowerCase();
console.log(anotherWordUpper)
console.log(anotherWordLower)

let message = "HELLO";
let letters = message.split("");
console.log(letters); // ["H", "E", "L", "L", "O"]

let arr = ["H", "E", "L", "L", "O"];
let newStr = letters.join("");
console.log(newStr); // "HELLO"

let myMessage = "Hello"
let messageArr = myMessage.split("")
console.log(myMessage)

const alphabet = ["A", "B", "C", "D", "E"];
console.log(alphabet.indexOf("C")); // 2
console.log(alphabet.indexOf("Z")); // -1 (not found)

let newWord = "HELLO";
// 2 (first match only!)
console.log(newWord.indexOf("L")); 

const hello = "HELLO";
console.log(hello.length); // 5

const helloArr = ["H", "E", "L", "L", "O"];
console.log(helloArr.length); // 5

let lastLetter = hello[hello.length - 1]; // "O"
let lastItem = helloArr[helloArr.length - 1]; // "O"

console.log("using at", helloArr.at(-1))

