// 1. Given an array of numbers, return a new array that has only the numbers that are greater than or equal to 5.

const sampleArr = [3, 6, 8, 2]

function GreatherThanFive(arr) {
    return arr.filter(e => e >= 5)
}

console.log(GreatherThanFive(sampleArr))

// 2. Given an array of numbers, return a new array tht only includes the even numbers.
function onlyEvens(arr) {
    return arr.filter(e => e % 2 === 0)
}

console.log(onlyEvens(sampleArr))

// 3. Given an array of strings, return a new array that only includes those strings with a length fewer than five. For example, ["dog", "wolf", "by", "family", "eaten", "camping"] => ["by", "dog", "wolf", "eaten"]

const sampleArrOfStrings = ["dog", "by", "wolf", "family", "eaten", "camping"]  

function lessThanFive(arr) {
    return arr.filter(e => e.length <= 5)
}

console.log(lessThanFive(sampleArrOfStrings))

// 4. Given an array of people objects wtih a name and member properties, return a new array of objects with only members of the club. For example: [{ name: "Jeff Bezos", member: true },{ name: "Neymar", member: false }, { name: "Dwayne Johnson", member: true }, { name: "Bill Gates", member: false }, { name: "Robert Downy Jr.", member: true }] => [{name: 'Jeff Bezos', member: true}, {name: 'Dwayne Johnson', member: true}, {name: 'Robert Downy Jr.', member: true}]

function clubMembers(arr) {
  return arr.filter((e) => e.member === true);
}

const sampleObj = [
  { name: "Jeff Bezos", member: true },
  { name: "Neymar", member: false },
  { name: "Dwayne Johnson", member: true },
  { name: "Bill Gates", member: false },
  { name: "Robert Downy Jr.", member: true },
];

console.log(clubMembers(sampleObj));

// 5. Given an array of people objects with name and age properties, return a new array containig only the initials of people age 21 or older. HINT: the Array.prototype.filter() method will be helpful with this challenge, but you will likely need more than just that method to return the right result. For example: [{ name: "Olivia Holt", age: 80 }, { name: "Elle Fanning", age: 2 }, { name: "Jennifer Lawrence", age: 5 }, { name: "Scarlett Johanson", age: 16 }, { name: "Sarah Jessica Parker", age: 100 }] => ["OH", "SJP"]

const peopleArr = [
  { name: "Olivia Holt", age: 80 },
  { name: "Elle Fanning", age: 2 },
  { name: "Jennifer Lawrence", age: 5 },
  { name: "Scarlett Johanson", age: 16 },
  { name: "Sarah Jessica Parker", age: 100 },
];

function adultInitials(arr) {
  return arr
    .filter((e) => e.age >= 21)
    .map((e) =>
      e.name
        .split(" ")
        .map((e) => e[0])
        .join(" ")
    );
}

// console.log(adultInitials(peopleArr))

function adultInitialsAgain(arr) {
  return arr
    .filter((e) => e.age >= 21)
    .map((e) =>
      e.name
        .split(" ")
        .map((e) => e[0])
        .join("")
    );
}

console.log(adultInitialsAgain(peopleArr))