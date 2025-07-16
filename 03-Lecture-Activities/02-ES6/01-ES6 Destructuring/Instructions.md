# Destructuring and Interpolation
These activities will help you practice with array and object destructuring as well as string interpolation.

## 1. Merge Arrays
**Objective:** Practice using the spread operator to merge arrays.
**Instructions:** 
- You are given two arrays, for example, array1 = [1, 2, 3] and array2 = [4, 5, 6].
Write a function called mergeArrays that takes two arrays as arguments and returns a single array containing all elements from both arrays, utilizing the spread operator.
Your function should return a merged array when called, for instance, mergeArrays(array1, array2) should return [1, 2, 3, 4, 5, 6].

## 2. Extract Object Properties
**Objective:** Practice using destructuring assignment to extract object properties.
**Instructions:** You are given an object: const person = { name: 'John', age: 30, city: 'New York' }.
- Write code to extract the name and city properties of the person object using destructuring assignment and store them in variables.
- After destructuring, your code should result in the `name` variable containing 'John' and the `city` variable containing 'New York'.

## 3. Extracting Skills
**Objective:** Practice using destructuring assignment with arrays to extract information.
**Instructions:** You are given an array containing information about a person's programming skills: const skills = ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js']
- Write JavaScript code to destructure the skills array to extract individual programming skills.
- Assign the extracted values to variables representing each programming skill.
- Use array destructuring to assign each element of the skills array to separate variables.
- Ensure that each variable represents a different programming skill from the array.
- Since the skills array contains five elements representing JavaScript, HTML, CSS, React, and Node.js, your destructuring assignment should result in five separate variables holding each programming skill.

## Dynamic Greeting
**Objective:** Practice using string interpolation to create dynamic greetings.
**Instructions:**
- You will be given variables name and age: const firstName = 'Alice'; const age = 25;.
- Write code to create a dynamic greeting using string interpolation, including the name and age variables.
- Your code should result in a greeting string that dynamically includes the provided name and age variables. For example, const greeting = Hello, my name is ${firstName} and I am ${age} years old.; should yield greeting containing 'Hello, my name is Alice and I am 25 years old.'.