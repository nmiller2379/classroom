function moveZeroes(nums) {
  // Initialize two pointers
  let i = 0;
  let j = 0;
  // Iterate over the array
  while (j < nums.length) {
    // If the number at the second pointer is not 0, swap the numbers at the first and second pointers
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      // Increment the first pointer
      i++;
    }
    // Increment the second pointer
    j++;
  }
  return nums;
}

// Similar solution but with a for loop
// function moveZeroes(nums) {
//   // Initialize a pointer
//   let i = 0;
//   // Iterate over the array
//   for (let j = 0; j < nums.length; j++) {
//     // If the number at the second pointer is not 0, swap the numbers at the first and second pointers
//     if (nums[j] !== 0) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       // Increment the first pointer
//       i++;
//     }
//   }
//   return nums;
// }

// DO NOT CHANGE THE CODE BELOW THIS LINE
if (typeof module !== "undefined" && module.exports) {
  module.exports = moveZeroes;
} else {
  window.moveZeroes = moveZeroes;
}
