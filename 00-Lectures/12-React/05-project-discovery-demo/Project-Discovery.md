### User Stories

1. **View Questions**
   Look at one question at a time. On load one question should be displayed

   **Action Items:**
   - Create a question component
   - Create logic to keep track of which question should display so that only one displays at at time
   - Set question component up to handle question data from props

2. **Answer Questions**
   - As a user, I want to select an answer from multiple choices for each question, so that I can submit my response to the quiz.

   **Action Items:**
   - Build buttons for answer. (Coming from question data)
   - Create onClick so the user can make a choice. Handle onClick function as props from parent component.


3. **Navigate Questions**
   - As a user, I want to move to the next question after answering the current one, so that I can proceed through the quiz in a sequential order.
   - As a user, I want the option to return to the previous question, so that I can review it.

   **Action Items:**
   - Implement a function to check for the answer and move the user on to the next question
   - Create a previous button
   - Create logic to allow user to move back to another question on click of the previous button
   - Conditoinally render the previous button
   - Manage state in parent QuizScore component
   - Create a piece of state to keep track of the current question

4. **Receive Immediate Feedback**
   - Create state to store how many questions the user has answered correctly.
   - As a user, I want to receive immediate feedback after answering each question, so that I know whether I answered correctly or incorrectly.

   **Action Items:**
  - Implement logic to check if question was answered correctly and update 
   - Render that state to the page.

5. **View Score**
   - As a user, I want to see my current score as I progress through the quiz, so that I can track how well I am doing.

   **Action Items:**
   - Create state to store how many questions the user has answered correctly
   - Ensure the score increases if a question is answered correctly and stays the same if it is not.
   - Render that state to the page.

6. **Complete the Quiz**
   - As a user, I want to see a summary of my performance at the end of the quiz, including my total score and a message telling me the game is complete.

   **Action Items**
   - Conditionally display a message when the game is complete
   - Implement logic to check and see if the game is complete
   - Create a piece of state to track when the game is complete.

7. **Resetting the Quiz**
   - As a user, I want to be able to reset the quiz by clicking a "Reset" button after the quiz is complete.

   **Action-Items:** 
   - Create a reset button
   - Conditionally render Reset button in place of previous button if the game is complete
   - Implement logic to return game to original state when button is clicked
   - Implement onClick for this


## Non-Functional Requirements

1. **Usability**
   - The quiz interface should be intuitive and easy to navigate for users of all ages.

2. **Performance**
   - The app should respond quickly to user inputs and load new questions without noticeable delay.

3. **Components**
   - The app UI should be broken into components, including `Question` (A reusable component to display each quiz question and its options) and `QuizScore` (Displays the current score and final results).

4. **Data**
   - Some data is provided along with this project. You may use that data as a module in your application by copying the `data` directory provided here into the `src` directory on your project, or you may create your own.

5. **Styling**
   - Feel free to style this application how you see fit. You may express your creativity so long as it fulfills the user stories above.

6. **Demo**
   - This directory also includes a video that demonstrates the basic functionality of a finished application.
   

### HINT
You may find that you want to manage at least one part of your state as an array. We haven't talked much about how to do that as a class, but you can consult the documentation. The important thing to remember is that we don't want to mutate state. Which means, we don't want to mutate the array. We want to make a copy of it and change that. Here is more info from the React docs: https://react.dev/learn/updating-arrays-in-state