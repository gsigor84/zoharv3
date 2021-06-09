const router = require('express').Router();
let Usatechnews = require('../models/usatechnews.model');

router.route('/').get((req, res) => {
    Usatechnews.find()
        .then(usatechnews => res.json(usatechnews))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports =router;