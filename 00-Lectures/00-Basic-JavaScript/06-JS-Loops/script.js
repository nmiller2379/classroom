// let count = 0;

// while (count < 5) {
//   console.log("Count: " + count);
//   count++;
// }


// for (let i = 0; i < 5; i++) {
//     console.log("Iteration: " + i);
// }

// for (let i = 5; i > 0; i--) {
//     console.log("Countdown: " + i);
// }

// const fruits = ["apple", "banana", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log("Fruit: " + fruits[i]);
// }

// const fruits = ["apple", "banana", "orange"];

// for (let fruit of fruits) {
//     console.log("Fruit: " + fruit);
// }

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log("i: " + i + ", j: " + j);
//   }
// }

// let num = 0;

// do {
//     console.log("Number: " + num);
//     num++;
// } while (num < 0);

const person = { name: "John", age: 30, occupation: "Developer" };

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        let value = person[key];
        console.log("Property: " + key + ", Value: " + value);
    }
}














