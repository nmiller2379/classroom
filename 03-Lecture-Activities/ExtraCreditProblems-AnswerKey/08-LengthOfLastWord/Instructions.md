**Title: Length of Last Word**

**Problem Statement:**
Given a string `s` that consists of some words separated by spaces, return the length of the last word in the string. A word is a maximal substring consisting only of non-space characters. If the last word does not exist, return 0.

**Example 1:**
- Input: `s = "Hello World"`
- Output: `5`
- Explanation: The last word is "World" with a length of 5.

**Example 2:**
- Input: `s = " "`
- Output: `0`
- Explanation: There is no last word in the string.

**Example 3:**
- Input: `s = " fly me to the moon "`
- Output: `4`
- Explanation: The last word is "moon" and its length is 4.

**Example 4:**
- Input: `s = "many   spaces    between  words"`
- Expected Output: 5
Explanation: The last word is "words", with multiple spaces preceding it.

**Constraints:**
- `1 <= s.length <= 10^4`
- `s` consists of only English letters and spaces `' '`.
- `s` may contain leading or trailing spaces or multiple spaces between words.

