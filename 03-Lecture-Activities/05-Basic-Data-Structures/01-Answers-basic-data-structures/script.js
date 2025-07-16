// 1. Write a function called fromPairs that takes an array of key-value pairs and turns it into an object.

function fromPairs(arr) {
  return Object.fromEntries(arr);
}

console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
  ])
); // { a: 1, b: 2 }
console.log(
  fromPairs([
    [7, "apples"],
    [2, "socks"],
  ])
); // { 7: "apples", 2: "socks" }

// 2. Write a function called replaceItem that removes 1 item from an array at a given index and inserts a new item.

function replaceItem(arr, index, item) {
  arr.splice(index, 1, item);
  return arr;
}

console.log(replaceItem(["a", "b", "c"], 1, "z")); // ["a", "z", "c"]
console.log(replaceItem(["Cowboys", "Eagles", "Raiders"], 2, "Broncos")); // ["Cowboys", "Eagles", "Broncos"]

// 3. Write a function called `partial` that returns a portion of a given array from a given starting index to a given stopping index.
function partial(arr, start, stop) {
    return arr.slice(start, stop)
}

console.log(partial([10, 11, 12, 13, 14, 15], 1, 3)) // [11, 12]
console.log(partial(["vanilla", "chocolate", "strawberry", "peach"], 0, 2)) // ["vanilla", "chocolate"]

// 4. Write a function called groupByCategory that takes an array of objects, each representing an item with a name and category, and returns an object that groups all item names under their respective categories.

function groupByCategory(arr) {
  const categoryObj = {};
  for (const obj of arr) {
    if (!categoryObj[obj["category"]]) {
      categoryObj[obj["category"]] = [];
    }
    categoryObj[obj["category"]].push(obj["name"]);
  }
  return categoryObj;
}

console.log(
  groupByCategory([
    { name: "Apple", category: "Fruit" },
    { name: "Carrot", category: "Vegetable" },
    { name: "Banana", category: "Fruit" },
    { name: "Broccoli", category: "Vegetable" },
  ])
); // { Fruit: ["Apple", "Banana"], Vegetable: ["Carrot", "Broccoli"] }

console.log(
  groupByCategory([
    { name: "Wrench", category: "Tools" },
    { name: "Hammer", category: "Tools" },
    { name: "Notebook", category: "Stationery" },
    { name: "Pen", category: "Stationery" },
    { name: "Drill", category: "Tools" },
  ])
); // { Tools: ["Wrench", "Hammer", "Drill"], Stationery: ["Notebook", "Pen"] }

console.log(
  groupByCategory([
    { name: "Shirt", category: "Clothing" },
    { name: "Apple", category: "Food" },
    { name: "Laptop", category: "Electronics" },
  ])
); // { Clothing: ["Shirt"], Food: ["Apple"], Electronics: ["Laptop"] }

// 5. Write a function called highestScoringStudent that takes an array of student objects and returns the name of the student with the highest score. If two or more students share the highest score, return an array containing the students' names.

// I can think of three paths through this, I'm not sure which one they'll pick. I'd say the last one (the second without using sort is the most straightforward and "best" solution, but I'm fine with any solution that works):
// With sort()=================================
// function highestScoringStudent(arr) {
//   const sortedArr = arr.sort((a, b) => b.score - a.score);
//   let highestScore = sortedArr[0]["score"];
//   const topScorers = [sortedArr[0]["name"]];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i]["score"] === highestScore) {
//       topScorers.push(arr[i]["name"]);
//     }
//   }
//   return topScorers.length === 1 ? topScorers[0] : topScorers;
// }

// Without sort() No. 1 =============================
// function highestScoringStudent(arr) {
//   const scoreObj = {};
//   let highestScore = 0;
//   for (const obj of arr) {
//     if (!scoreObj[obj["score"]]) {
//       scoreObj[obj["score"]] = [];
//     }
//     scoreObj[obj["score"]].push(obj["name"]);
//   }
//   for (const key in scoreObj) {
//     const numericKey = Number(key)
//     if (numericKey > highestScore) {
//       highestScore = numericKey;
//     }
//   }
//   return scoreObj[highestScore].length === 1
//     ? scoreObj[highestScore][0]
//     : scoreObj[highestScore];
// }

// Without sort() No. 2. This is the best. This might be the direction they'll go, but I'm not sure.
function highestScoringStudent(arr) {
  let highestScore = arr[0].score;
  let topStudents = [arr[0].name];

  for (let i = 1; i < arr.length; i++) {
    const { name, score } = arr[i];
    if (score > highestScore) {
      highestScore = score;
      topStudents = [name];
    } else if (score === highestScore) {
      topStudents.push(name);
    }
  }

  return topStudents.length === 1 ? topStudents[0] : topStudents;
}

console.log(
  highestScoringStudent([
    { name: "Alex", score: 82 },
    { name: "Bob", score: 91 },
    { name: "Charlie", score: 88 },
  ])
); // Bob

console.log(
  highestScoringStudent([
    { name: "Karl", score: 72 },
    { name: "Lena", score: 89 },
    { name: "Mark", score: 67 },
    { name: "Nina", score: 89 },
  ])
); // ["Lena", "Nina"]

console.log(
  highestScoringStudent([
    { name: "George", score: 70 },
    { name: "Helen", score: 70 },
    { name: "Ivan", score: 70 },
  ])
); // ["George", "Helen", "Ivan"]
