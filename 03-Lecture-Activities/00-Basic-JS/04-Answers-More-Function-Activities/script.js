// Write a function called `multiplyByFive` that takes a number and returns that number multiplied by 5.
function multiplyByFive(num) {
  return 5 * num;
}

console.log(multiplyByFive(2));

// Write a function called `sayTwice` that takes a string as input and returns that string repeated twice.
function sayTwice(str) {
  let stringArr = [str];
  stringArr.push(str);
  return stringArr.join("");
}

console.log(sayTwice("hi"));

// Write a function called `makeList` that takes three values and returns them as an array.
function makeList(item1, item2, item3) {
  const arr = [];
  arr.push(item1);
  arr.push(item2);
  arr.push(item3);
  return arr;
}

console.log(makeList("apples", "bananas", "pears"));

// Write a function called `lastLetter` that takes a string and returns just the last character.
function lastLetter(str) {
  return str[str.length - 1];
}

console.log(lastLetter("JavaScript"));

// Write a function called `addAndRound` that takes two numbers, adds them together, and returns the **rounded result**.
function addAndRound(num1, num2) {
  return Math.round(num1 + num2);
}

console.log(addAndRound(3.4, 2.7));

// Write a function called `firstAndLast` that takes a string and returns a new string made up of **only the first and last characters**
function firstAndLast(str) {
  const stringArray = [];
  stringArray.push(str[0], str[str.length - 1]);
  return stringArray.join("");
}

console.log(firstAndLast("banana"));
console.log(firstAndLast("dog"));

// Write a function called `sumEnds` that takes an array of numbers and returns the **sum of the first and last numbers** in the array.
function sumEnds(arr) {
  return arr[0] + arr[arr.length - 1];
}

console.log(sumEnds([3, 7, 2])); // returns 5
console.log(sumEnds([10, 4, 8, 6])); // returns 16
