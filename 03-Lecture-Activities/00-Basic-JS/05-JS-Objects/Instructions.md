# Practice Activities

Complete these activities for practice using objects. If sample data is not provided, feel free to make it up as needed.

1. **Area Calculator Function: Return Early Pattern**

   - Write a function `calculateRectangleArea` that takes the length and width of a rectangle as parameters. Implement the "return early" pattern to check if either dimension is zero or negative, returning an appropriate message. Otherwise, calculate and return the area. The formula is: A = length \* width.

   ```js
   // Example usage:
   const area1 = calculateRectangleArea(5, 8);
   console.log(area1); // Output: 40

   const area2 = calculateRectangleArea(0, 10);
   console.log(area2); // Output: "Invalid dimensions. Length and width must be greater than zero."
   ```

2. **Menu Selector Function: Dynamic Property Access**

   - Create a function `orderMenuItems` that takes a menu object representing items and their prices, as well as a menu item. Use dynamic property access within the function to retrun the selected item's price.

   ```js
   // Example usage:
   const menu = {
     burger: 5.99,
     fries: 2.49,
     soda: 1.0,
   };

   console.log(orderMenuItems(menu, "fries")); // Output: The price of fries is $2.49
   console.log(orderMenuItems(menu, "salad")); // Output: Sorry, salad is not on the menu.
   ```

3. **Quiz Checker Function: Object as Lookup Table**

   - Write a function `checkQuizAnswer` that takes a question key and the user's answer as parameters. Use an object as a lookup table to store quiz questions and correct answers. Check if the user's answer matches the correct answer and return a Boolean value.

   ```js
   // Example usage:
   console.log(checkQuizAnswer("q1", "Paris")); // Output: true
   console.log(checkQuizAnswer("q2", "8")); // Output: false
   console.log(checkQuizAnswer("q4", "JavaScript is fun!")); // Output: false
   ```

4. **Profile Updater Function: Object Manipulation**

   - Write a function `updateUserProfile` that takes a user profile object and allows the user to update their profile by entering a property name and a new value. Use dynamic property access within the function to apply the changes and return the updated profile.

   ```js
   // Example usage:
   const user = {
     name: "John Doe",
     age: 25,
     email: "john.doe@example.com",
   };

   console.log(updateUserProfile(user, "age", 26));
   // Output: { name: 'John Doe', age: 26, email: 'john.doe@example.com' }

   console.log(updateUserProfile(user, "address", "123 Main St"));
   // Output: Invalid property name. Property does not exist in the user profile.
   ```

5. **Weather Reporter Function: Nested Objects**

- Write a function `getCityWeather` that takes a city name and a weather data object with information about different cities. Use nested object access to retrieve and return the temperature, humidity, and conditions for the specified city. Use the object below to test your function:

```js
const weatherInfo = {
  "New York": { temperature: 75, humidity: 60, conditions: "Sunny" },
  London: { temperature: 18, humidity: 75, conditions: "Cloudy" },
};

// Example usage
console.log(getCityWeather("New York", weatherInfo));
// Output: { temperature: 75, humidity: 60, conditions: 'Sunny' }

console.log(getCityWeather("Tokyo", weatherInfo));
// Output: City not found in weather data.
```

Then, test it with a nested object of your own creation. (It will need to match the structure of the provided object, but should provid edifferent information.)
