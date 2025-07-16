// Struggled with when you first type out the function
// Write a function call it areaTriangle that takes two parameters, the base and the height.

// Formula for area of a triangle area = .5 * base * height

// Outupt: Area of a triangle
// 2, 2 -> 2
// 6, 6 -> 18
// 5, 7 -> 17.5

// Sample input: base of 2 and a height of 2 -> 2
// Another sample input: base of 6 and a height of 6 -> 18
// Third sample input: base of 5 and base of 7 -> 17.5

// 1. multiply . 5 * base
// 2. Multiply that value by height
// 3. Return that value

function areaTriangle(base, height) {
  // 1. multiply . 5 * base // 2. Multiply that value by height // 3. Return that value
  return 0.5 * base * height;
}

console.log(areaTriangle(2, 2));
console.log(areaTriangle(6, 6));
console.log(areaTriangle(5, 7));

// Write a function called replace first letter that takes two parameters a string and a letter. The function should return a new string where the first letter is replaced with the given letter.

// Output: A new string with the first letter replaced by the input letter
// Inputs: A string and a letter (two strings)

// "hello", "y" -> "yello"
// "wow", "h" -> "how"
// "cat", "b" -> "bat"
// "house", "m" -> "mouse"
// "card", "z" -> "zard"

// 1. Declare a variable to store arra from split string -> ["c", "a", "r", "d"]
// 2. Find the 0 index of the array -> "c"
// 3. Update that value to letter -> "z" ["z", "a", "r", "d"]
// 4. Turn the array into a string -> "zard"
// 5. Return that new string -> return "zard"

function replaceFirstLetter(str, letter) {
  // 1. Declare a variable to store array from split string
  let stringArray = str.split("")
  // 2. Find the 0 index of the array
  // 3. Update that value to letter 
  stringArray[0] = letter
  // 4. Turn the array into a string 
  // 5. Return that new string
  return stringArray.join("") 
}


console.log(replaceFirstLetter("card","z"))
console.log(replaceFirstLetter("house","m"))
console.log(replaceFirstLetter("cat","b"))


