const router = require('express').Router();
let Detechnews = require('../models/detechnews.model');

router.route('/').get((req, res) => {
    Detechnews.find()
        .then(detechnews => res.json(detechnews))
        .catch(err => res.status(400).json('Error: '+ err));
    });

module.exports =router;