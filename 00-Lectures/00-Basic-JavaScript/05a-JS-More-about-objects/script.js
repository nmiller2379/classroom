// Write a function that takes an object and property as arguments and returns the value of the property. 

// Input: an object and a property
// Output: the value of the property

// Sample inputs and outputs
// { a: 1, b: 2, c: 3}, "a" => 1

// { name: "todd", password: "pass", age: 31}, "age" => 31

// { name: "todd", password: "pass", age: 31}, "car" => undefined or "Property does not exist"

const testObject = { a: 1, b: 2, c: 3}

function objectStuff(obj, prop) {
  // 0. Check if property is on object
  if (!obj.hasOwnProperty(prop)) {
    return "Property does not exist"
  }
  // 1. Access property of object 
  // 2. return value of property
  return obj[prop]
}


// console.log(objectStuff(testObject, "a"))
// console.log(objectStuff({ name: "todd", password: "pass", age: 31}, "age"))
// console.log(objectStuff({ name: "todd", password: "pass", age: 31}, "car"))

// ==========================================================================================
// We're shopping for a car. We know exactly how much we can spend, and we want to spend the exact amount. Given a car and a price, return true if we should buy the car and false if we should not. Use an object to map car choices to their prices.

// Find the right car for the right amount of money.

// Inputs: car and price
// Outputs: Return a Boolean value -- true if we if the price of the car matches our price. False if it does not. 

// Sample menu
// {car1: 100, car2: 200, car3: 300}
// Sample inputs and outputs
// ("car1", 100) => true
// ("car2", 500) => false
// ("car1", 150) => false

// Write steps

function buyCar(car, price) {
  // Write steps
  // 1. Create an object to display relationship between cars and prices.
  const carsObject = {
    car1: 100, 
    car2: 200, 
    car3: 300
  }
  // 2. Check to make sure car is property of object
  if (!carsObject.hasOwnProperty(car)) {
    return "We don't have that car."
  }
  // 3. Find amount of money associated with car on the object.
  // 4. Compare price to amount of money associated with car on object.
  
  if (carsObject[car] === price) {
    // a. If amount of money matches price return true
    return true
  } else {
    // b. If amount of money does not match price return false
    return false
  }
}

// Sample usage
console.log(buyCar("car1", 100)) //Should output true
console.log(buyCar("car2", 500)) //Should return false
console.log(buyCar("honda", 100)) //Should return "We don't have that car."