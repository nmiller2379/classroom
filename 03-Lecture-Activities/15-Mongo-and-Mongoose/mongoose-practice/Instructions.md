### **Instructions for Completing the Activity**

To complete this activity, follow these step-by-step instructions. Your goal is to implement several functions using Mongoose to interact with a MongoDB database. Make sure to test each function by running your Node.js application and verifying the results in both the terminal and MongoDB Compass. Also make sure to note out your function call after you have verified or it will execute everytime you update the script.

---

1. **Setup Your Environment:**
   - Install MongoDB locally and ensure the MongoDB server is running.
   - Connect to your local MongoDB instance in your main JavaScript file (e.g., `script.js`).

2. **Define Your Mongoose Model:**
   - Create a new file (e.g., `personModel.js`).
   - Define a schema named `peopleSchema` with fields: `name` (String, required), `age` (Number), and `favoriteFoods` (Array of Strings).
   - Create a Mongoose model named `Person` based on the schema and export it.

3. **Implement the `createAndSavePerson` Function:**
   - Write a function that creates a new instance of the `Person` model with sample data (e.g., `name: "John Doe"`, `age: 30`, `favoriteFoods: ["Pizza", "Pasta"]`).
   - Save the document to the database and log the saved document or error.

4. **Implement the `createManyPeople` Function:**
   - Write a function that uses `Person.create()` to add multiple people to the database. Use an array of objects to represent multiple people with different names, ages, and favorite foods.
   - Log the results or any errors after the documents are saved.

5. **Implement the `findManyPeopleByName` Function:**
   - Write a function that uses `Person.find()` to retrieve all documents where the `name` field matches a specific name (e.g., "John Doe").
   - Log the retrieved documents or errors.

6. **Implement the `findOne` Function:**
   - Write a function that uses `Person.findOne()` to find a single document where `favoriteFoods` contains a specific item (e.g., "Pizza").
   - Log the retrieved document or any errors.

7. **Implement the `findPersonById` Function:**
   - Write a function that uses `Person.findById()` to find a person by their unique `_id`.
   - Log the retrieved document or errors.

8. **Implement the `findEditThenSave` Function:**
   - Write a function that finds a person by `_id`, adds a new food to their `favoriteFoods` array (e.g., "Hamburger"), and saves the updated document back to the database.
   - Use the `.save()` method to save changes and log the updated document or errors.

9. **Implement the `findAndUpdate` Function:**
   - Write a function that uses `Person.findOneAndUpdate()` to find a person by name and update their `age` field to a new value (e.g., 20).
   - Ensure the updated document is returned using the `{ new: true }` option, and log the updated document or errors.

10. **Implement the `removeById` Function:**
    - Write a function that uses `Person.findByIdAndRemove()` to remove a person by their unique `_id`.
    - Log the removed document or errors.

11. **Implement the `removeManyPeople` Function:**
    - Write a function that uses `Person.deleteMany()` to remove all people with a specific name (e.g., "John Doe").
    - Log the results or any errors.

12. **Implement the `queryChain` Function:**
    - Write a function that finds all people who like a specific food (e.g., "Pizza"), sorts them by `name` in ascending order, limits the results to 2, and selects only the `name` and `favoriteFoods` fields.
    - Log the retrieved documents or any errors.

13. **Verify Your Results:**
    - Run your Node.js application and ensure each function is called and operates as expected.
    - Use MongoDB Compass to visually verify that the documents have been added, updated, or deleted correctly.