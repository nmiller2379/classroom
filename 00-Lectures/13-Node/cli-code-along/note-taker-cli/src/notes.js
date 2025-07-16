const { saveNotes, loadNotes } = require('./utils')

// Function to handle the add from the user -- add a new note to the list
const addNote = (title, body) => {
    const notes = loadNotes();
    const note = { title, body };
    notes.push(note);
    saveNotes(notes)
    console.log('New note added:', note)
}

// Function to list notes with their details
const listNotes = () => {
    const notes = loadNotes()
    if (notes.length === 0) {
        console.log('No notes found.')
        return
    }
    console.log('Your notes:')
    notes.forEach((note, index) => {
        console.log(`${index + 1}. ${note.title}`)
    })
}

module.exports = {
    addNote,
    listNotes
}