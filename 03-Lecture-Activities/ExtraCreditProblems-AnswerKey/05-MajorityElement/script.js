function majorityElement(nums) {
  // Initialize a variable to store the target value
  const target = Math.floor(nums.length / 2);
  // Create a map to store the frequency of each element
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  // Iterate through the map and return the element with a frequency greater than the target
  for (let [key, value] of map) {
    if (value > target) {
      return key;
    }
  }
}

// Another approach to solving this problem is iterate through the array and maintain a candidate and count. If the count is 0, the candidate is updated to the current element. If the current element is the same as the candidate, the count is incremented. If the current element is different from the candidate, the count is decremented. At the end of the iteration, the candidate is returned as the majority element.
// function majorityElement(nums) {
//   // Initialize a variable to store the candidate and count
//   let candidate = nums[0];
//   let count = 1;
//   // Iterate through the array
//   for (let i = 1; i < nums.length; i++) {
//     // If the count is 0, update the candidate
//     if (count === 0) {
//       candidate = nums[i];
//       count = 1;
//     } else if (candidate === nums[i]) {
//       // If the current element is the same as the candidate, increment the count
//       count++;
//     } else {
//       // Otherwise, decrement the count
//       count--;
//     }
//   }
//   // Return the candidate
//   return candidate;
// }


// DO NOT CHANGE THE CODE BELOW THIS LINE
if (typeof module !== "undefined" && module.exports) {
  module.exports = majorityElement;
} else {
  window.majorityElement = majorityElement;
}
