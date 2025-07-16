# Practicing Promises
Complete these tasks to practice working with promises. We will get more real-world experience with promises when we get to the backend part of the class. For now, make sure you understand ansynchronous operations and conceptually how promises work.

## Task 1: Create a Promise

Create a new promise named `myPromise` using the Promise constructor.
Inside the promise, simulate an asynchronous operation using `setTimeout`.
After a delay of 2 seconds, resolve the promise with a success message.

## Task 2: Handle Promise

Use the `.then()` method to handle the resolved promise.
Inside the `.then()` method, log the success message to the console.


## Task 3: Error Handling

- Introduce error handling by rejecting the promise with an error message.
- Use the `.catch()` method to handle the rejected promise.
- Inside the `.catch()` method, log the error message to the console.

## Task 4: Chaining Promises 

- Chain promises by creating multiple another promise (that resolves in 1.5 seconds) and chaining your two promises using `.then()`.
- Simulate asynchronous operations in each promise and handle them sequentially using promise chaining.
- Ensure to include error handling using `.catch()` for each promise.
