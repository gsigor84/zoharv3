const router = require('express').Router();
let Detrendsnews = require('../models/detrendsnews.model');

router.route('/').get((req, res) => {
    Detrendsnews.find()
        .then(detrendsnews => res.json(detrendsnews))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports =router;