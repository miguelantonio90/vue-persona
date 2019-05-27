const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB');

    const personaRoutes = require('./routes/persona');

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
        () => {console.log('Database is connected') },
        err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(express.static('public'));
    app.use(bodyParser.json());
    app.use(cors());

    app.use('/personas', personaRoutes);
    
    const port = process.env.PORT || 4000;

    const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
    });