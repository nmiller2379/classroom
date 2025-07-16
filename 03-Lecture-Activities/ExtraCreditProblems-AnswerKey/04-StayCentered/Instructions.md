**Title: Stay Centered**

**Problem Statement**
Implement a function `center` that takes a string `strng`, an integer `width`, and an optional character `fill` (default: ' ') and returns a new string of length `width` where `strng` is centered and on the right and left padded with `fill`.

**Example 1:**
- Input: `strng = 'a'`, `width = 3`
- Output: `" a " `

**Example 2:**
- Input: `strng = "abc"`, `width = 10`, `fill = '_'`
- Output: `"____abc___"`

**Example 3:**
- Input: `strng = "abcdefg"`, `width = 2`
- Output: `abcdefg`

**Constraints**
- If the left and right padding cannot be of equal length make the padding on the left side of the character longer than the one on the right.
- If `strng` is longer than `width`, return `strng` unchanged.

