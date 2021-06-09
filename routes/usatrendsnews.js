const router = require('express').Router();
let Usatrendsnews = require('../models/usatrendsnews.model');

router.route('/').get((req, res) => {
    Usatrendsnews.find()
        .then(usatrendsnews => res.json(usatrendsnews))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports =router;