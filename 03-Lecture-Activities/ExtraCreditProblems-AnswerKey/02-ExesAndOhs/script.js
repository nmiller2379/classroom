function exesAndOhs(s) {
    // Initialize the count of exes and ohs
    let exesCount = 0;
    let ohsCount = 0;
    // Loop through the string
    for (const char of s) {
        // If the character is an o, increment the ohs count
        if (char === 'o') {
            ohsCount++
        // If the character is an x, increment the exes count
        } else if (char === 'x') {
            exesCount++
        }
    }
    return exesCount === ohsCount
}

// Another approach to solving this problem is to use a regular expression to count the number of 'x's and 'o's in the string. Here is an example of how this can be done:
// function exesAndOhs(s) {
//     // Count the number of 'x's and 'o's in the string using regular expressions
//     const exesCount = (s.match(/x/g) || []).length;
//     const ohsCount = (s.match(/o/g) || []).length;
//     // Return true if the counts are equal, false otherwise
//     return exesCount === ohsCount;
// }



// DO NOT CHANGE THE CODE BELOW THIS LINE
if (typeof module !== "undefined" && module.exports) {
    module.exports = exesAndOhs;
} else {
    window.exesAndOhs = exesAndOhs;
}