const containsDuplicate = function(nums) {
  nums.sort((a, b) => a - b);
  
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i-1]) {
          return true;
      }
  }
  return false;
};


// DO NOT CHANGE THE CODE BELOW THIS LINE
if (typeof module !== "undefined" && module.exports) {
  module.exports = containsDuplicate;
} else {
  window.containsDuplicate = containsDuplicate;
}
