const express = require('express');
const orderRouter = express.Router();
const Orders = require('../models/orders');
const Users = require('../models/user');

orderRouter.route('/')
.get((req, res, next) => {
    Orders.find()
    .then(user => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    })
    .catch(err => next(err));
}).post((req, res, next) => {
    Orders.create(req.body)
    .then(user => {
        console.log('user Created ', user);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    })
    .catch(err => next(err));
})



orderRouter.route('/:purchaseId')
get((req, res, next) => {
    Users.findById(req.params.purchaseId)
    .then(campsite => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campsite);
    })
    .catch(err => next(err));
})
.put((req, res, next) => {
    Users.findByIdAndUpdate(req.params.purchaseId, {
        $set: req.body
    }, { new: true })
    .then(campsite => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campsite);
    })
    .catch(err => next(err));
})
.delete((req, res, next) => {
    Users.findByIdAndDelete(req.params.purchaseId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});




module.exports = orderRouter;