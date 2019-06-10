const express = require('express')
const personaRoutes = express.Router()

// Require Item model in our routes module
const Persona = require('../models/Persona')

// Defined get data(index or listing) route
personaRoutes.route('/').get(function (req, res) {
  Persona.find(function (err, personas) {
    if (err) {
      console.log(err)
    } else {
      res.json(personas)
    }
  })
})

// Defined store route to add
personaRoutes.route('/add').post(function (req, res) {
  let persona = new Persona(req.body)
  persona.save()
    .then(persona => {
      res.status(200).json({'persona': persona, 'mensaje': 'Persona added successfully'})
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})

// Defined find route
personaRoutes.route('/find/:id').get(function (req, res) {
  let id = req.params.id
  Persona.findById(id, function (_err, persona) {
    res.json(persona)
  })
})

//  Defined update route
personaRoutes.route('/edit/:id').put(function (req, res) {
  Persona.findById(req.params.id, function (_err, persona) {
    if (!persona) {
      // eslint-disable-next-line no-undef
      return next(new Error('Could not load Document'))
    } else {
      persona.firstName = req.body.firstName
      persona.lastName = req.body.lastName
      persona.age = req.body.age
      persona.gender = req.body.gender
      persona.born = req.body.born
      persona.noIdent = req.body.noIdent
      persona.children = req.body.children
      persona.race = req.body.race
      persona.salary = req.body.salary
      persona.position = req.body.position
      persona.save().then(persona => {
        res.json({'persona': persona, 'mensaje': 'Update complete'})
      })
        .catch(() => {
          res.status(400).send('unable to update the database')
        })
    }
  })
})

// Defined delete | remove | destroy route
personaRoutes.route('/delete/:id').delete(function (req, res) {
  Persona.findByIdAndRemove({_id: req.params.id}, function (err, persona) {
    if (err) res.json(err)
    else res.json('Successfully removed')
  })
})

module.exports = personaRoutes
