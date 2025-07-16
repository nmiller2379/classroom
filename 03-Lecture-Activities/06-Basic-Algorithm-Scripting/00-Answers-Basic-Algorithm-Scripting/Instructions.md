# Basic Algorithm Scripting Activities

These activities will help you practice some of the concepts we've been discussing in the lectures as well as your problem solving skills.

## 1. Element of Randomness

Write a function called `getRandomElement` that takes an array of strings as input and returns a random element from the array.

```js
console.log(getRandomElement(["Bob", "Frank", "Stan"])); // Should return randomly selected name, either "Bob", "Frank" or "Stan". Should not return undefined
console.log(getRandomElement([])) // "Please provide elements in the array"
```

## 2. It's a Jungle Out There

Write a function called `getAnimalType` that takes a string representing an animal name and returns a category based on this logic:

| Animal                        | Category          |
|------------------------------|-------------------|
| "dog", "cat"                 | "mammal"          |
| "elephant", "giraffe"        | "large mammal"    |
| "zebra"                      | "striped mammal"  |
| anything else                | "unknown mammal"  |


```js
console.log(getAnimalType("dog")); // "mammal"
console.log(getAnimalType("giraffe")); // "large mammal"
console.log(getAnimalType("zebra")); // "striped mammal"
console.log(getAnimalType("snake")); // "unknown animal"
console.log(getAnimalType("horse")); // "unknown animal"
console.log(getAnimalType("")); // "unknown mammal"
console.log(getAnimalType("7")); // "unknown mammal"
```

## 3. Reverse a String

Write a function called `reverseString` that takes a string and returns the reverse of the string. For example, "hello" should become "olleh".

```js
console.log(reverseString("hello")); //olleh
console.log(reverseString("Stan")); //natS
console.log(reverseString("The quick brown fox jumped over the lazy red dog")); //god der yzal eht revo depmuj xof nworb kciuq ehT
console.log(reverseString("")); // Please submit a string
console.log(reverseString(7)); // Please submit a string
console.log(reverseString("a")); // a
```

# 4. Find the Factorial

Write a function called `factorialize` that takes an integer and returns the factorial of that integer.

**Hint:** If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented in mathematics with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

```js
console.log(factorialize(5)); // 120
console.log(factorialize(3)); //6
console.log(factorialize(5.5)); //120
console.log(factorialize(77)); //1.451830920282859e+113
console.log(factorialize(0.5)); // It is not possible to find the factorial of an integer less than 0. Submit an integer greater than 0.
console.log(factorialize("")); //It is not possible to find the factorial of an integer less than 0. Submit an integer greater than 0.
```

# 5. Largest Number of Array

Write a function called largestOfArr that takes an array of arrays and return an array consisting of the largest number from each provided sub-array.

```js
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
```
