# Telephone Validator

You are tasked with building a JavaScript program that validates telephone numbers according to a set of predefined rules. The purpose of this project is to reinforce your understanding of regular expressions and JavaScript fundamentals.

## Acceptance Criteria

1. Your program should be able to accept a string representing a telephone number as input. (up to 2 points)
2. The telephone number should be considered valid if it meets one of the following formats (up to 2 points):
- 555-555-5555
- (555)555-5555
- (555) 555-5555
- 555 555 5555
- 5555555555
- 1 555 555 5555 
3. Your program should return true if the provided string matches any of the valid formats Otherwise it should return false.(up to 2 points)
4. The area code should be either 3 digits or 1 digit preceded by a country code 1.(up to 2 points)
5. There should be a space, dash, or no separator between the area code, exchange code, and subscriber number.(up to 2 points)
6. There should be 3 digits in the exchange code and 4 digits in the subscriber number.(up to 2 points)
7. Your program should not consider any additional characters such as spaces or dashes in the telephone number string.(up to 2 points)
8. Your program should ignore any leading or trailing whitespace in the input string.(up to 2 points)
9. Ensure your code is well-commented to explain the purpose of each part of the regular expression or logic used. (up to 34 points)

## Submission Guidelines:

- Submit your JavaScript project folder containing the function implementing the telephone number validator.
- Provide comments within your code to explain the logic and any complex regular expressions used.
- Make sure your code is properly formatted and indented for readability.
- Test your code with various valid and invalid telephone number inputs to ensure it functions correctly according to the acceptance criteria.
- For extra credit (up to 10 points) create an HTML page that takes a phone number from the user and displays a message indicating whether the phone number is valid or now.

### Resources:

Review the PCC challenges section on Regular Expressions to gain a deeper understanding of how to use them for this project.
Utilize online regex testers such as regexr.com.
Refer to JavaScript documentation or w3schools for additional help, if needed.