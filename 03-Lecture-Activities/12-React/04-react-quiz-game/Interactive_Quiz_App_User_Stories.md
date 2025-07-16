# Interactive Quiz App User Stories

## Functional Requirements

### User Stories

1. **View Questions**
   - As a user, I want to view one question at a time, so that I can focus on answering the current question without distraction.

2. **Answer Questions**
   - As a user, I want to select an answer from multiple choices for each question, so that I can submit my response to the quiz.

3. **Navigate Questions**
   - As a user, I want to move to the next question after answering the current one, so that I can proceed through the quiz in a sequential order.
   - As a user, I want the option to return to the previous question, so that I can review it.

4. **Receive Immediate Feedback**
   - As a user, I want to receive immediate feedback after answering each question, so that I know whether I answered correctly or incorrectly.

5. **View Score**
   - As a user, I want to see my current score as I progress through the quiz, so that I can track how well I am doing.

6. **Complete the Quiz**
   - As a user, I want to see a summary of my performance at the end of the quiz, including my total score and a message telling me the game is complete.

7. **Resetting the Quiz**
   - As a user, I want to be able to reset the quiz by clicking a "Reset" button after the quiz is complete.

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

