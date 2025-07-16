## Getting started

In this folder, create an index.html file and a script.js file. Make sure the two are connected.

In the JS file, complete the following coding tasks and log the results to your console. Be sure to label your code with notes to explain which task the code answers.

In this file, answer the long-answer questions at the bottom of these instructions.

## Coding tasks (3 points each)

1. The object below depicts our art gallery. The Roses in Rain piece has been sold. Use the object below to log the name of the new owner to the console.
   const artGallery = {
   artPieces: [
   {
   pieceName: "Emo Flamingos",
   price: 30,
   ownerList: [
   {
   name: "Bob Smith",
   userID: 23849,
   purchaseDate: "09/13/2017",
   },
   {
   name: "Sally Johnson",
   userID: 23510,
   purchaseDate: "09/13/2022",
   },
   ],
   },
   {
   pieceName: "Roses in Rain",
   price: 100,
   ownerList: [{
   name: "Katie Smith",
   userID: 23510,
   purchaseDate: "01/06/2023",
   }],
   },
   ],
   storeCredits: 1000,
   };


2. Write a function that converts inches to centimeters. HINT: the formula to convert inches to centimeters is inches * 2.54.

3. Call the function below with an argument so that the function will log a return of 45 to your console. Do not alter the function declaration.

function doMath(num) {
return (num - 15) * 3;
}

4. Log the numbers 1 to 100 in your console. However, all multiples of three should log the string "Fizz" in place of the number. All multiples of 5 should log "Buzz" in place of the number. All multiples of 3 and 5 should logg "FizzBuzz" in place of the number. Your console should look something like the example image.

## Long answer questions (1 point each)

1. Briefly explain the concept of scope in JavaScript. How does it impact variable accessibility within functions?

2. What is the basic syntax of a ternary operator?

3. If a function does not have a return statement, what will it return?
