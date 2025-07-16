// Password strength:
// function checkPasswordStrength(password) {
//   // Regular expression to match strong password with at least one digit
//   const strongRegex = /^(?=.*\d).{8,}$/;

//   // Regular expression to match medium password without any digits
//   const mediumRegex = /^[^\d]{8,}$/;

//   if (strongRegex.test(password)) {
//     return "Strong";
//   } else if (mediumRegex.test(password)) {
//     return "Medium";
//   } else {
//     return "Weak";
//   }
// }

function checkPasswordStrength(password) {
  // Check if password contains at least one digit
  const containsDigit = /\d/.test(password);

  // Check if password length is at least 8 characters
  const isLengthValid = password.length >= 8;

  // Determine strength based on conditions
  if (containsDigit && isLengthValid) {
    debugger;
    return "Strong";
  } else if (isLengthValid) {
    return "Medium";
  } else {
    return "Weak";
  }
}

// OK. In this version, we just explicitly check if the password contains a digit and then check to make sure it's at least 8 characters and then put the conditionals together to generate "Strong", "Weak" or "Medium"

// Test cases
console.log(checkPasswordStrength("password")); // Medium
console.log(checkPasswordStrength("abcdefg")); // Weak
console.log(checkPasswordStrength("secure123")); // Strong
console.log(checkPasswordStrength("12345678")); // Strong
console.log(checkPasswordStrength("pass1")); // Weak
console.log(checkPasswordStrength("VerySecurePassword123")); // Strong

// 2. Username Validator
function isValidUsername(username) {
  // Regular expression to match valid username formats
  const regex = /^[a-zA-Z\d](?!.*[._-]{2,})[\w.-]{2,19}[a-zA-Z\d]$/;

  // Test if the username matches the regex
  return regex.test(username);
}

// function isValidUsername(username) {
//   // Regular expression to match valid username formats
//   const regex = /^[a-zA-Z\d][\w.-]*[a-zA-Z\d]$/;

//   // Test if the username matches the regex
//   return regex.test(username) && !/(^\.|\.$|_{2,}|-{2,}|\.+\.*|_+\_*|-+\-*)/.test(username);
// }
// The look ahead makes sure we don't have back to back periods, hyphens, etc. We can also explicity check for that.

// Test cases
console.log(isValidUsername("user123")); // true
console.log(isValidUsername("john.doe")); // true
console.log(isValidUsername("user_name")); // true
console.log(isValidUsername("user-name")); // true
console.log(isValidUsername("username_123")); // true
console.log(isValidUsername("user..name")); // false (consecutive periods)
console.log(isValidUsername("user--name")); // false (consecutive hyphens)
console.log(isValidUsername("user__name")); // false (consecutive underscores)
console.log(isValidUsername("_username")); // false (starts with underscore)
console.log(isValidUsername(".username")); // false (starts with period)
console.log(isValidUsername("-username")); // false (starts with hyphen)
console.log(isValidUsername("username_")); // false (ends with underscore)
console.log(isValidUsername("username.")); // false (ends with period)
console.log(isValidUsername("username-")); // false (ends with hyphen)
console.log(isValidUsername("a")); // false (less than 3 characters)
console.log(isValidUsername("very_long_username_with_more_than_20_characters")); // false (more than 20 characters)


// Test cases
console.log(isValidUsername("user 123")); // true
console.log(isValidUsername("user123")); // true
console.log(isValidUsername("john.doe")); // true
console.log(isValidUsername("user_name")); // true
console.log(isValidUsername("user-name")); // true
console.log(isValidUsername("username_123")); // true
console.log(isValidUsername("user..name")); // false (consecutive periods)
console.log(isValidUsername("user--name")); // false (consecutive hyphens)
console.log(isValidUsername("user__name")); // false (consecutive underscores)
console.log(isValidUsername("_username")); // false (starts with underscore)
console.log(isValidUsername(".username")); // false (starts with period)
console.log(isValidUsername("-username")); // false (starts with hyphen)
console.log(isValidUsername("username_")); // false (ends with underscore)
console.log(isValidUsername("username.")); // false (ends with period)
console.log(isValidUsername("username-")); // false (ends with hyphen)
console.log(isValidUsername("a")); // false (less than 3 characters)
console.log(isValidUsername("very_long_username_with_more_than_20_characters")); // false (more than 20 characters)
