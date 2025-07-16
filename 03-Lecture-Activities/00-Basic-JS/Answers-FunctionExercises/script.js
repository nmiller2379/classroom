// Write a function that takes number of children, partner's name, geographic location, job title. The function should return the user's predicted future Call the function three different times with three different sets of inputs.

function fortuneTeller(children, partner, location, job) {
  let yourFortune = `You will have ${children} children with your partner ${partner} in ${location}, where you will work as a ${job}`;
  return yourFortune;
}

console.log(fortuneTeller(2, "Sharon", "Denver", "programmer"));

// Write a function that takes arguments for age, product and amount consumed each day. Return a string wiht the amount of product you'll need to last the rest of your life, assuming you live to be 70 years old.

function lifetimeSupply(product, consumed, age) {
  let difference = 70 - age;
  let daysLeft = difference * 365;
  let productConsumed = daysLeft * consumed;
  let returnValue = `You will need ${productConsumed} ${product} to have have enough to make it to 70.`;
  return returnValue;
}

console.log(lifetimeSupply("Tacos", 1, 69));

// Write a function to calculate the area of a circle. (The formula to calculate the area of a circle is Area = 3.14 * radius squared)

function circleArea(radius) {
  let area = 3.14 * Math.pow(radius, 2);
  return area;
}

console.log(circleArea(12));

// Write a function to calculate the circumfrence of a circle. (The formula to calculate the circumfrence of a circle is circumphrence = 2 * 3.14 * radius)

// Write a function to convert a farenheit temperature into celsius. The formula is temperature - 32 * .5556
function fahrenheitToCelsius(fahrenheit) {
  // Convert Fahrenheit to Celsius using the formula: (F - 32) * 0.5556
  let celsius = (fahrenheit - 32) * 0.5556;
  // Return the result
  return celsius;
}

// Example usage:
let fahrenheitTemperature = 98.6;
let celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);

console.log(fahrenheitTemperature + "°F is equal to " + celsiusTemperature.toFixed(2) + "°C");
