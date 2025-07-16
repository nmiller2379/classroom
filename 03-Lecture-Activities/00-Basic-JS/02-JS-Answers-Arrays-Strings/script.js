// 1. Bracket Notation Exploration===================================================
let myString = "JavaScript";

let char1 = myString[2]; // Access character at position 2
let char2 = myString[5]; // Access character at position 5
let char3 = myString[8]; // Access character at position 8

console.log(myString[6], myString[7], myString[0]);

// 2. Array Manipulation==================================================
let favoriteFruits = ["apple", "banana", "orange"];

// Add a new fruit to the end
favoriteFruits.push("kiwi");

console.log(favoriteFruits)

// Remove the last fruit
let removedFruit = favoriteFruits.pop();
favoriteFruits.pop()
favoriteFruits.pop()

console.log(removedFruit)
console.log(favoriteFruits)

// Modify the first fruit
favoriteFruits[0] = "grape";

// Display the modified array
console.log(favoriteFruits);
console.log("Removed Fruit:", removedFruit);

// Something Extra ===========================================
const newArray = [];
const oldArray = [1, 2, 3]
const anotherOldArray = [4, 5, 6]

newArray.push(oldArray)
newArray.push(anotherOldArray)

console.log(newArray)

// 3. Multi-Dimensional Array Puzzle========================================================
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Access and display the value at the second row and third column
// let element = matrix[1][2];
console.log(matrix[1][2]);

// 4. Find the index of elements==================================================
const fruit = ["apple", "strawberry", "peach"]
console.log(fruit.indexOf("strawberry"))
console.log(fruit.indexOf("Carl"))

// Change the word=========================================================
const hello = "hello"
const newWord = hello.split("")
newWord[0] = "J"
const jello = newWord.join("")

console.log(jello)
