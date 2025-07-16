function findDisappearedNumbers(nums) {
  // Initialize an empty array to store the result
  const result = [];
  // Get the length of the input array
  let n = nums.length;
  // Create a set from the input array. This will allow us to quickly check if a number is present in the array. The set allows us to easily check if a number is present.
  let set = new Set(nums);
  // Iterate from 1 to n
  for (let i = 1; i <= n; i++) {
    // If the number is not present in the set, add it to the result array
    if (!set.has(i)) {
      result.push(i);
    }
  }
  // Return the result array
  return result;
}

// Another solution: This solution modifies the input array in place. It works by iterating over the input array and marking the numbers that are present. After marking all the numbers, it iterates over the array again and adds the numbers that are not marked to the result array.
// function findDisappearedNumbers(nums) {
//   // Iterate over the input array
//   for (let i = 0; i < nums.length; i++) {
//     // Get the absolute value of the number at the current index
//     let num = Math.abs(nums[i]);
//     // Mark the number at the index (num - 1) as negative
//     nums[num - 1] = -Math.abs(nums[num - 1]);
//   }
//   // Initialize an empty array to store the result
//   const result = [];
//   // Iterate over the input array
//   for (let i = 0; i < nums.length; i++) {
//     // If the number at the current index is positive, add (i + 1) to the result array
//     if (nums[i] > 0) {
//       result.push(i + 1);
//     }
//   }
//   // Return the result array
//   return result;
// }

// DO NOT CHANGE THE CODE BELOW THIS LINE
if (typeof module !== "undefined" && module.exports) {
  module.exports = findDisappearedNumbers;
} else {
  window.findDisappearedNumbers = findDisappearedNumbers;
}
