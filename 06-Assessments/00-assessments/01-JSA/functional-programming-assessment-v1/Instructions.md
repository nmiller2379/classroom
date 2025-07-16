# Getting started
In this directory, create an `index.html` file and a `script.js`. Ensure the two are connected. Working in your `script.js` file, complete the three coding challenges. Be sure to use comments in your code to indicate which question you're answering. Working in this `Instructions.md` file, answer the three short-answer questions. For the follwing coding challenges, use any combination of the map, filter or reduce methods to solve these problems.

## Coding tasks(3 points each)
1. Given an array of numbers, write a function that returns a new array of only numbers between a given range. For example, [-5, -4, 1, 3, 7, 12, 13, 15, 17, 21, 23, 25, 27, 30], 5, 20 => [7, 12, 13, 15, 17]

2. We want to send an email to each of our users. They are stored in the employees array below. But we only need their first name to personalize the email. We want to store that array in a variable called const employeesFirstNames. Without mutating the original employees array, assign an array of employees first names to the const usersFirstNames variable. Log the employeesFirstNames to the console.
const employees = [
  {
    firstName: "Bradley",
    lastName: "Bouley",
    role: "Full Stack Resident",
    tenure: 7,
    perforamceReviews: [89, 74, 91, 80],
  },
  {
    firstName: "Chloe",
    lastName: "Alnaji",
    role: "Full Stack Resident",
    tenure: 10,
    perforamceReviews: [81, 69, 91, 78],
  },
  {
    firstName: "Jonathan",
    lastName: "Baughn",
    role: "Enterprise Instructor",
    tenure: 3,
    perforamceReviews: [75, 79, 64, 70],
  },
  {
    firstName: "Michael",
    lastName: "Herman",
    role: "Lead Instructor",
    tenure: 17,
    perforamceReviews: [65, 79, 64, 70],
  },
  {
    firstName: "Robert",
    lastName: "Hajek",
    role: "Full Stack Resident",
    tenure: 9,
    perforamceReviews: [99, 84, 81, 90],
  },
  {
    firstName: "Wes",
    lastName: "Reid",
    role: "Instructor",
    tenure: 2,
    perforamceReviews: [79, 84, 90, 81],
  },
  {
    firstName: "Zach",
    lastName: "Klabunde",
    role: "Instructor",
    tenure: 2,
    perforamceReviews: [89, 77, 96, 87],
  },
];

3. We also want to send a congratulation email to our longest-tenured employees, but we only want the email to go to employees who received good scores on their quarterly performance reviews last year. Given the dataset above, write a function that will return an array of objects with firstName, lastName, tenure and averageReview properties for the employees who have been with the company at least five years and have an average review score of 80 or higher. Do not mutate the original array.

**Extra Credit.** Write a function that takes an array of numbers and uses the reduce method to return an object with mean and median numbers in the array. For example, [12, 46, 32, 64] => { mean: 38.5, median: 39 } HINT: The mean is the sum of the terms divided by the number of terms. The median is derived by putting the terms in order from lowest to highest and then finding the middle number. If the dataset is an even number of terms, the median is derived by averaging the two middle numbers. ADDITIONAL: If you want to solve this procedurally for half credit, you are free to do so but make sure you make it clear in your comments that is what you're doing.

## Long-answer questions(2 points each)
1. What is functional programming?

2. What is a pure function?

3. What is state?