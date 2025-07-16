# Task Manager Dashboard (CSS Grid Practice)

## Goal
Your challenge is to style a Task Manager Dashboard using CSS Grid. You will be given the HTML starter code—your job is to write CSS to create a responsive, well-structured layout.

## Learning Objectives
By completing this activity, you will:  
- Practice CSS Grid fundamentals  
- Use `grid-template-areas` for layout structuring  
- Apply `grid-auto-flow` for dynamic task placement  
- Implement responsive design with media queries  

## Step 1: Download and Open the Starter Code
1. Use the provided `index.html` file.  
2. Create a new `style.css` file in the same folder.  
3. Link `styles.css` to `index.html` using:  
4. Open `index.html` in a browser and inspect the structure.  

## Step 2: Write Your CSS
### Base Layout (Desktop)
- Define `.container` as a CSS Grid layout.  
- Use `grid-template-areas` to structure the page like this:  
  ```
  ---------------------------
  |   HEADER   |   HEADER   |
  ---------------------------
  |    NAV     |    NAV     |
  ---------------------------
  |  SIDEBAR   |   TASKS    |
  ---------------------------
  |   NOTES    |   TASKS    |
  ---------------------------
  |   FOOTER   |   FOOTER   |
  ---------------------------
  ```
- Use `grid-template-columns` and `grid-template-rows` to define two main columns.  

### Task Section (Dynamic Grid)
- Inside `.tasks`, use `grid-auto-flow: row;`.  
- Use `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));` to make tasks responsive.  

### Make It Mobile-Friendly
- At `max-width: 768px`, change the layout to a single-column structure:
  ```
  -------------------
  |     HEADER      |
  -------------------
  |      NAV        |
  -------------------
  |     TASKS       |
  -------------------
  |    SIDEBAR      |
  -------------------
  |     NOTES       |
  -------------------
  |     FOOTER      |
  -------------------
  ```

## Step 3: Customize Your Design
- Choose your own colors and fonts.  
- Add hover effects on tasks.  
- Improve spacing and responsiveness.  

## Bonus Challenge
- Challenge 1: Add a hover effect where tasks slightly scale up when hovered.      

## What You Will Gain
By completing this, you will reinforce CSS Grid skills and build a real-world-type dashboard layout.  

## Need Help?
- Use DevTools (`Inspect Element`) to see how the grid behaves.  
- Use your resources: w3Schools, MDN, worked examples and lectures.  

Have fun designing your task manager!  
