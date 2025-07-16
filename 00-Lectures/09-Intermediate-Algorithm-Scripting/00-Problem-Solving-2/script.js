function sumOddFibonacci(n) {
  // 1. Initialize sum to 0
  let sum = 0;
  //   2. Initalize a to 0 and b to 1
  let a = 0;
  let b = 1;
  //   3. Continue processing until a, the current Fibonacci number, exceeds n
  while (a <= n) {
    // Check if a is an odd number.
    if (a % 2 !== 0) {
      // If it is, add a to the sum.
      sum += a;
    }
    // Update the Fibonacci sequence
    // Temporarily store the current value of a in another variable called temp.
    let temp = a;
    // Update a to the next number in the sequence, which is b
    a = b;
    // Set b to the sum of temp and b (this moves the sequence forward by one step).
    b = temp + b;
  }
  //   4. Once the value of a surpasses n, stop the process.
  // 5. Return the sum.
  return sum;
}

console.log(sumOddFibonacci(10));  // Should return 10 (1 + 1 + 3 + 5)
console.log(sumOddFibonacci(1000)); // Test with a larger number
console.log(sumOddFibonacci(4000000)); // Test with a very large number


