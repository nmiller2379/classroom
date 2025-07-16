Here's the problem statement for **Find All Numbers Disappeared in an Array**:

---

**Title: Find All Numbers Disappeared in an Array**

**Problem Statement:**
Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return an array of all the integers in the range [1, n] that do not appear in `nums`.

**Example 1:**
- Input: `nums = [4,3,2,7,8,2,3,1]`
- Output: `[5,6]`
- Explanation: After checking each number from 1 to 8, numbers 5 and 6 are missing from the array.

**Example 2:**
- Input: `nums = [1,1]`
- Output: `[2]`
- Explanation: The array should have numbers from 1 to 2. Since 2 is missing, it is returned as the result.

**Example 3:**
- Input: `nums = [1,2,3,4,5,6]`
- Output: `[]`
- Explanation: There are no missing numbers as the array contains all numbers from 1 to 6.

**Example 4:**
- Input: `nums = [2,2]`
- Output: `[1]`
- Explanation: The array has a length of 2. The range is from 1 to 2. Therefore 1 is the missing number in the range.

**Constraints:**
- `n == nums.length`
- `1 <= n <= 10^5`
- `1 <= nums[i] <= n`