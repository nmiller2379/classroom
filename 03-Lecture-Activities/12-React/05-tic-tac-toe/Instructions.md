# Tic-Tac-Toe Application

Working in your group complete the following user stories. To accomplish this, your group driver will use copy the `05-Tic-Tac-Toe` directory from the share drive, add `node_modules` and change its name to `LASTNAME-Tic-Tac-Toe`.

## Getting started

In this starter code you will find the shell of the application you'll build, including directories for components, and utils. Your goal is to build a tic-tac-toe game using React. If you get stuck, you can get help from the documentation on the [React website](https://react.dev/learn/tutorial-tic-tac-toe). This documentation will guide you through the process of building a tic-tac-toe game step by step. It is incedibly helpful and will provide you with the knowledge you need to complete this project. However, the project requirements are slightly different from the tutorial, so make sure to read the user stories below.

#### User Story 1: Initialize the Game

**As a user,** I want to see a tic-tac-toe board when I open the application so that I can start playing the game.

**Acceptance Criteria:**

- The application should display a 3x3 grid representing the tic-tac-toe board.
- Each cell in the grid should be a clickable square.

#### User Story 2: Mark a Square

**As a player,** I want to click on an empty square to mark it with my symbol (X or O) so that I can take my turn.

**Acceptance Criteria:**

- When a square is clicked, it should display the current player's symbol (X or O).
- The symbol should alternate between X and O after each turn.
- Clicking on an already marked square should have no effect.

#### User Story 3: Determine the Winner

**As a player,** I want the game to announce the winner when three squares in a row (horizontally, vertically, or diagonally) are marked with the same symbol so that I know who won the game.

**Acceptance Criteria:**

- The game should check for a winner after each move.
- If a player has three in a row, a message should display the winner (e.g., "Winner: X").

#### User Story 4: Restart the Game

**As a player,** I want to restart the game at any time so that I can play another round without refreshing the page.

**Acceptance Criteria:**

- There should be a button to restart the game.
- Clicking the `Go to game start` button should clear the board and reset the game.

#### User Story 5: View Move History

**As a player,** I want to see a history of moves so that I can navigate back to any previous state of the game.

**Acceptance Criteria:**

- The game should keep track of each move.
- There should be a list of buttons to jump to any previous move, each labeled with the move number.
- Clicking on a move should revert the game to the state at that move, and the current player should be updated accordingly.

### Additional Requirements:

- The application should be styled using CSS to ensure a clean and user-friendly interface.
- The application should be built using functional components and React hooks (e.g., `useState`).
- Code should be modular and organized into appropriate directories (e.g., `components` and `utils`).

### Submission Instructions:

- Submit the project by making a copy of the `src` directory from your project, changing its name to the group driver's last name and src, for example: `LASTNAME-src`. Zip that file and place it in your driver's `toGrade` folder.

**Assignment Due: End of Day, June 21**
Your group will discuss your code with the class on June 24. Happy hacking! 🚀
