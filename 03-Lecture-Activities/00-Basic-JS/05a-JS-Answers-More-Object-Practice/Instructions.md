# More object practice
These questions will offer practice with objects inside functions as well as our early return pattern.

## 1. Circle Area
Create a function `calculateCircleArea` that takes the radius of a circle as a parameter. Implement the "return early" pattern to check if the radius is non-positive, returning an appropriate message. Otherwise, calculate and return the area of the circle. The JavaScript. Math.PI property may help you with these calculations: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

## 2. Student Grades
Write a function `getStudentGrade` that takes a student's name and a grades data object. Use dynamic property access to retrieve and return the grade for the specified student. Provide an error message if the student is not found in the data.

## 3. Product Inventory
Design a function `checkProductAvailability` that takes a product code and an inventory object with product codes and quantities. Use an object as a lookup table to check if the product is in stock and return a message indicating its availability.

## 4. Shopping Cart
Create a function `addToShoppingCart` that takes a shopping cart object, a product name, and a quantity. Allow the user to add items to the shopping cart by updating the quantities dynamically. Return the updated shopping cart.

## 5.Library Catalog 
Write a `function getBookDetails` that takes a book title and a library catalog object with information about different books. Use nested object access to retrieve and return details such as the author, publication year, and genre for the specified book.

Use this object as sample data:
```
const libraryData = {
  'The Great Gatsby': { author: 'F. Scott Fitzgerald', publicationYear: 1925, genre: 'Classic' },
  'To Kill a Mockingbird': { author: 'Harper Lee', publicationYear: 1960, genre: 'Fiction' }
};
```
Also try it with your own object.