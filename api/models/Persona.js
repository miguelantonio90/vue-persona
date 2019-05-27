var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Persona
var Persona = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: Boolean
    },
    born: {
        type: Date
    },
    noIdent: {
        type: Number
    },
    children: {
        type: Number
    },
    race: {
        type: String
    },
    salary: {
        type: String
    },
    position: {
        type: String
    }
}, {
        collection: 'personas'
    });

module.exports = mongoose.model('Persona', Persona);