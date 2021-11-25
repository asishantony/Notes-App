const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

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
        log(`Note Title : ${argv.title}`);
        log(`Note Body : ${argv.body}`);
    }
})

// Remove a note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        log('Remove a note');
    }
})
//  List Notes
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        log('Listing Notes');
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