// Selecting the element with the ID of "header"
const headerElement = document.getElementById('header');
// console.log(headerElement); // Outputs: the header element.

// Selecting all elements with the class name "note"
const noteElements = document.getElementsByClassName('note');
// for (let i = 0; i < noteElements.length; i++) {
//     console.log(noteElements[i]); // Outputs: Note elements
// }

// Selecting all <p> elements in the document
const paragraphElements = document.getElementsByTagName('p');
// for (let i = 0; i < paragraphElements.length; i++) {
//     console.log(paragraphElements[i]); // Outputs all paragraphs
// }


// Selecting the first element that matches the CSS selector
const highlightElement = document.querySelector('.note');
// console.log(highlightElement); 

// Selecting all elements with a class of note
const allNotes = document.querySelectorAll('.note');
for (let i = 0; i < allNotes.length; i++) {
    console.log(allNotes[i])
};




