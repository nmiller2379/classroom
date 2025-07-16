
# JavaScript OOP Practice Part I

These activities reinforce the four pillars of Object-Oriented Programming using JavaScript's ES6 `class` syntax.

---

## 1. Book Checkout System

Create a `Book` class with the following properties:
- `title` (string)
- `author` (string)
- `isCheckedOut` (boolean, initially false)

Include the following methods:
- `checkOut()` → sets `isCheckedOut` to `true`
- `returnBook()` → sets `isCheckedOut` to `false`
- `info()` → logs `"Title by Author - Checked out"` or `"Title by Author - Available"`

```js
const book1 = new Book("The Hobbit", "J.R.R. Tolkien");
const book2 = new Book("The Road", "Cormac McCarthy");

book1.info();       
book1.checkOut();   
book1.info();       
book1.returnBook(); 
book1.info();       

book2.info();
```

### Expected Console Output:
```
The Hobbit by J.R.R. Tolkien - Available
The Hobbit by J.R.R. Tolkien - Checked out
The Hobbit by J.R.R. Tolkien - Available
The Road by Cormac McCarthy - Available
```

---

## 2. Vehicle Inheritance

Create a base `Vehicle` class with:
- `make`, `model`, `year`
- `start()` method that logs `"Starting [year] [make] [model]..."`

Then create two subclasses:
- `Car` (adds a `numDoors` property)
- `Motorcycle` (adds a `hasSidecar` boolean)

Use `super()` to inherit properties from `Vehicle`.

Override `start()` in each subclass to include their unique trait.

```js
const myCar = new Car("Toyota", "Camry", 2020, 4);
const myBike = new Motorcycle("Harley", "Sportster", 2018, false);

myCar.start();
myBike.start();
```

### Expected Console Output:
```
Starting 2020 Toyota Camry with 4 doors...
Starting 2018 Harley Sportster with no sidecar...
```

---

## 3. Polymorphism in Action

Using the classes from the previous activity, create a function `startVehicle(vehicle)` that accepts any `Vehicle` instance and calls its `start()` method.

```js
startVehicle(myCar);
startVehicle(myBike);
```

### Expected Console Output:
```
Starting 2020 Toyota Camry with 4 doors...
Starting 2018 Harley Sportster with no sidecar...
```

This demonstrates **polymorphism**: the same interface (`startVehicle`) works for multiple object types.

---

## 4. Zoo Animal Simulator

Create an `Animal` base class with:
- `name`
- `speak()` → logs a generic message like "`The animal makes a sound.`"

Then create subclasses `Dog`, `Cat`, and `Bird`, each overriding `speak()`.

Write a `makeItSpeak(animal)` function that calls `.speak()` on any `Animal` instance.

```js
const dog = new Dog("Rex");
const cat = new Cat("Mittens");
const bird = new Bird("Tweety");

makeItSpeak(dog);
makeItSpeak(cat);
makeItSpeak(bird);
```

### Expected Console Output:
```
Rex barks.
Mittens meows.
Tweety sings.
```

---

## 5. Private Mood (Stretch)

Enhance the `Animal` class with a private field `#mood` (default: `"content"`). Add a method `describeMood()` that logs something like:  
`"Rex is feeling content."`

Update a subclass (e.g., `Dog`) to set a different mood and call `describeMood()`.

```js
dog.describeMood();
cat.describeMood();
```

### Expected Console Output:
```
Rex is feeling excited.
Mittens is feeling content.
```
