function addNumbers(a, b) {
  return a + b;
}

function calculateAndReturnSum(a, b) {
   let sum = addNumbers(a, b);
  return "The value of " + a + " and" + b + " is " + sum;
}

calculateAndReturnSum(10, 10)


// console.log(calculateAndReturnSum(10, 7));

// function calculateArea(width, height) {
//   return width * height;
// }

// function formatArea(area) {
//   console.trace("Trace formatArea Calls");
//   return `The area is ${area} square units.`;
// }

// function displayArea(width, height) {
//   const area = calculateArea(width, height);
//   const formattedArea = formatArea(area);
//   console.log(formattedArea);
// }

// displayArea(5, 10);

function checkNums(num1, num2) {
  if (num1 > num2) {
    console.log("I'm here -- num1 > num2 condition")
   return num1 + " is greater than " + num2
  }
  return num1 + " is less than " + num2
}

const result = checkNums(10, 7)
console.log(result)


function addNums(num1, num2) {
  console.log(typeof num1, typeof num2)
  return num1 + num2
}
const total = addNums("2", "2")
console.log(total)

let num = 8

console.log(num())