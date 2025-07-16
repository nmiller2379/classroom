# Regex activities

This activities will help you practice with some of the concepts discussed in today's lecture.

## Password Strength

Your task is to implement the `checkPasswordStrength` function using a regular expressions to evaluate the strength of a password. The function should return a strength rating based on the following criteria:

1. **Weak:** Less than 8 characters.
2. **Medium:** 8 or more characters but does not contain any digits.
3. **Strong:** 8 or more characters and contains at least one digit.

Your function should return "Weak", "Medium", or "Strong" based on the strength of the password according to the provided criteria. Test your function with different password inputs to ensure it behaves as expected.

## Username Validator

Your task is to implement the `isValidUsername` function using regular expressions to check if a username meets the following criteria:

1. Must contain only letters (both uppercase and lowercase), digits, periods, hyphens, and underscores.
2. Must not start or end with a period, hyphen, or underscore.
3. Must be between 3 and 20 characters long.

Your function should return true if the username is valid according to the criteria mentioned above, and false otherwise. Test your function with different username inputs to ensure it behaves as expected.
