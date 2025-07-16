// Challenge 1: Define a Class
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  }
}

// Challenge 2: Inheritance
class ComicBook extends Book {
  constructor(title, author, year, illustrator) {
    super(title, author, year); // Call the parent class constructor
    this.illustrator = illustrator;
  }

  getSummary() {
    return `${super.getSummary()} and illustrated by ${this.illustrator}`;
  }
}

// Challenge 3: Static Method
class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    getSummary() {
      return `${this.title} by ${this.author}, published in ${this.year}`;
    }
  
    static isBook(obj) {
      return obj instanceof Book;
    }
  }
  
  // Usage
  const myBook = new Book('1984', 'George Orwell', '1949');
  console.log(Book.isBook(myBook)); // true
  console.log(Book.isBook({})); // false
  
//   Short answer questions
// Question 1: Explain what "encapsulation" means in OOP and discuss how it can be achieved in JavaScript.
// Encapsulation means keeping data and the methods that operate on the data in the same unit or class. This can be done in JavaScript through ES6 classes. Each class should have one job.

// Question 2: Describe the concept of "inheritance" in OOP. How does it benefit the software development process?
// Inheritance is a mechanism for a class to use properties and methods of another class. It makes code more reusable maintainable and scalable.

// Question 3: What is "polymorphism" and how can it be implemented in JavaScript? Provide a simple example to illustrate your point.
// Polymorphism is the ability for different classes to respond to the same method call in different ways. In JavaScript, we can use ES6 classes along with the extends keyword and override the method in the child class.