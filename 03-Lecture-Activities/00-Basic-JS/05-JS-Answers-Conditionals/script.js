// 1 Temperature Classifier====================================================================
function classifyTemperature(temperature) {
  if (temperature >= 70) {
    // If the temperature is 70 degrees or higher, it's classified as hot.
    return "hot";
  } else if (temperature >= 55 && temperature < 70) {
    // If the temperature is between 15 and 29 degrees (inclusive), it's classified as warm.
    return "warm";
  } else {
    // If the temperature is less than 55 degrees, it's classified as cold.
    return "cold";
  }
}

// Example usage:
console.log(classifyTemperature(70));

// 2 Grades Calculator ==========================================================================
function determineLetterGrade(grade) {
  // If the grade is 90 or higher, it's an 'A'.
  if (grade >= 90) {
    return "A";
  }
  // If the grade is between 80 and 89 (inclusive), it's a 'B'.
  else if (grade >= 80) {
    return "B";
  }
  // If the grade is between 70 and 79 (inclusive), it's a 'C'.
  else if (grade >= 70) {
    return "C";
  }
  // If the grade is between 60 and 69 (inclusive), it's a 'D'.
  else if (grade >= 60) {
    return "D";
  }
  // If the grade is below 60, it's an 'F'.
  else {
    return "F";
  }
}

// Example usage:
console.log(determineLetterGrade(71));

//  3. Traffic Light Simulator===================================================================
function trafficLightAction(color) {
  let action; // Declare a variable to store the action

  // Use a switch statement to handle different traffic light colors
  switch (color) {
    // If the color is 'red', set the action to 'stop' and break out of the switch
    case "red":
      action = "stop";
      break;

    // If the color is 'yellow', set the action to 'prepare to stop' and break out of the switch
    case "yellow":
      action = "prepare to stop";
      break;

    // If the color is 'green', set the action to 'go' and break out of the switch
    case "green":
      action = "go";
      break;

    // Default case for an invalid color, set the action to 'invalid color'
    default:
      action = "invalid color";
      break;
  }

  // Return the stored action after the switch statement
  return action;
}

// Example usage:
console.log(trafficLightAction("yellow"));

// 4. Number analyzer ==========================================================================
function classifyNumber(value) {
  // Check if the input is a valid number
  if (typeof value !== "number" || isNaN(value)) {
    // If not a valid number, return an error message
    return "Invalid input. Please provide a valid number.";
  } else {
    // If the input is a number, use if-else statements to classify it
    if (value > 0) {
      // If the number is greater than 0, it's positive
      return "Positive";
    } else if (value < 0) {
      // If the number is less than 0, it's negative
      return "Negative";
    } else {
      // If the number is 0, it's zero
      return "Zero";
    }
  }
}

// Example usage:
const classification = classifyNumber(7)
console.log(classification)


// 5. Calendar Function =========================================================================
function numberOfDaysInMonth(month) {
    let daysInMonth; // Declare a variable to store the number of days
  
    // Use a switch statement to handle different months
    switch (month) {
      // Months with 31 days
      case 1: // January
      case 3: // March
      case 5: // May
      case 7: // July
      case 8: // August
      case 10: // October
      case 12: // December
        daysInMonth = '31 days';
        break;
  
      // Months with 30 days
      case 4: // April
      case 6: // June
      case 9: // September
      case 11: // November
        daysInMonth = '30 days';
        break;
  
      // February, handling leap years
      case 2:
        // Check if the year is a leap year
        // (For simplicity, assuming a non-leap year if the year is not provided)
        let isLeapYear = false; // Change this based on the actual leap year calculation
        if (isLeapYear) {
          daysInMonth = '29 days';
        } else {
          daysInMonth = '28 days';
        }
        break;
  
      // Default case for an invalid month
      default:
        daysInMonth = 'Invalid month';
        break;
    }
  
    // Return the stored number of days after the switch statement
    return daysInMonth;
  }
  
  // Example usage:
const days = numberOfDaysInMonth(4)
console.log(days)

//Stretch question 
function multiples(num) {
  if (num % 15 === 0) {
    return "multiple of three and five"
  } else if (num % 5 === 0) {
    return "multiple of five"
  } else if (num % 3 === 0) {
    return "multiple of three"
  } else {
    return num
  }
}

console.log(multiples(45)) 
console.log(multiples(9))
console.log(multiples(20))
console.log(multiples(7))

