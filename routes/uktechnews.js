const router = require('express').Router();
let Uktechnews= require('../models/uktechnews.model');

router.route('/').get((req, res) => {
    Uktechnews.find()
        .then(uktechnews => res.json(uktechnews))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports =router;