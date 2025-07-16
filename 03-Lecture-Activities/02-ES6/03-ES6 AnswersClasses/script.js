// 1. Rectangle =================================================================
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle1 = new Rectangle(5, 10);
console.log(rectangle1.calculateArea()); // Output: 50
console.log(rectangle1.calculatePerimeter()); // Output: 30

const rectangle2 = new Rectangle(3, 7);
console.log(rectangle2.calculateArea()); // Output: 21
console.log(rectangle2.calculatePerimeter()); // Output: 20

// 2. Shapes
class Shape {
  describe() {
    console.log("This is a generic shape.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  describe() {
    console.log(`This is a circle with radius ${this.radius}.`);
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
  }

  describe() {
    console.log(`This is a square with side length ${this.sideLength}.`);
  }
}

const circle = new Circle(5);
circle.describe(); // Output: This is a circle with radius 5.

const square = new Square(8);
square.describe(); // Output: This is a square with side length 8.
