# JavaScript Function Practice Activities

These activities build on your knowledge of strings, arrays, and math operations while helping you practice writing functions functions.

---

## 1. Write Your Own Greeting Function

**Description:**  
Write a function called `greetUser` that takes one parameter—`name`—and returns a string like `"Hello, NAME!"`. Call your function with at least three different names and log the results.  
**Bonus:** Try using `.toUpperCase()` or `.toLowerCase()` on the name inside your function.

---

## 2. Find remainder

**Description:**  
Write a function called `findRemainder` that takes a number as a parameter and returns the **remainder** when that number is divided by 2.  
**Example:**

```js
findRemainder(4); // returns 0
findRemainder(7); // returns 1
```

**Bonus:** Try it out with other numbers! What patterns do you notice in the results?

---

## 3. Get the Last Character

**Description:**  
Write a function called `lastChar` that takes a string as input and returns the last character.  
**Example:**

```js
lastChar("hello"); // returns "o"
```

---

## 4. Add to the List

**Description:**  
Write a function called `addToList` that takes two parameters: an array and a value. The function should add the value to the end of the array, then return the updated array.  
**Example:**

```js
addToList(["a", "b"], "c"); // returns ["a", "b", "c"]
```

---

## 5. Replace the First Letter

**Description:**  
Write a function called `replaceFirstLetter` that takes two parameters: a string and a letter. The function should return a new string where the first character is replaced with the given letter.  
**Example:**

```js
replaceFirstLetter("hello", "Y"); // returns "Yello"
```
**Bonus**
Write a function `makeTitle` that takes a lowercase string and returns the string with the first letter capitalized.
**Example:**
```js
makeTitle("stan") // returns "Stan"
```

---

## Stretch Questions

**Description:**
Write a function called `areaOfCircle` that takes one parameter: the radius of a circle. It should return the area of the circle.
**Example:**

```js
areaOfCircle(5); //returns 78.53981633974483
```

**Bonus:** Can you modify your function so that it rounds the area to the nearest integer and returns that value?
**Still stretching?** Write a function called `areaOfTriangle` that takes two parameters: the base and the height of a triangle. It should return the area using this formula: `Area = (1/2) × base × height`.
**Example:**

```js
areaOfTriangle(2, 2); //Returns 2
```

---

**REMINDER:** Because functions are reusable code, your functions must work not only for the provided example inputs but also for all similar inputs. For example, `lastChar` should return not only "o" when called with "hello", but also "l" when called with "Carl".
