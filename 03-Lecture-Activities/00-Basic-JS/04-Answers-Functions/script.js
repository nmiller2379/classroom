// 1. Write Your Own Greeting Function
function greetUser(name) {
    return "Hello, " + name + "!";
}
console.log(greetUser("Alice"));
console.log(greetUser("bob"));
console.log(greetUser("JORDAN"));

// Bonus
function greetUserUpper(name) {
    return "Hello, " + name.toUpperCase() + "!";
}
console.log(greetUserUpper("alice"));

// 2. Find remainder
function findRemainder(num) {
    return num % 2;
}
console.log(findRemainder(4)); // 0
console.log(findRemainder(7)); // 1

// 3. Get the Last Character
function lastChar(str) {
    return str[str.length - 1];
}
console.log(lastChar("hello")); // "o"
console.log(lastChar("Carl"));  // "l"

// 4. Add to the List
function addToList(arr, value) {
    arr.push(value);
    return arr;
}
console.log(addToList(["a", "b"], "c")); // ["a", "b", "c"]

// 5. Replace the First Letter
function replaceFirstLetter(str, letter) {
    let stringArray = str.split("")
    stringArray[0] = letter
    return stringArray.join("")
}
console.log(replaceFirstLetter("hello", "Y")); // "Yello"

// Bonus: makeTitle
function makeTitle(str) {
    let stringArray = str.split("")
    stringArray[0] = stringArray[0].toUpperCase()
    return stringArray.join("") 
}
console.log(makeTitle("stan")); // "Stan"

// They can do the above with .slice() if they want to I did kind of accidentally introduce that in my example from the other day but we haven't talked about it as a class.

// Stretch: areaOfCircle
function areaOfCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}
console.log(areaOfCircle(5)); // ~78.54

// Bonus: rounded version
function areaOfCircleRounded(radius) {
    return Math.round(Math.PI * Math.pow(radius, 2));
}
console.log(areaOfCircleRounded(5)); // 79

// Still Stretching: areaOfTriangle
function areaOfTriangle(base, height) {
    return 0.5 * base * height;
}
console.log(areaOfTriangle(2, 2)); // 2
