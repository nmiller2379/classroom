**Title: Contains Duplicate II**

**Problem Statement:**
Given an array of integers `nums` and an integer `k`, find out whether there are two distinct indices `i` and `j` in the array such that `nums[i] = nums[j]` and the absolute difference between `i` and `j` is at most `k`.

**Example 1:**
- Input: `nums = [1,2,3,1], k = 3`
- Output: `true`
- Explanation: The values at indices 0 and 3 are both 1, and the absolute difference between the indices is 3, which is not greater than `k`.

**Example 2:**
- Input: `nums = [1,0,1,1], k = 1`
- Output: `true`
- Explanation: The values at indices 2 and 3 are both 1, and the absolute difference between the indices is 1, which is not greater than `k`.

**Example 3:**
- Input: `nums = [1,2,3,1,2,3], k = 2`
- Output: `false`
- Explanation: There are no two distinct indices where the same value occurs within `k` index distance that would satisfy the conditions.

**Constraints:**
- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`
- `0 <= k <= 10^5`
