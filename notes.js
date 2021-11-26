const fs = require('fs');
const chalk = require('chalk');


const getNotes = function () {
    const notes = loadNotes();
    console.table(notes)
}

const addNotes = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => {
        return note.title === title;
    })
    if (duplicateNotes.length === 0) {
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
//Remove the notes 
const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => {
        return note.title !== title;
    })
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
module.exports = { getNotes: getNotes, addNotes: addNotes, removeNote: removeNote, }