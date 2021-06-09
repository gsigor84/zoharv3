const router = require('express').Router();
let Intrendsnews = require('../models/intrendsnews.model');

router.route('/').get((req, res) => {
    Intrendsnews.find()
        .then(intrendsnews => res.json(intrendsnews))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports =router;