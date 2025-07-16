# Basic DOM Manipulation Exercises
These exercises will help you practice some of the concepts we've coverd in the first two DOM manipulation lectures.

**Activity 1: Modify Content and Attributes**
**Objective:** Practice modifying the content of elements using innerHTML and textContent, and update element attributes with setAttribute and removeAttribute.
1. **Setup:** Create an HTML page with a <div> element containing some text and an <img> tag with a placeholder src attribute and a placeholder alt attribute.
2. **Task:**
- Use innerHTML to add an unordered list inside the <div>.
- Update the <div> content again using textContent to see the difference.
- Change the src attribute of the image to point to an image.
- Remove the alt attribute from the <img> element.

**Activity 2: ClassList Manipulation**
**Objective:** Practice adding, removing, and toggling CSS classes using classList.
**Setup:** Include several <div> elements with various classes assigned, including a "hidden" class that sets display to none.
**Task:**
- Write a script to toggle the "hidden" class on click events for each <div>.
- Add a "highlight" class to a <div> when the mouse hovers over it, and remove it when the mouse leaves. This last one is a little tricky. Check out the `onmouseover` (https://www.w3schools.com/jsref/event_onmouseover.asp) and `onmouseout` (https://www.w3schools.com/jsref/event_onmouseout.asp) events.

**Activity 3: Dynamically Add List Items**
**Objective:** Practice dynamically adding elements to the DOM.
**Setup:** Create an unordered list containing a couple of initial list items. Include a button.
**Task:**
- When the button is clicked add a new item to the list.
- Add the item to the unordered list.