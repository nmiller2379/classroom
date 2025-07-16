// Given a positive integer `N`, return the largest integer `k` such that `3^k < N`.


function largestPower(n) {
    // Initialize the power to 0
    let k = 0;
    // Keep increasing the power until 3^k is no longer less than N
    while (Math.pow(3, k) < n) {
        k++;
    }
    // Return the largest power
    return k - 1;
}

// Another approach to solving this problem is to use the Math.log() function to calculate the power directly. Here is an example of how this can be done:
// function largestPower(n){
//     // Calculate the largest power using the Math.log() function. The Math.log() function returns the natural logarithm of a number. A logarithm is the power to which a base must be raised to produce a given number. In this case, we are calculating the power to which 3 must be raised to produce the given number N. Math.ceil() is used to round up the result to the nearest integer.
//     return Math.ceil(Math.log10(n)/Math.log10(3))-1
//   }





// DO NOT CHANGE THE CODE BELOW THIS LINE
if (typeof module !== "undefined" && module.exports) {
    module.exports = largestPower;
} else {
    window.largestPower = largestPower;
}