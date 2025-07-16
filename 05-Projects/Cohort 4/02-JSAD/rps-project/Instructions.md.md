# Rock, Paper, Scissors Game

This project will help you practice DOM manipulation and conditional logic using JavaScript. You’ll build a fully interactive rock, paper, scissors game that responds to user input and displays outcomes dynamically on the page.

---

## Game Behavior

1. **As a user**, I want to see three buttons labeled Rock, Paper, and Scissors so I can make a selection.
2. **As a user**, I want to see the computer’s randomly selected choice after I make mine so I know what I’m competing against.
3. **As a user**, I want the game to clearly display whether I won, lost, or tied so that I understand the result.
4. **As a user**, I want to reset the game after each round so I can play again without refreshing the page.

---

## Interface & Interaction

5. **As a user**, I want to see the results displayed clearly on the page using text, not alert boxes.
6. **As a user**, I want the page to include:
   - A container `<div>` with an id of `gameDiv`.
   - Three `<h1>` elements inside `gameDiv`, each with class `gameText` and ids `playerText`, `computerText`, and `resultText`.
   - Three buttons with the class `choiceBtn`, one each for Rock, Paper, and Scissors.
   - A Reset button that clears the game state.
7. **As a user**, I want the game to include basic styles so it feels polished. You may choose your own color scheme.
8. **As a user**, I want to see a short description of how to play the game so I understand what the buttons do.
9. **As a developer**, I want to separate the game logic from the DOM manipulation so that the code is easier to maintain.
10. **As a developer**, I want to use clean, semantic HTML, well-organized CSS, and readable, well-commented JavaScript.

---

### Extra Credit

- Use **ES6 modules** to separate game logic and DOM logic using `import` and `export`.

---

### File Structure

Your project must use the following structure:

```plaintext
rock-paper-scissors/
├── index.html
├── /assets
│   └── style.css
├── /scripts
│   ├── script.js         <-- handles user interaction and updates to the page
│   └── game.js        <-- handles core game logic (if using modules for extra credit)
|   └── any additional js module files here (if using modules for extra credit)
├── README.md
```

---

### Acceptance Criteria

- Use semantic HTML elements (e.g., `<header>`, `<main>`, etc.) to structure the page clearly.
- Use consistent indentation and spacing in your HTML, CSS, and JavaScript.
- The game functions as expected with accurate win/loss/tie logic.
- The interface responds to user input and updates the DOM accordingly.
- No alert boxes are used for output.
- The project includes a well-formatted and informative `README.md` file that helps others understand and use the project
- Code is modular (for extra credit), organized, and well-commented.
- Project uses the specified file structure.
- Submit on a `ready-to-grade` branch in GitLab.
- Project is due EOD on Monday, June 30.

---

### Resources

- Review DOM manipulation lectures and examples
- Revisit conditionals, functions, and event listeners in JavaScript
- Refer to documentation as needed (MDN, W3Schools, etc.)

---

### Conclusion

This project brings together many key skills you’ve been developing and gives you a fun way to showcase them. Have fun, build confidently, and happy hacking!
