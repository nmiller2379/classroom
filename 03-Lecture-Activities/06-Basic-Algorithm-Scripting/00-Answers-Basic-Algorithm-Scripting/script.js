// Reverse a string
// Write a function called reverseString that a string and returns the reverse of the string. For example, "hello" should become "olleh".

function reverseString(str) {
  if (typeof str === "string" && str.length > 0) {
    return str.split("").reverse().join("");
  }
  return "Please submit a string.";
}

console.log(reverseString("hello")); //olleh
console.log(reverseString("Stan")); //natS
console.log(reverseString("The quick brown fox jumped over the lazy red dog")); //god der yzal eht revo depmuj xof nworb kciuq ehT
console.log(reverseString("")); // Please submit a string
console.log(reverseString(7)); // Please submit a string
console.log(reverseString("a")); // a

// Write a function called factorialize that takes an integer and returns the factorial of that integer.

// Hint: If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented in mathematics with the shorthand notation n!

function factorialize(num) {
  let int = parseInt(num);
  if (int > 0) {
    let total = 1;
    while (int > 0) {
      total *= int;
      int--;
    }
    return total;
  }
  return "It is not possible to find the factorial of an integer less than 0. Submit an integer greater than 0.";
}

console.log(factorialize(5)); // 120
console.log(factorialize(3)); //6
console.log(factorialize(5.5)); //120
console.log(factorialize(77)); //1.451830920282859e+113
console.log(factorialize(0.5)); // It is not possible to find the factorial of an integer less than 0. Submit an integer greater than 0.
console.log(factorialize("")); //It is not possible to find the factorial of an integer less than 0. Submit an integer greater than 0.

// Return Largest Numbers in Arrays
// Write a function called largestOfArr that takes an array of arrays and return an array consisting of the largest number from each provided sub-array.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfArr(arr) {
  if (Array.isArray(arr)) {
    const largestNums = [];
    for (const element of arr) {
      if (Array.isArray(element) && element.length > 0) {
        let largestNum = -Infinity;
        for (let i = 0; i < element.length; i++) {
          if (typeof element[i] === "number" && !Number.isNaN(element[i])) {
            if (element[i] > largestNum) {
              largestNum = element[i];
            }
          } else {
            return "All elements in sub arrays must be numbers";
          }
        }
        largestNums.push(largestNum);
      } else if (Array.isArray(element) && element.length === 0) {
        largestNums.push(element);
      } else {
        return "Please submit an array of arrays";
      }
    }
    return largestNums;
  }
  return "Please submit an array";
}

console.log(
  largestOfArr([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
); // [27, 5, 39, 1001]
console.log(largestOfArr([[1], [2], [3], [4]])); // [1, 2, 3, 4]
console.log(
  largestOfArr([
    [-17, -12, -19],
    [-2, -8, -11],
  ])
); // [-12, -2]
console.log(largestOfArr([])); // []
console.log(largestOfArr("James")); //Please submit an array
console.log(largestOfArr([[1, 2, 3], ["Carl"], [7, 8, 0]])); // All elements in sub arrays must be numbers
console.log(largestOfArr([[22, 17, 9], "Mike", [1, 2, 3]])); // Please submit an array of arrays
console.log(largestOfArr([[1, 2, 3], [], [4, 5]])); // [3, [], 5];
console.log(
  largestOfArr([
    [1, 2],
    [NaN, 4],
  ])
); // All elements in sub arrays must be numbers
console.log(largestOfArr([[1, 2], "", [3, 4]])); //Please submit an array of arrays

// Write a function called getRandomElement that takes an array of strings as input and returns a random element from the array.

function getRandomElement(arr) {
  if (arr.length > 0) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  return "Please provide elements in the array."
}

console.log(getRandomElement(["Bob", "Frank", "Stan"])); // Should return randomly selected name, either "Bob", "Frank" or "Stan". Should not return undefined
console.log(getRandomElement([])) // "Please provide elements in the array"

// Write a function called getAnimalType that takes a string representing an animal name and returns a category based on this logic:
function getAnimalType(animal) {
  switch (animal) {
    case "dog":
    case "cat":
      return "mammal";
    case "giraffe":
    case "elephant":
      return "large mammal";
    case "zebra":
      return "stripped mammal";
    default:
      return "unknown mammal";
  }
}

console.log(getAnimalType("dog")); // "mammal"
console.log(getAnimalType("elephant")); // "large mammal"
console.log(getAnimalType("zebra")); // "striped mammal"
console.log(getAnimalType("snake")); // "unknown animal"
console.log(getAnimalType("horse")); // "unknown animal"
console.log(getAnimalType("")); // "unknown mammal"
console.log(getAnimalType("7")); // "unknown mammal"
