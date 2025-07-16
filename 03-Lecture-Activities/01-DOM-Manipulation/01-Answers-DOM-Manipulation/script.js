// Task 1: Use innerHTML to add an unordered list and dynamically add image.
document.getElementById('content').innerHTML += '<ul><li>List Item 1</li><li>List Item 2</li></ul>';

// document.getElementById('content').textContent = 'Updated Text';

document.getElementById('placeholder').setAttribute('src', './airplane1.jpg');

document.getElementById('placeholder').removeAttribute('alt');

// Task 2: Update content using textContent===================================================

function toggleHidden(index) {
    document.getElementsByClassName('box')[index].classList.toggle('hidden');
}
function addHighlight(index) {
    document.getElementsByClassName('box')[index].classList.add('highlight');
}
function removeHighlight(index) {
    document.getElementsByClassName('box')[index].classList.remove('highlight');
}
// Task 3: Change src attribute and remove alt attribute========================================
// document.getElementById('placeholder').src = './airplane1.jpg';

// let num = 3
// function addItemToList() {
//     const newItem = document.createElement('li');
//     newItem.textContent = 'List Item ' + num;
//     document.getElementById('list').appendChild(newItem);
//     num++
// }


function addItemToList() {
    const list = document.getElementById('list');
    const listIems = list.querySelectorAll('li')
    let num = listIems.length+1
    const newItem = document.createElement('li');
    newItem.textContent = 'List Item ' + num;
    document.getElementById('list').appendChild(newItem);
}