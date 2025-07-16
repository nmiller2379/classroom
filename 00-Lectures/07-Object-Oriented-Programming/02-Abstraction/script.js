class Vehicle {
  constructor() {
    if (new.target === Vehicle) {
      throw new Error(
        "Vehicle is an abstract class and cannot be instantiated directly."
      );
    }
  }

  start() {
    throw new Error("Method 'start()' must be implemented.");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car engine started.");
  }
}

// const vehicle = new Vehicle(); // Throws error
const myCar = new Car();
myCar.start(); // Outputs: Car engine started.

class PaymentProcessor {
  constructor() {
    if (new.target === PaymentProcessor) {
      throw new Error(
        "PaymentProcessor is an abstract class and cannot be instantiated directly."
      );
    }
  }

  validatePayment() {
    throw new Error("Method 'validatePayment()' must be implemented.");
  }

  processPayment() {
    throw new Error("Method 'processPayment()' must be implemented.");
  }

  confirmPayment() {
    throw new Error("Method 'confirmPayment()' must be implemented.");
  }
}

class CreditCardPayment extends PaymentProcessor {
  validatePayment() {
    console.log("Validating credit card details...");
    // Specific validation logic for credit cards
  }

  processPayment() {
    console.log("Processing credit card payment...");
    // Specific processing logic for credit card payments
  }

  confirmPayment() {
    console.log("Confirming credit card payment...");
    // Specific confirmation logic for credit card payments
  }
}

class PayPalPayment extends PaymentProcessor {
  validatePayment() {
    console.log("Validating PayPal account...");
    // Specific validation logic for PayPal
  }

  processPayment() {
    console.log("Processing PayPal payment...");
    // Specific processing logic for PayPal payments
  }

  confirmPayment() {
    console.log("Confirming PayPal payment...");
    // Specific confirmation logic for PayPal payments
  }
}

// Usage
const creditCardPayment = new CreditCardPayment();
creditCardPayment.validatePayment();
creditCardPayment.processPayment();
creditCardPayment.confirmPayment();
// const invalidPayment = new PaymentProcessor(); // Throws error

function ConstructorName(parameter1, parameter2) {
  this.property1 = parameter1;
  this.property2 = parameter2;
}

const newObj = new ConstructorName(value1, value2);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};

let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.

