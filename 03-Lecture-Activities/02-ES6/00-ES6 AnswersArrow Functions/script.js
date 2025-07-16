// 1. Convert to arrow function.
function convertMiles(miles) {
  return miles * 1.609;
}

const convertMilesArrow = miles => miles * 1.609

console.log(convertMilesArrow(7))

// 2. Square a number
const square = num => num * num

console.log(square(5))

// 3. Dog's life
const dogAge = (name, age) => name + " is " + (age * 7) + " years old."

// 4. Unlimited args

const sum = (...nums) => {
    let total = 0
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]; 
    }
    return total
}

console.log(sum(1, 2, 3, 4, 5))