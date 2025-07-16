// Let's simulate a simple greeting system for a website visitor
// We'll greet the user based on the time of day and whether they are logged in.

// Step 1: Set up the data (our inputs)
const isLoggedIn = true;           // Boolean value (true or false)
const userName = "Alicia";         // Just a name for personalization
const currentHour = 14;            // 24-hour format (14 = 2 PM)
const favoriteColor = "blue";      // This will be used in a switch statement later

// Step 2: Use conditional logic to customize the greeting

// First, check if the user is logged in
if (isLoggedIn) {
  // User is logged in, now use time of day to customize greeting
  if (currentHour < 12) {
    console.log("Good morning, " + userName + "!");
  } else if (currentHour < 18) {
    console.log("Good afternoon, " + userName + "!");
  } else {
    console.log("Good evening, " + userName + "!");
  }
} else {
  // User is not logged in
  console.log("Welcome, guest! Please log in to continue.");
}

// Step 3: Use comparison and logical operators
// Let's check if the user is logged in AND it's afternoon

if (isLoggedIn && currentHour >= 12 && currentHour < 18) {
  console.log("It's a great afternoon to be online!");
}

// Step 4: Use strict vs loose equality

let age = "18";   // a string, not a number (could come from user input)

if (age == 18) {
  console.log("You're 18 (loose equality – works due to type coercion).");
}

if (age === 18) {
  console.log("You're 18 (strict equality – this won't run because types don't match).");
} else {
  console.log("Strict equality failed: age is not a number.");
}

// Step 5: Switch statement – handle favorite color

switch (favoriteColor) {
  case "red":
    console.log("Red is bold and passionate!");
    break;
  case "blue":
    console.log("Blue is calm and trustworthy.");
    break;
  case "green":
    console.log("Green is refreshing and natural.");
    break;
  default:
    console.log("That's a unique color choice!");
}
