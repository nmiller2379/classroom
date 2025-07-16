// 1. Factorial Factory =====================================================================================================
function calculateFactorial(n) {
    // Declare variable to hold result
    let result = 1;
    // Declare variable to track iterations
    let i = 1;
    // Use a while loop to repeat multiplications
    while (i <= n) {
        // Multiply the value of result by i
        // Store that value in result
        result *= i;
        // Increment i when an iteration is complete
        i++;
    }
    // Return the result
    return result;
}

// 2. Sum Array==========================================================================================================
function calculateArraySum(arr) {
    let sum = 0;
    // Use for... of loop to iterate through array
    for (let element of arr) {
        // add the value of element to sum
        sum += element;
    }
    // Return sum
    return sum;
}

// 3. Persistant printing =================================================================================================
function printMessage(count) {
    let i = 0;

    do {
        console.log("Message printed!");
        i++;
    } while (i < count);
}

// Example: Print the message 3 times
printMessage(3);

// 4. Delightfully Doubled ================================================================================================
function generateDoubleSequence(N) {
    // Start with the first term as 1
    let term = 1; 
    // Loop N times
    for (let i = 0; i < N; i++) {
        // Log the term and its value to the console
        console.log("Term " + (i + 1) + ": " + term);
        term *= 2; // Double the term for the next iteration
    }
}

// Example: Generate and print the first 5 terms of the sequence
generateDoubleSequence(5);

// 5. Doubled Object ======================================================================================================
function doubleNumericValues(obj) {
    // Create object to store return values
    const doubledObject = {};
    // Use a for... in loop to iterate over passed object.
    for (let key in obj) {
        // Check if the type of the passed object's key is a number
        if (typeof obj[key] === 'number') {
            // If it it, multiply it by 2 and store it in a property on return object
            doubledObject[key] = obj[key] * 2;
        } else {
            // Otherwise, store the property on the return object
            doubledObject[key] = obj[key];
        }
    }
    // Return the return object
    return doubledObject;
}

// Example usage
const originalObject = { a: 5, b: "Hello", c: 10, d: "World" };
const transformedObject = doubleNumericValues(originalObject);

console.log("Original Object:", originalObject);
console.log("Transformed Object (doubled numeric values):", transformedObject);





