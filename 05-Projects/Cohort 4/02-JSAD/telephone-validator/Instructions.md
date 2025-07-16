# Telephone Number Validator

This project will help you practice with RegEx, modules and DOM manipulation. You'll build a telephone validator application that accepts user input and validates telephone numbers based on specified rules.

---

## Validation Behavior

1. **As a user**, I want to input a phone number into a text field so that I can check if it is valid.

2. **As a user**, I want to click a **"Submit"** button after typing my phone number so that the program can validate it.

3. **As a user**, I want the program to **tell me clearly whether the phone number is valid or not** so that I understand the result.

4. **As a user**, I want the validation to accept **any of the following formats** as valid:
   - `555-555-5555`
   - `(555)555-5555`
   - `(555) 555-5555`
   - `555 555 5555`
   - `5555555555`
   - `1 555 555 5555`
   
**Breaking down the valid telephone number rules:**
- Your program should return true if the provided string matches any of the valid formats Otherwise it should return false.
- The area code should be either 3 digits or 1 digit preceded by the country code 1
- There should be a space, dash, or no separator between the area code, exchange code, and subscriber number.
- There should be 3 digits in the exchange code and 4 digits in the subscriber number.
- Your program should not consider any additional characters such as spaces or dashes in the telephone number string.
- Your program should ignore any leading or trailing whitespace in the input string.

5. **As a user**, I want the page to **tell me if the number is invalid** when I submit a phone number that doesn't match the valid formats.

---

## Interface & Interaction

6. **As a user**, I want to **see the input box clearly labeled** so I know what type of information is expected.

7. **As a user**, I want to receive **immediate visual feedback** (like a message or colored box) indicating whether my submission is valid or invalid.

8. **As a user**, I want the form to **remain on the page after submission**, so I can test multiple numbers without refreshing.

9. **As a user**, I want to be able to **clear the input** and try another number easily.

---

## Code Behavior 

10. **As a developer**, I want to keep the validation logic **separate from the DOM logic** so that I can test it independently.
**HINT:** Modules will help you here.

---

### File structure

Your project must use the below file structure to organize its components. This structure has the `index.html` document and `README.md` document at the root of the project directory. It also includes an assets directory for stylesheets, images and other assets used by the program, as well as a scripts directory for any scripts used by the program.

```plaintext
telephone-validator/
├── index.html
├── /assets
│   ├── style.css
│   └── logo.png         <-- optional image for branding or a main image on the page
├── /scripts
│   └── script.js
|   └── /validator
|       └── /validator.js  
├── README.md

```

---

### Acceptance Criteria

- Use semantic HTML elements (e.g., `<header>`, `<main>`, `<form>`, etc.) to structure the page clearly.
- Use consistent indentation and spacing in your HTML, CSS, and JavaScript.
- Use class or ID names that describe the role or purpose of each element.
- Use clear, descriptive variable names that make the code easy for human readers.
- Make sure your code is readable and organized into sections.
- The code is well commented in the HTML, CSS and JS. The comments should help organize the code and explain key logic.
- The project includes a well-formatted and informative `README.md` file that helps others understand and use the project.
- The project uses the above file structure.
- Submit the project on a `ready-to-grade` branch in GitLab
- The project is due EOD June 12.

---

### Resources

- Use your lectures and activities
- Use the PCC Telephone Validator project to help test your validation logic.
- Review the PCC challenges section on Regular Expressions to gain a deeper understanding of how to use them for this project.
- Utilize online regex testers such as `regexr.com`.
- Refer to JavaScript documentation or w3schools for additional help, if needed.