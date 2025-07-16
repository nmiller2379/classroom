const fs = require('fs');
// Global variable used to store the path to put the document we'll need in both functions.
const logFilePath = 'notes.json';

// function to save notes to the JSON file
const saveNotes = (notes) => {
    // Built-in method converts data to JSON. The first argument is the data. The second argument is an optional repalcer function (which we're not using so it's null). The third option is the number of spaces to use when creating the JSON object. By convention it's considered to strike a good balance between readablity and size
    const dataJSON = JSON.stringify(notes, null, 2)
    // Writes the JSON data to a file. The first argument contains the path of where the file should be. The second arguments is the JSON string that is written to the file.
    fs.writeFileSync(logFilePath, dataJSON)
}

// function to load notes from the JSON file. The purpose of this function is to load tasks from a file, parse them, and return them as an array of JavaScript objects. If it encounters an error (e.g., the file doesn't exist), it returns an empty array.
const loadNotes = () => {
    try {
        // store the data from reading the file
        const dataBuffer = fs.readFileSync(logFilePath);
        // turn the raw binary data into a string
        const dataJSON = dataBuffer.toString()
        // parses the JSON object in a Javascript object
        return JSON.parse(dataJSON)
    } catch(e) {
        return [];
    }
}



module.exports = {
    loadNotes,
    saveNotes
}