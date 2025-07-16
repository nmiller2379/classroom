// function recursiveFunction(parameter) {
//     // Base case
//     if (/* base case condition */) {
//         // Return base case result
//     } else {
//         // Recursive case
//         // Make a recursive call with a modified parameter
//         return recursiveFunction(modifiedParameter);
//     }
// }

function factorial(n) {
    // Base case
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Recursive case
        return n * factorial(n - 1);
    }
}

// Example usage
// console.log(factorial(5)); // Output: 120

function countdown(n) {
    if (n <= 0) {
        console.log("Liftoff!");
    } else {
        console.log(n);
        countdown(n - 1);
    }
}

// Example usage
// countdown(5);

// Example: Flatten Nested Object

function flattenObject(obj) {
    let result = [];
    for (let key in obj) {
        // Check to see if a property is an object and has a value.
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Recursive case: obj[key] is an object, make a recursive call
            result = result.concat(flattenObject(obj[key]));
        } else {
            // Base case: obj[key] is not an object, add it to the result
            result.push(obj[key]);
        }
    }
    // Return the array
    return result;
}

// Example usage
const nestedObject = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: 4
            }
        }
    },
    h: 5
};

const flattenedArray = flattenObject(nestedObject);
console.log(flattenedArray);
// Output: [1, 2, 3, 4, 5]



