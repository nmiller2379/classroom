function twoSum(nums, target) {
    const numObj = {}; // Using an object to store the numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num; // Find the complement that would add up to the target

        if (complement in numObj) {
            // If the complement exists in the object, return the index of the complement and the current index
            return [numObj[complement], i];
        }

        // Store the current number and its index in the object
        numObj[num] = i;
    }

    return []; // If no two numbers add up to the target, return an empty array
}

// Desk Check for Clarity:
// Let's consider nums = [2, 7, 11, 15] and target = 9:

// On the first iteration (i=0, num=2), the complement = 9 - 2 = 7 is not in numObj, so {2: 0} is added to numObj.
// On the second iteration (i=1, num=7), the complement = 9 - 7 = 2 is found in numObj (2 was added during the first iteration). Since 2 is a key in numObj, it immediately returns [0, 1], representing the indices of 2 and 7 which add up to 9.

// ANOTHER SOLUTION
// function twoSum(nums, target) {
//     const numMap = new Map(); // Using a Map to store the numbers and their indices

//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         const complement = target - num; // Find the complement that would add up to the target

//         if (numMap.has(complement)) {
//             // If the complement exists in the map, return the index of the complement and the current index
//             return [numMap.get(complement), i];
//         }

//         // Store the current number and its index in the map
//         numMap.set(num, i);
//     }

//     return []; // If no two numbers add up to the target, return an empty array
// }

// DO NOT CHANGE THE CODE BELOW THIS LINE
if (typeof module !== "undefined" && module.exports) {
    module.exports = twoSum;
} else {
    window.twoSum = twoSum;
}