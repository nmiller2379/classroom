// 1. Circle Area ===============================================
function calculateCircleArea(radius) {
  // Check if the radius is non-positive
  if (radius <= 0) {
    return "Invalid radius. Radius must be a positive number.";
  }

  // Calculate and return the area of the circle
  const area = Math.PI * radius * radius;
  return area;
}

// Example usage:
console.log(calculateCircleArea(5)); // Output: 78.53981633974483
console.log(calculateCircleArea(-2)); // Output: Invalid radius. Radius must be a positive number.

// 2.Student Grades ================================================
function getStudentGrade(studentName, gradesData) {
  // Check if the student exists in the grades data
  if (!gradesData.hasOwnProperty(studentName)) {
    return "Student not found in the grades data.";
  }

  // Use dynamic property access to retrieve and return the student's grade
  const studentGrade = gradesData[studentName];
  return "The grade for " + studentName + " is " + studentGrade + ".";
}

// Example usage:
const gradesData = {
  Alice: "A",
  Bob: "B",
  Charlie: "C",
};

console.log(getStudentGrade("Bob", gradesData)); // Output: The grade for Bob is B
console.log(getStudentGrade("David", gradesData)); // Output: Student not found in the grades data.

// 3. Product Inventory ============================================
// Imperative Solution
function checkProductAvailability(productCode, inventory) {
  // Check if the product code exists in the inventory
  if (!inventory.hasOwnProperty(productCode)) {
    return "Product not found in the inventory.";
  }

  // Use dynamic property access to check and return the product's availability
  const quantityInStock = inventory[productCode];
  if (quantityInStock > 0) {
    return "Product is in stock.";
  } else {
    return "Product is out of stock.";
  }
}

// Example usage:
const inventoryData = {
  P001: 10,
  P002: 0,
  P003: 5,
};

console.log(checkProductAvailability("P002", inventoryData)); // Output: Product is out of stock.
console.log(checkProductAvailability("P004", inventoryData)); // Output: Product not found in the inventory.

// 4. Shoppint Cart =============================================
function addToShoppingCart(shoppingCart, productName, quantity) {
  // Check if the product name exists in the shopping cart
  if (!shoppingCart.hasOwnProperty(productName)) {
    // If not, add the product to the shopping cart with the specified quantity
    shoppingCart[productName] = quantity;
  } else {
    // If the product already exists, update the quantity dynamically
    shoppingCart[productName] += quantity;
  }

  // Return the updated shopping cart
  return shoppingCart;
}

// Example usage:
const cart = {
  Laptop: 2,
  Mouse: 1,
};

console.log(addToShoppingCart(cart, "Mouse", 3));
// Output: { 'Laptop': 2, 'Mouse': 4 }

console.log(addToShoppingCart(cart, "Keyboard", 1));
// Output: { 'Laptop': 2, 'Mouse': 4, 'Keyboard': 1 }

// 5. Library Catalog ============================================
function getBookDetails(bookTitle, libraryCatalog) {
  // Check if the book title exists in the library catalog
  if (!libraryCatalog.hasOwnProperty(bookTitle)) {
    return "Book not found in the library catalog.";
  }

  // Use nested object access to retrieve and return book details
  const bookDetails = libraryCatalog[bookTitle];
  return {
    author: bookDetails.author,
    publicationYear: bookDetails.publicationYear,
    genre: bookDetails.genre,
  };
}

// Example usage:
const libraryData = {
  "The Great Gatsby": {
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    genre: "Classic",
  },
  "To Kill a Mockingbird": {
    author: "Harper Lee",
    publicationYear: 1960,
    genre: "Fiction",
  },
};

console.log(getBookDetails("To Kill a Mockingbird", libraryData));
// Output: { author: 'Harper Lee', publicationYear: 1960, genre: 'Fiction' }

console.log(getBookDetails("Harry Potter", libraryData));
// Output: Book not found in the library catalog.
