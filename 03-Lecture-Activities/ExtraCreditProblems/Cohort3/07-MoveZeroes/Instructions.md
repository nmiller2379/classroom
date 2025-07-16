**Title: Move Zeroes**

**Problem Statement:**
Given an array `nums`, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

**Example 1:**
- Input: `nums = [0,1,0,3,12]`
- Output: `[1,3,12,0,0]`
- Explanation: You must move all the zeros to the end while keeping the order of the non-zero elements the same.

**Example 2:**
- Input: `nums = [0]`
- Output: `[0]`
- Explanation: Since there's only one element, and it's zero, it remains at the same position.

**Example 3:**
- Input: `nums = [4,2,4,0,0,3,0,5,1,0]`
- Output: `[4,2,4,3,5,1,0,0,0,0]`
- Explanation: All zeros are moved to the end of the array while the order of non-zero elements is maintained.

**Constraints:**
- `1 <= nums.length <= 10^4`
- `-2^31 <= nums[i] <= 2^31 - 1`
- The function must perform the operation in-place without using additional arrays. This means you should not create a new array or copy substantial parts of the array for processing.
- The solution should ensure that the order of non-zero elements is preserved.