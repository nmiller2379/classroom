// Given an array of integers, return a new array consisting of elements that are multiples of their own index in the given array.

// Input: Array of numbers
// Output: An array numbers multiplied by the original numbers of the array?

// Samples
// [22, -6, 32, 82, 9, 25] => [-6, 32, 25]

function arrayOfIntegers(nums) {
    // 1. Numbers go into an empty array called newArray
    let newArray = [];
    // 2. Iterate through array of numbers looking for numbers that are multiple of index.
    for (let i = 0; i < nums.length; i++) {
        // 3. Push numbers that are multiples of index into newArray.
        if (nums[i] % i === 0) {
            newArray.push(nums[i])
        }  
    }
    // 4. Return newArray.
    return newArray
}

console.log(arrayOfIntegers([22, -6, 32, 82, 9, 25]))
console.log(arrayOfIntegers([68, -1, 1, -7, 10, 10]))