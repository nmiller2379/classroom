// 1. Members of the club: Given an array of people objects wtih name and member properties, return a new array of objects with only members of the club.

const clubMembers = (arr) => {
  return arr.filter((e) => e.member);
};

const sampleObj = [
  { name: "Jeff Bezos", member: true },
  { name: "Neymar", member: false },
  { name: "Dwayne Johnson", member: true },
  { name: "Bill Gates", member: false },
  { name: "Robert Downy Jr.", member: true },
];

console.log(clubMembers(sampleObj)); // [{name: 'Jeff Bezos', member: true}, {name: 'Dwayne Johnson', member: true}, {name: 'Robert Downy Jr.', member: true}];

// 2. Just Initials: Given an array of people objects with name and age properties, return a new array containig only the initials of people age 21 or older.

const adultInitials = (arr) => {
  return arr
    .filter((e) => e.age >= 21)
    .map((e) => e.name.split(" "))
    .map((e) => e.map((e) => e[0]))
    .map((e) => e.join(""));
};

// Example
const peopleArr = [
  { name: "Olivia Holt", age: 80 },
  { name: "Elle Fanning", age: 2 },
  { name: "Jennifer Lawrence", age: 5 },
  { name: "Scarlett Johanson", age: 16 },
  { name: "Sarah Jessica Parker", age: 100 },
];

console.log(adultInitials(peopleArr)); //["OH", "SJP"]

// 3. Extract Property Values: Write a function that takes an array of objects and a property name, and returns an array of values corresponding to that property.
const extractPropertyValues = (arr, prop) => {
  return arr.filter((e) => e.hasOwnProperty(prop));
};

// Example
console.log(extractPropertyValues([{ a: 1 }, { a: 2 }, { a: 3 }], "a")); // Output: [1, 2, 3]

// 4. Append Index: Write a function that takes an array of strings and returns a new array where each string is appended with its index in the original array.

const appendIndex = (arr) => {
  return arr.map((e, i) => (e += i));
};

// Example
console.log(appendIndex(["apple", "banana", "cherry"])); // Output: ['apple0', 'banana1', 'cherry2']

// 5. Average Income: Given an array of people objects, with name, age and income properties, write a function that will return the average income of the people.

const averageEarnings = (arr) => {
  return arr.reduce((acc, cur) => acc + cur.income, 0) / arr.length;
};

// Example
const people = [
  { name: "John", age: 34, income: 67000 },
  { name: "Amy", age: 20, income: 35700 },
  { name: "Phil", age: 10, income: 55000 },
  { name: "Carle", age: 27, income: 27000 },
  { name: "Stan", age: 21, income: 22000 },
];

console.log(averageEarnings(people)); // 41340

// 6. Convert to Object: Write a function that takes an array of arrays, where each inner array contains two elements representing a key-value pair, and returns an array of objects created from these pairs.

const convertToObject = (arr) => {
  return arr.map(([key, value]) => ({ [key]: value }));
};

// Example
console.log(
  convertToObject([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
); // Output: [{a: 1}, {b: 2}, {c: 3}]

// 7. Count Occurances: Write a function that, given a two-dimensional array, counts the occurrences of each distinct element within it. The function should return an object where the property names are the unique values from the array, and the corresponding values are the counts of each element's occurrences.

const countOccurances = (arr) => {
  let flattened = arr.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    []
  );
  return flattened.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
      accumulator[currentValue] += 1;
    } else {
      accumulator[currentValue] = 1;
    }
    return accumulator;
  }, {});
};

// Example
const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
console.log(countOccurances(input)); // { a: 1, b: 1, c: 2, d: 2, f: 2, g: 1 }

// 8. Replace Characters: Write a function that takes a string and an object where the keys are characters to be replaced and the values are the characters to replace them with. Return a new string with the replacements applied.

const replaceCharacters = (str, replacements) => {
  return str
    .split("")
    .map((e) => replacements[e] || e)
    .join("");
};

// Example
console.log(replaceCharacters("hello world", { h: "H", w: "W" })); // Output: 'Hello World'

// 9. Group By Length: Write a function that takes an array of strings and returns an object where the keys are string lengths and the values are arrays of strings of that length.

const groupByLength = (arr) => {
  return arr.reduce((acc, str) => {
    const len = str.length;
    if (!acc[len]) {
      acc[len] = [];
    }
    acc[len].push(str);
    return acc;
  }, {});
};

// Example
console.log(groupByLength(["one", "two", "three", "four", "five"]));
// Output: {3: ['one', 'two'], 4: ['four', 'five'], 5: ['three']}

// 10. Sum of Digits: Write a function that takes an array of numbers and returns a new array where each number is replaced by the sum of its digits.

const sumOfDigits = (arr) => {
  return arr.map((num) => {
    return num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  });
};

// Example
console.log(sumOfDigits([123, 456, 789])); // Output: [6, 15, 24]
