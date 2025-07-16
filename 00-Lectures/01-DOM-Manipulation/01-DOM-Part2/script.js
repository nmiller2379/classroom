// Global variable declarations
const div = document.getElementById('myDiv');
const link = document.getElementById('myLink');
const newDiv = document.createElement('div');
const parent = document.getElementById('parentDiv');
const child = document.getElementById('referenceNode');
const referenceNode = document.getElementById('referenceNode');

// Function triggered on click by user to toggle .active class
function toggle() {
    const div = document.getElementById('myDiv');
    div.classList.toggle('active'); 
}

// Adding html to the div element
div.innerHTML = '<strong>This is bold text</strong> and normal text.';

// Changing text in the div element
div.textContent = 'This is some text content.';

// Setting the attribute of the link element. Method takes two arguments: the attribute and its value.
link.setAttribute('href', 'https://www.perseverenow.org/');

// Removing the attribute, passing in string argument to method call for attribute to remove
link.removeAttribute('href');

// Adding a class
div.classList.add('new-class');

// Removing a class
div.classList.remove('new-class');

// Toggling a class
div.classList.toggle('active');

// Creating text for the new div
newDiv.textContent = 'This is a new div.';

// Two different ways to add the div to the dom
// 1) append as a child to its parent
parent.appendChild(newDiv);
// 2) Insert before a child to its parent
parent.insertBefore(newDiv, referenceNode);

// Removing the child reference node from the DOM using method on the parent element.
parent.removeChild(child);


