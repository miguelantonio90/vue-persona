let mongoose = require('mongoose')
let Schema = mongoose.Schema

// Define collection and schema for Persona
let Persona = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    age: {type: Number},
    gender: {type: Boolean},
    born: {type: Date},
    noIdent: {type: String},
    children: {type: Number},
    race: {type: String},
    salary: {type: String},
    position: {type: String}
  },
  {collection: 'personas'})

module.exports = mongoose.model('Persona', Persona)
