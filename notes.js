const fs = require('fs');
const chalk = require('chalk');


const getNotes = function () {
    const notes = loadNotes();
    console.log(chalk.inverse("Your Notes"))
    console.table(notes)
}

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.find(note => note.title === title)
    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('Note added'))
    } else {
        console.log(chalk.red.inverse('Title is already added'))
    }

}
//Read Notes
const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find(note => note.title == title)
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(chalk.inverse(note.body))
    } else {
        console.log(chalk.red.inverse("No Note Found"))
    }
}
//Remove the notes 
const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title)
    saveNotes(notesToKeep);
    if (notes.length === notesToKeep.length) {
        console.log(chalk.red.inverse('No Notes found'))
    } else {
        console.log(chalk.green.inverse('Note Removed successfully'))
    }
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson);
    } catch (error) {
        return []
    }

}
const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson)
}
module.exports = { getNotes: getNotes, addNotes: addNotes, removeNote: removeNote, readNote: readNote }