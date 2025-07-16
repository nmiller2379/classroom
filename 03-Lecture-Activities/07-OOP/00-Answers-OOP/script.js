
// 1. Book Checkout System
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isCheckedOut = false;
  }

  checkOut() {
    this.isCheckedOut = true;
  }

  returnBook() {
    this.isCheckedOut = false;
  }

  info() {
    const status = this.isCheckedOut ? "Checked out" : "Available";
    console.log(`${this.title} by ${this.author} - ${status}`);
  }
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien");
const book2 = new Book("The Road", "Cormac McCarthy");

book1.info();
book1.checkOut();
book1.info();
book1.returnBook();
book1.info();
book2.info();

// 2. Vehicle Inheritance
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`Starting ${this.year} ${this.make} ${this.model}...`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }

  start() {
    console.log(`Starting ${this.year} ${this.make} ${this.model} with ${this.numDoors} doors...`);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year, hasSidecar) {
    super(make, model, year);
    this.hasSidecar = hasSidecar;
  }

  start() {
    const sidecarStatus = this.hasSidecar ? "with a sidecar" : "with no sidecar";
    console.log(`Starting ${this.year} ${this.make} ${this.model} ${sidecarStatus}...`);
  }
}

const myCar = new Car("Toyota", "Camry", 2020, 4);
const myBike = new Motorcycle("Harley", "Sportster", 2018, false);

myCar.start();
myBike.start();

// 3. Polymorphism in Action
function startVehicle(vehicle) {
  vehicle.start();
}

startVehicle(myCar);
startVehicle(myBike);

// 4. Zoo Animal Simulator
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log("The animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

class Bird extends Animal {
  speak() {
    console.log(`${this.name} sings.`);
  }
}

function makeItSpeak(animal) {
  animal.speak();
}

const dog = new Dog("Rex");
const cat = new Cat("Mittens");
const bird = new Bird("Tweety");

makeItSpeak(dog);
makeItSpeak(cat);
makeItSpeak(bird);

// 5. Private Mood (Stretch)
class AnimalWithMood {
  #mood;

  constructor(name, mood = "content") {
    this.name = name;
    this.#mood = mood;
  }

  describeMood() {
    console.log(`${this.name} is feeling ${this.#mood}.`);
  }
}

class DogWithMood extends AnimalWithMood {
  constructor(name) {
    super(name, "excited");
  }
}

class CatWithMood extends AnimalWithMood {
  constructor(name) {
    super(name); // uses default "content"
  }
}

const happyDog = new DogWithMood("Rex");
const calmCat = new CatWithMood("Mittens");

happyDog.describeMood();
calmCat.describeMood();
