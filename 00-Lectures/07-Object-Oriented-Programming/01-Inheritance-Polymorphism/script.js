class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class's constructor with the name parameter
    this.breed = breed;
  }

  speak() {
    // Call the speak method from Animal class
    return `${super.speak()} ${this.name} barks.`;
  }
}

const dog = new Dog("Rex", "Golden Retriever");
let example = dog.speak();
console.log(example); // Outputs: Rex makes a sound. Rex barks.

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

const cat = new Cat("Whiskers");
cat.speak(); // Outputs: Whiskers meows.


const letters = "abcdefghijklmnopqrstuvwxyz"

