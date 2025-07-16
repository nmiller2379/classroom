// Susie wants to write a function to greet anyone who calls the function. She wants them to receive the message "Hello " and their name. However, she is in love with Johnny, so when she greets Johnny, she wants him to receive the message "Hello, my love!" Among other problems for Susie, she doesn't know how to use JavScript or how functions work. Please help her out.

// Output is undefined

// Input is a string representing the caller's name

// Sample inputs and outputs: ("Johnny") => "Hello, my love!"; ("Todd") => "Hello Todd" ("JOHNNY") => 

// FUNCTION greeting = ("str")
  // Boby: if (str === "Johnny") {
    // return "Hello, my love!"
  // } else {
      // return "Hello " + str
  // }

function greeting(str) {
  if (str === "Johnny" || str === "johnny") {
    return "Hello, my love!";
  } else {
    return "Hello " + str;
  }
}

console.log(greeting("Johnny"))
console.log(greeting("Todd"))
console.log(greeting("Phil"))
console.log(greeting("johnny"))
console.log(greeting("JOHNNY"))
