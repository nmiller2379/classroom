// 1. Custom Greeter
// makeGreeter is a higher-order function that returns another function.
// It demonstrates how a closure captures the 'greeting' variable from its outer scope.
function makeGreeter(greeting) {
  // The returned function has access to 'greeting' even after makeGreeter has finished running.
  return function (name) {
    // This function combines 'greeting' from the outer scope and 'name' from its own parameter.
    return `${greeting}, ${name}!`;
  };
}

// We create two separate greeter functions, each with its own closed-over 'greeting' value.
const greetHello = makeGreeter("Hello");
const greetHey = makeGreeter("Hey");

// Each greeter remembers the greeting it was created with.
console.log(greetHello("Alice")); // "Hello, Alice!"
console.log(greetHey("Bob")); // "Hey, Bob!"

// ---
// 2. Counter Factory
// createCounter returns a function that keeps track of how many times it's been called.
// The 'count' variable is enclosed in the closure and remains private.
function createCounter() {
  let count = 0; // This is the private variable. It is only accessible inside the returned function.

  // This inner function has access to 'count' and can update and return it.
  return function () {
    count++; // Increments the private 'count'
    return count; // Returns the updated value
  };
}

// Each call to createCounter produces a new closure with its own private 'count'
const counterA = createCounter();
const counterB = createCounter();

console.log(counterA()); // 1 — counterA's count starts at 0 and is incremented to 1
console.log(counterA()); // 2 — incremented again
console.log(counterB()); // 1 — counterB has its own independent count
console.log(counterA()); // 3 — counterA continues from where it left off
console.log(counterB()); // 2 — counterB also continues independently

// ---
// 3. Secret Vault
// createVault demonstrates how closures can encapsulate data and expose only controlled access to it.
function createVault(secret) {
  let storedSecret = secret; // Private variable — only accessible through the methods below

  return {
    // reveal() gives access to the current value of 'storedSecret'
    reveal() {
      return storedSecret;
    },
    // change() allows the secret to be updated
    change(newSecret) {
      storedSecret = newSecret;
    },
  };
}

// We create a vault with a secret string
const vault = createVault("Top Secret");

console.log(vault.reveal()); // "Top Secret" — accessing the secret through a method
vault.change("Double Secret"); // updating the secret value
console.log(vault.reveal()); // "Double Secret" — the new secret is now revealed
