// Given a string of space-separated digits representing whole numbers, return the highest and lowest numbers.

function highestAndLowest(str) {
  let min = Infinity;
  let max = -Infinity;
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
  }
  for (const num of arr) {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  }
  return [min, max];
}

const result = highestAndLowest("7 12 29 4"); // [4, 29]
const result1 = highestAndLowest("-700 102 90 -4"); //[ -700, 102 ]
const result2 = highestAndLowest("-2 -3 -1"); // [ -3, -1 ]
const result3 = highestAndLowest("07 019 12 01"); // [ 1, 19 ]
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);

// Determine if a string is an isogram (case-insinsitive). An isogram has no repeating letters. The string will be made up only of English letters, though the letters may be uppercase or lowercase. (no repeating letters, case-insensitive, ignoring spaces/hyphens).

function isIsogram(str) {
  const lowerCaseStr = str.toLowerCase();
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (lowerCaseStr.indexOf(lowerCaseStr[i]) !== i) {
      return false;
    }
  }
  return true;
}

const result4 = isIsogram("abc"); // true
const result6 = isIsogram("ABbC"); // false
const result7 = isIsogram(""); // true
const result8 = isIsogram("Thequickbrownfoxjumpedoverthelazyreddog"); // false

console.log(result4);
console.log(result6);
console.log(result7);
console.log(result8);

// Given a string, return a string with all a's replaced with 4s, all e's replaced with 3s and all l's replaces with 1s.
function replaceLetters(str) {
  let newString = "";
  for (const letter of str) {
    switch (letter) {
      case "a":
        newString += "4";
        break;
      case "A":
        newString += "4";
        break;
      case "e":
        newString += "3";
        break;
      case "E":
        newString += "3";
        break;
      case "l":
        newString += "1";
        break;
      case "L":
        newString += "1";
        break;
      default:
        newString += letter;
        break;
    }
  }
  return newString;
}

const result9 = replaceLetters("Hello World"); //H311o World
const result10 = replaceLetters("Earth"); //34rth
const result11 = replaceLetters(""); //""
const result12 = replaceLetters("AlL"); //411

console.log(result9);
console.log(result10);
console.log(result11);
console.log(result12);

// You have two objects representing warehouse inventories.

// currentInv maps item names → current stock (non-negative integers).

// newShip maps item names → newly arrived stock (non-negative integers).

// Write a function mergeInventories(currentInv, newShip) that returns a brand-new object where each key is an item name and its value is the sum of stocks from both inputs.

// If an item appears in only one of the inputs, include it with whatever count it has.

function mergeInventories(currentInv, newShip) {
  const totalInv = {};
  for (const key in currentInv) {
    if (currentInv.hasOwnProperty(key)) {
      totalInv[key] = currentInv[key];
    }
  }
  for (const key in newShip) {
    if (newShip.hasOwnProperty(key)) {
      if (totalInv.hasOwnProperty(key)) {
        totalInv[key] += newShip[key];
      } else {
        totalInv[key] = newShip[key];
      }
    }
  }
  return totalInv;
}

const result13 = mergeInventories(
  { apples: 5, oranges: 10 },
  { bananas: 3, apples: 2 }
);
// → { apples: 7, oranges: 10, bananas: 3 }
const result14 = mergeInventories(
  { pen: 10, notebook: 5 },
  { notebook: 7, eraser: 2 }
);
// → { pen: 10, notebook: 12, eraser: 2 }
const result15 = mergeInventories({}, { screws: 100 });
// → { screws: 100 }

console.log(result13);
console.log(result14);
console.log(result15);


// Given an integer, square every digit and concatenate them.
function squareDigit(num) {
    let numsArr = num.toString().split("")
    for (let i = 0; i < numsArr.length; i++) {
        numsArr[i] = parseInt(Math.pow(numsArr[i], 2))
    }
    return numsArr.join("")
}

const result16 = squareDigit(44) //1616
const result17 = squareDigit(11) //11
const result18 = squareDigit(22) //44
const result19 = squareDigit(317) //9149
const result20 = squareDigit(307) //9049
console.log(result16)
console.log(result17)
console.log(result18)
console.log(result19)
console.log(result20)

