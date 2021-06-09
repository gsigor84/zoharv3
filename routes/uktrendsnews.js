const router = require('express').Router();
let Uktrendsnews = require('../models/uktrendsnews.model');

router.route('/').get((req, res) => {
    Uktrendsnews.find()
        .then(uktrendsnews => res.json(uktrendsnews))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports =router;