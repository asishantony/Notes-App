const fs = require('fs');
const chalk = require('chalk');


const getNotes = function () {
    const notes = loadNotes();
    console.table(notes)
}

const addNotes = function (title, body) {
    const notes = loadNotes();
    console.table(notes);
    const duplicateNotes = notes.filter(note => {
        return note.title === title;
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green('Note added'))
    } else {
        console.log(chalk.red('Title is already added'))
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
module.exports = { getNotes: getNotes, addNotes: addNotes }