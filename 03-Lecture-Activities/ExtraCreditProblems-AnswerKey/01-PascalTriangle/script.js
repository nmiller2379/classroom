function getRow(rowIndex) {
    let row = [1];  // Start with the first row of Pascal's Triangle

    for (let i = 1; i <= rowIndex; i++) {
        row[i] = 1;  // The last element of each row is always 1
        for (let j = i - 1; j > 0; j--) {
            // Update the row from the end to the beginning to avoid overwriting elements prematurely
            row[j] = row[j] + row[j - 1];
        }
    }

    return row;
}

// Explanation
// 1. Initialization: We start with the simplest form of Pascal's Triangle, which is the zeroth row [1].
// 2. Outer Loop: This iterates from 1 up to rowIndex. Each iteration effectively constructs a new row of Pascal's Triangle.
// 3. Setting Last Element: Each row in Pascal's Triangle ends with a 1, so we set the last element of the array to 1 at the start of each iteration.
// 4. Inner Loop: This loop updates the elements of the row. It begins from the end of the row (except the last element) and moves towards the start. This is important because each new element is the sum of two elements directly above it in the triangle. By starting from the end, we ensure that we do not overwrite any elements of the row before they have been used to update the next element.

// Another approach to solving this problem is to use a recursive function to generate the row based on the previous row. Here is an example of how this can be done:
// function getRow(rowIndex) {
//     if (rowIndex === 0) {
//         return [1];
//     }

//     const previousRow = getRow(rowIndex - 1);
//     const row = [1];

//     for (let i = 1; i < previousRow.length; i++) {
//         row[i] = previousRow[i] + previousRow[i - 1];
//     }

//     row.push(1);

//     return row;
// }

// DO NOT CHANGE THE CODE BELOW THIS LINE
if (typeof module !== "undefined" && module.exports) {
    module.exports = getRow;
} else {
    window.getRow = getRow;
}