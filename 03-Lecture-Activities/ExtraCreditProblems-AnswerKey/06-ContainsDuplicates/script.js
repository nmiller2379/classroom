function containsDuplicate(nums, k) {
    // Initialize a map to store the number and its index
    let map = new Map();
    // Iterate over the array
    for (let i = 0; i < nums.length; i++) {
        // If the map has the number and the difference between the current index and the index of the number is less than or equal to k
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        // Set the number and its index in the map
        map.set(nums[i], i);
    }
    // Return false if no duplicates are found
    return false;
}

// Similar approach but with an object
// function containsDuplicate(nums, k) {
//     // Initialize an object to store the number and its index
//     const obj={}
//     // Iterate over the array
//     for(let i=0;i<nums.length;i++){
//         // If the object has the number and the difference between the current index and the index of the number is less than or equal to k
//         if(i-obj[nums[i]]<=k) return true
//         // Set the number and its index in the object
//         obj[nums[i]]=i
//     }
//     // Return false if no duplicates are found
//     return false
// }


// DO NOT CHANGE THE CODE BELOW THIS LINE
if (typeof module !== "undefined" && module.exports) {
    module.exports = containsDuplicate;
} else {
    window.containsDuplicate = containsDuplicate;
}