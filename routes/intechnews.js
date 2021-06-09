const router = require('express').Router();
let Intechnews = require('../models/intechnews.model');

router.route('/').get((req, res) => {
    Intechnews.find()
        .then(intechnews => res.json(intechnews))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports =router;