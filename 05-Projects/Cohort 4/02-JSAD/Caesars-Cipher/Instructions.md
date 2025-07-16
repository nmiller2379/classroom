# Caesar Cipher Decoding — Algorithm + Implementation Assignment

## Problem Overview

Julius Caesar once used a simple letter substitution cipher to send secret messages to his allies. Your task is to **decode messages** that have been encrypted using a version of this cipher called **ROT13**.

**ROT13** works by **shifting each letter of the alphabet 13 places forward**.

- For example, **A becomes N**, **B becomes O**, and so on.
- If the shift reaches the end of the alphabet, it wraps around—**N becomes A**, **O becomes B**, etc.
- Only **uppercase English letters (A-Z)** should be decoded.
- **Do not change** punctuation, spaces, or symbols—they should remain exactly as they are.

## Required Test Cases

Your solution **must decode each of the following encrypted messages correctly**:

1. `rot13("SERR PBQR PNZC")` should return `"FREE CODE CAMP"`
2. `rot13("SERR CVMMN!")` should return `"FREE PIZZA!"`
3. `rot13("SERR YBIR?")` should return `"FREE LOVE?"`
4. `rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` should return `"THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."`
5. Any message similar to the above messages.

## What You Need to Submit

### 1. Plain-Language Algorithm

Before you write any code, write a **clear and detailed algorithm** using plain English. This should:

- Describe **step-by-step** how your program will solve the problem.
- Be **unambiguous, specific, and logically ordered**.
- Include **how you’ll handle non-letter characters**, and how the letter shifting logic works.

> This algorithm should follow the style we've been practicing in class. Think: inputs, condition checks, loops, transformations, and outputs—**all described in plain words**.

### 2. JavaScript Code Implementation

After your algorithm is complete, implement it in JavaScript by writing a function called `rot13(str)` that:

- Takes a string as input.
- Returns the decoded string using the ROT13 cipher.
- Passes **all four test cases** listed above, as well as any other similar cases.
- Display your results in your development console.

Your code should:

- Use clear variable names.
- Include comments where necessary to explain logic.
- Be readable and cleanly formatted. (Be sure to let prettier do its job.)

## Submission Instructions

Please submit the following in a repository to the `ready-to-grade` in GitLab:

- A `script.js` file and an `index.html` file containing:
  - Your JavaScript function implementation
  - Results logged to your development console
- Ensure your algorithm is clearly defined in your

The project is due EOD on April 24. Happy hacking!!
