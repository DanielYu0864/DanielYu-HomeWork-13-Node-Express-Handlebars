const { Router } = require('express');
const express = require('express');

const router = express.Router();

const burgers = require('../models/burger');

router.get('/', function(req, res) {
    burgers.all((data) => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res) {
    console.log(req.body.name);
    burgers.create('burger_name', req.body.name, (result) => {
        res.json(result);
    });
});

router.put('/api/burgers/:id', function(req, res) {
    console.log(req.params.id);
    console.log(req.body.devoured);
    burgers.update('devoured', req.body.devoured, req.params.id, (result) => {
        if(result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;
