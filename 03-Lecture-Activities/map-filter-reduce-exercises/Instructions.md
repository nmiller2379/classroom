# Practice Array Methods

Below are some prompts to help you practice with the array methods .map(), .filter() and .reduce(). They are voluntary. Feel free to complete them as you have time.

## 1. Members of the club

**Prompt:**
Given an array of people objects wtih name and member properties, return a new array of objects with only members of the club.

```javascript
const clubMembers = (arr) => {
    //Your code here
}

const sampleObj = [
  { name: "Jeff Bezos", member: true },
  { name: "Neymar", member: false },
  { name: "Dwayne Johnson", member: true },
  { name: "Bill Gates", member: false },
  { name: "Robert Downy Jr.", member: true },
];

console.log(clubMembers(sampleObj)); // [{name: 'Jeff Bezos', member: true}, {name: 'Dwayne Johnson', member: true}, {name: 'Robert Downy Jr.', member: true}];
```

---

## 2. Just Initials

**Prompt:**
Given an array of people objects with name and age properties, return a new array containig only the initials of people age 21 or older.

```javascript
const adultInitials = (arr) => {
  // Your code here
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
```

---

## 3. Extract Property Values

**Prompt:**
Write a function that takes an array of objects and a property name, and returns an array of values corresponding to that property.

```javascript
const extractPropertyValues = (arr, prop) => {
  // Your code here
};

// Example
console.log(extractPropertyValues([{ a: 1 }, { a: 2 }, { a: 3 }], "a")); // Output: [1, 2, 3]
```

---

## 4. Append Index

**Prompt:**
Write a function that takes an array of strings and returns a new array where each string is appended with its index in the original array.

```javascript
const appendIndex = (arr) => {
  // Your code here
};

// Example
console.log(appendIndex(["apple", "banana", "cherry"])); // Output: ['apple0', 'banana1', 'cherry2']
```

---

## 5. Average Income

**Prompt:**
Given an array of people objects, with name, age and income properties, write a function that will return the average income of the people.

```javascript
const averageEarnings = (arr) => {
  // Your code here
};

// Example
const people = [
  { name: "John", age: 34, income: 67000 },
  { name: "Amy", age: 20, income: 35700 },
  { name: "Phil", age: 10, income: 55000 },
  { name: "Carle", age: 27, income: 27000 },
  { name: "Stan", age: 21, income: 22000 },
];

console.log(averageEarnings(people)); // 41700
```

---

## 6. Convert to Object

**Prompt:**
Write a function that takes an array of arrays, where each inner array contains two elements representing a key-value pair, and returns an array of objects created from these pairs.

```javascript
const convertToObject = (arr) => {
  // Your code here
};

// Example
console.log(
  convertToObject([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
); // Output: [{a: 1}, {b: 2}, {c: 3}]
```

---

## 7. Count Occurances

**Prompt:**
Write a function that, given a two-dimensional array, counts the occurrences of each distinct element within it. The function should return an object where the property names are the unique values from the array, and the corresponding values are the counts of each element's occurrences.

```javascript
const countOccurances = (arr) => {
  // Your code here
};

// Example
const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
console.log(countOccurances(input)); // { a: 1, b: 1, c: 2, d: 2, f: 2, g: 1 }
```

---

## 8. Replace Characters

**Prompt:**
Write a function that takes a string and an object where the keys are characters to be replaced and the values are the characters to replace them with. Return a new string with the replacements applied.

```javascript
const replaceCharacters = (str, replacements) => {
  // Your code here
};

// Example
console.log(replaceCharacters("hello world", { h: "H", w: "W" })); // Output: 'Hello World'
```

---

## 9. Group By Length

**Prompt:**
Write a function that takes an array of strings and returns an object where the keys are string lengths and the values are arrays of strings of that length.

```javascript
const groupByLength = (arr) => {
  // Your code here
};

// Example
console.log(groupByLength(["one", "two", "three", "four", "five"]));
// Output: {3: ['one', 'two'], 4: ['four', 'five'], 5: ['three']}
```

---

## 10. Sum of Digits

**Prompt:**
Write a function that takes an array of numbers and returns a new array where each number is replaced by the sum of its digits.

```javascript
const sumOfDigits = (arr) => {
  // Your code here
};

// Example
console.log(sumOfDigits([123, 456, 789])); // Output: [6, 15, 24]
```

---

These prompts should help you practice with the array methods .map(), .filter() and .reduce(). To complete them, create a `script.js` and an `index.html` file. Connect the two and work in your `script.js`. Log your results to your client-side console. You may work on these problems as you have time.
