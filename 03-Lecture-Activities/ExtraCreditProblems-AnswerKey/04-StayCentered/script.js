function center(strng, width, fill = " ") {
  // Create a variable to store the string
  let string = "";
  // If the length of the string is greater than or equal to the width, return the string
  if (strng.length >= width) {
    return strng;
  }
  // Create a variable to store the limit
  let limit = Math.floor((width - strng.length) / 2);
  // If the length of the string is odd and the width is odd or the length of the string is even and the width is even
  if (
    (strng.length % 2 !== 0 && width % 2 !== 0) ||
    (strng.length % 2 === 0 && width % 2 === 0)
  ) {
    // While the limit is greater than 0, add the fill to the string and decrement the limit
    while (limit > 0) {
      string += fill;
      limit--;
    }
    // Add the string to the string
    string += strng;
    // While the length of the string is less than the width, add the fill to the string
    while (string.length < width) {
      string += fill;
    }
    return string;
    // If the length of the string is odd and the width is even or the length of the string is even and the width is odd
  } else {
    // While the limit is greater than -1, add the fill to the string and decrement the limit
    while (limit > -1) {
      string += fill;
      limit--;
    }
    // Add the string to the string
    string += strng;
    // While the length of the string is less than the width, add the fill to the string
    while (string.length < width) {
      string += fill;
    }
    // Return the string
    return string;
  }
}

// Another solution
// function center (strng, width, fill = ' ') {
//   // Use a ternary operator to check if the length of the string is greater than the width
//   return strng.length > width
//     ? strng
//     // Use the padStart and padEnd methods to center the string
//     : strng
//       .padStart(Math.ceil((width + strng.length) / 2), fill)
//       .padEnd(width, fill);
// }

// DO NOT CHANGE THE CODE BELOW THIS LINE
if (typeof module !== "undefined" && module.exports) {
  module.exports = center;
} else {
  window.center = center;
}
