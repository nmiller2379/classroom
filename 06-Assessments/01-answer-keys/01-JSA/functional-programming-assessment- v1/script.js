// 1. Given an array of numbers, write a function that returns a new array of only numbers between a given range. For example, [-5, -4, 1, 3, 7, 12, 13, 15, 17, 21, 23, 25, 27, 30], 5, 20 => [7, 12, 13, 15, 17]

const numsArr = [-5, -4, 1, 3, 7, 12, 13, 15, 17, 21, 23, 25, 27, 30];

function returnRange(arr, start, end) {
  return arr.filter((e) => e > start && e < end);
}

console.log(returnRange(numsArr, 5, 20));

// 2. We want to send an email to each of our users. They are stored in the employees array below. But we only need their first name to personalize the email. We want to store that array in a variable called const employeesFirstNames. Without mutating the original employees array, assign an array of employees first names to the const usersFirstNames variable. Log the employeesFirstNames to the console.

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

const employeesFirstNames = employees.map((e) => e.firstName);

console.log(employeesFirstNames);

// 3. We also want to send a congratulation email to our longest-tenured employees, but we only want the email to go to employees who received good scores on their quarterly performance reviews last year. Given the dataset above, write a function that will return an array of objects with firstName, lastName, tenure and averageReview properties for the employees who have been with the company at least five years and have an average review score of 80 or higher. Do not mutate the original array.

function findEmployees(arr) {
  const tenuredEmployees = arr.filter((employee) => employee.tenure > 4);
  console.log(tenuredEmployees);
  const employeesToEmail = tenuredEmployees.map((employee) => {
    const reviewTotal = employee.perforamceReviews.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return {
      firstName: employee.firstName,
      lastName: employee.lastName,
      tenure: employee.tenure,
      averageReview: reviewTotal / 4,
    };
  });
  return employeesToEmail.filter((employee) => employee.averageReview >= 80);
}

console.log(findEmployees(employees));

// 4. Write a function that takes an array of numbers and uses the reduce method to return an object with mean and median numbers in the array. For example, [12, 46, 32, 64] => { mean: 38.5, median: 39 } HINT: The mean is the sum of the terms divided by the number of terms. The median is derived by putting the terms in order from lowest to highest and then finding the middle number. If the dataset is an even number of terms, the median is derived by averaging the two middle numbers

function findMeanMedian(arr) {
  return arr.reduce(
    (accumulator, currentValue, index) => {
      accumulator.mean += currentValue / arr.length;

      if (arr.length % 2 === 0) {
        // if the array has an even number of elements
        if (index === arr.length / 2 - 1) {
          accumulator.median += currentValue;
        } else if (index === arr.length / 2) {
          accumulator.median += currentValue;
          accumulator.median /= 2;
        }
      } else {
        // if the array has an odd number of elements
        if (index === (arr.length - 1) / 2) {
          accumulator.median = currentValue;
        }
      }

      return accumulator;
    },
    { mean: 0, median: 0 }
  );
}

console.log(findMeanMedian([12, 46, 32, 64]));

// SHORT ANSWER QUESTIONS
// 1. What is functional programming?
// Functional programming is a software development methodology in which code is written in simple, isolated functions, without any side effects outside of the function scope.


// 2. What is a pure function?
// A pure function in JavaScript is a function that returns the same result if the same arguments(input) are passed in the function.

// 3. What is state?
// The value of variables at any given point in the execution of the program.