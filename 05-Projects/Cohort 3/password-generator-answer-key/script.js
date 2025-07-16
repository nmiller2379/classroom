function generatePassword() {
  const length = document.getElementById("password-length").value;
  const includeUppercase = document.getElementById("include-uppercase").checked;
  const includeLowercase = document.getElementById("include-lowercase").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSymbols = document.getElementById("include-symbols").checked;
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:'\",.<>/?";
  let characters = "";
  let password = "";

  if (includeUppercase) characters += uppercaseLetters;
  if (includeLowercase) characters += lowercaseLetters;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  if (characters.length === 0) {
    document.getElementById("generated-password").value = "Please select at least one character type.";
    document.getElementById("generated-password").style.color = "red"
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById("generated-password").style.color = "black"
  document.getElementById("generated-password").value = password;
}

function checkPasswordStrength() {
  const password = document.getElementById("user-password").value;
  let strength = "";
  const patterns = {
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    numbers: /\d/,
    symbols: /\W/,
  };
  let score = 0;

  if (patterns.uppercase.test(password)) score++;
  if (patterns.lowercase.test(password)) score++;
  if (patterns.numbers.test(password)) score++;
  if (patterns.symbols.test(password)) score++;
  if (password.length >= 12) score++;

  switch (score) {
    case 5:
    case 4:
      strength = "Strong";
      break;
    case 3:
      strength = "Medium";
      break;
    default:
      strength = "Weak";
  }

  document.getElementById(
    "password-strength"
  ).innerText = `Your password is ${strength}.`;
}
