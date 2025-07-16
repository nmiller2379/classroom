const { addNote, listNotes } = require('./src/notes');

// Parse command-line arguments
// process.argv.slice(2) extracts the relevant command-line arguments passed by the user.
// const command = args[0]; stores the first argument (usually a command or action) in the command variable, so the script can determine what action to perform.
const args = process.argv.slice(2);
const command = args[0]

switch (command) {
    case 'add':
        const title = args[1];
        const body = args[2];
        if (!title || !body) {
            console.log('Please provide a title and body for the note')
        } else {
            addNote(title, body)
        }
        break;
    case 'list':
        listNotes()
        break;
    case 'help':        
    default:
        console.log('Commands:')
        console.log(' add <title> <body> - Add a new note')
        console.log(' list - List all notes')
        console.log(' help - Show this help message')
        break;
}