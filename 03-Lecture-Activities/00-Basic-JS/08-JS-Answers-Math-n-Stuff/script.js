// 1. Random Numbers ==============================================================
function generateRandomNumbers() {
  // Generate a random fraction stored in randomFraction variable
  let randomFraction = Math.random();
  // Generate a random number stored in randomWholeNumber
  let randomWholeNumber = Math.floor(Math.random() * 10);
  // Building an object literal to return
  return {
    fraction: randomFraction,
    number: randomWholeNumber,
  };
}

// Call the function and store the result
const randomNumbers = generateRandomNumbers();
// Log returned object to the console
console.log(randomNumbers)
// Log the fraction to the console
console.log("Random Fraction:", randomNumbers.fraction);
// Log the number to the console
console.log("Random Whole Number:", randomNumbers.number);

//   2. Convert String to Integer ========================================================
function convertStringToInteger(numericString) {
  // call the parseInt function on the passed in string and return the result
  return parseInt(numericString);
}

// Call the function with a numeric string and store the result
const convertedInteger = convertStringToInteger("456");
// Log the result to the console
console.log("Converted Integer:", convertedInteger);

// 3. Absolute Value ==============================================================
function absoluteValueCalculator(userNumber) {
  // call the Math.abs function on the passed in number and return the restult
  return Math.abs(userNumber);
}

// Call the function with a user-provided number and store the result
const absoluteValue = absoluteValueCalculator(-10);
console.log("Absolute Value:", absoluteValue);

// 4. Binary Decimal Converter
function binaryToDecimalConverter(binaryString) {
  // Call the parseInt function on the passed in string with a radix of 2 and return the result.
  return parseInt(binaryString, 2);
}

// Call the function with a binary string and store the result
const decimalNumber = binaryToDecimalConverter("1101");
console.log("Decimal Number:", decimalNumber);

// 5. Temperature Verifier

function temperatureVerifier(currentTemperature) {
  // Use a conditional return
  // check to see if temperatuer is less than 0
  return currentTemperature < 0
    ? // If it is, return freezing
      "Freezing"
    : // Otherwise, check to see if temp is above 0 but below 10
    currentTemperature >= 0 && currentTemperature <= 10
    ? // If it is, return cold
      "Cold"
    : // Otherwise, check to see if temp is 11 or above but less than 20
    currentTemperature >= 11 && currentTemperature <= 20
    ? // If it is, return Moderate
      "Moderate"
    : // Otherwise, return Warm
      "Warm";
}


// Test the function with different temperatures
console.log(temperatureVerifier(-5)); // Expected output: "Freezing"
console.log(temperatureVerifier(8)); // Expected output: "Cold"
console.log(temperatureVerifier(15)); // Expected output: "Moderate"
console.log(temperatureVerifier(25)); // Expected output: "Warm"


