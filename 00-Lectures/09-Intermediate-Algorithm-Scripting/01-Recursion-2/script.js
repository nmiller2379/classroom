function reverseString(str) {
  if (str === "") {
    // Base case
    return "";
  } else {
    // Recursive case
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}