# JavaScript Closures Practice

These exercises reinforce how closures work and how they can be used to create private state, function factories, and encapsulated logic in functional programming.

## 1. Custom Greeter

Create a function `makeGreeter(greeting)` that returns another function. The returned function takes a `name` and returns a full greeting.

```js
const greetHello = makeGreeter("Hello");
const greetHey = makeGreeter("Hey");

console.log(greetHello("Alice")); // "Hello, Alice!"
console.log(greetHey("Bob")); // "Hey, Bob!"
```

---

## 2. Counter Factory

Write a function `createCounter` that returns a function. Each time you call the returned function, it should increment and return a counter value. The counter should be private.

```js
const counterA = createCounter();
const counterB = createCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1
console.log(counterA()); // 3
console.log(counterB()); // 2
```

---

## 3. Secret Vault

Write a function `createVault(secret)` that returns an object with two methods:

- `reveal()` → returns the secret
- `change(newSecret)` → updates the secret

The `secret` should not be accessible directly.

```js
const vault = createVault("Top Secret");

console.log(vault.reveal()); // "Top Secret"
vault.change("Double Secret");
console.log(vault.reveal()); // "Double Secret"
```

---
