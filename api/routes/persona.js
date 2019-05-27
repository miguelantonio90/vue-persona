var express = require('express');
var app = express();
var personaRoutes = express.Router();

// Require Item model in our routes module
var Persona = require('../models/Persona');

// Defined store route
personaRoutes.route('/add').post(function (req, res) {
    var persona = new Persona(req.body);
    persona.save()
        .then(persona => {
            res.status(200).json({ 'persona': 'Persona added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
personaRoutes.route('/').get(function (req, res) {
    Persona.find(function (err, personas) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(personas);
        }
    });
});

// Defined find route
personaRoutes.route('/find/:id').get(function (req, res) {
    var id = req.params.id;
    Persona.findById(id, function (err, persona) {
        res.json(persona);
    });
});

//  Defined update route
personaRoutes.route('/edit/:id').post(function (req, res) {
    Persona.findById(req.params.id, function (err, persona) {
        if (!persona)
            return next(new Error('Could not load Document'));
        else {
            persona.firstName = req.body.firstName;
            persona.lastName = req.body.lastName;
            persona.age = req.body.age;
            persona.gender = req.body.gender;
            persona.born = req.body.born;
            persona.noIdent = req.body.noIdent;
            persona.children = req.body.children;
            persona.race = req.body.race;
            persona.salary = req.body.salary;
            persona.position = req.body.position;
            persona.save().then(persona => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
personaRoutes.route('/delete/:id').get(function (req, res) {
    Persona.findByIdAndRemove({ _id: req.params.id }, function (err, persona) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = personaRoutes;