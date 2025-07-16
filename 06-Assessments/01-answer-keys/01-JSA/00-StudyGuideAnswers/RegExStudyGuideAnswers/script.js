// 1. Email Validation
function validateEmailAddresses(emailArray) {
  // Regular expression for validating email addresses
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

  // Loop through each email in the array
  for (let i = 0; i < emailArray.length; i++) {
    const email = emailArray[i];

    // Check if the current email matches the regular expression
    if (emailRegex.test(email)) {
      // Log the valid email to the console
      console.log(email);
    }
  }
}

// Example usage:
const emails = [
  "john.doe@example.com",
  "jane-doe@website.co.uk",
  "invalid-email@",
  "alice@example.com",
];
validateEmailAddresses(emails);

// 2. Matching phone numbers
function formatPhoneNumbers(phoneString) {
  // Regular expression to find and extract phone numbers with the global flag
  const phoneRegex = /(\d{3})[-. ]?(\d{3})[-. ]?(\d{4})/g;

  // Use match() to find all phone numbers in the string
  const matches = phoneString.match(phoneRegex);

  // Check if any matches were found
  for (const match of matches) {
    // Remove non-digit characters and reformat the phone number
    const cleanedMatch = match.replace(/[-. ]/g, ""); // Remove separators
    const [firstThree, middleThree] = cleanedMatch.match(/\d{3}/g); // Extract digits using array destructuring
    const lastFour = cleanedMatch.match(/\d{4}$/g); //match last four digits
    const formattedPhoneNumber = `(${firstThree}) ${middleThree}-${lastFour}`;
    console.log(formattedPhoneNumber);
  }
}

// Example usage:
const phoneNumbers =
  "Call me at 800-555-1234 or 900.555.1234. My office number is 800 555 1234.";
formatPhoneNumbers(phoneNumbers);
