const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const log = console.log;

yargs.version = '1.1.0';

// Create Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

// Remove a note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})
//  List Notes
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        notes.getNotes()
    }
})

//  read Notes
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        log('Reading a note');
    }
})


yargs.parse()