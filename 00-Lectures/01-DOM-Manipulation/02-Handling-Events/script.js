// Global variable declarations
const element = document.getElementById("clickable");
const button = document.getElementById("myButton");
const list = document.getElementById("myList");
const firstItem = list.firstElementChild;
const nextItem = firstItem.nextElementSibling;

// Declaring a handleClick function
function handleClick() {
  console.log("Button clicked!");
}

// Addling a click event listener to the #clickable element
element.addEventListener("click", function () {
  console.log("Element clicked!");
});

// adding an event listener to the #myButton element
button.addEventListener("click", handleClick);

// Adding an event handler to the #clickable element with event capture.
element.addEventListener("click", handleClick, true);

// Adding an event listener to the #myForm element
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  // Handle the form submission here
});

// adding an event listener to the #input element
document
  .getElementById("myTextInput")
  .addEventListener("input", function (event) {
    console.log(event.target.value); // Logs every keystroke entered in the input field
  });

// adding on change event listener to the #surveyForm element and getting the value fo the element when the change happens.
document
  .getElementById("surveyForm")
  .addEventListener("change", function (event) {
    console.log(event.target.value);
  });

// Logging small DOM traversal to the console. 
console.log(firstItem.textContent);
console.log(nextItem.textContent);
