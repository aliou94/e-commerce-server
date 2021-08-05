const express = require('express');
const userRouter = express.Router();
const Users = require('../models/user');

userRouter.route('/')
.get((req, res, next) => {
    Users.find()
    .then(user => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    })
    .catch(err => next(err));
}).post((req, res, next) => {
    Users.create(req.body)
    .then(user => {
        console.log('user Created ', user);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    })
    .catch(err => next(err));
})

userRouter.route('/:userId')
.get((req, res, next) => {
    Users.findById(req.params.userId)
    .then(product => {
        if (product) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(product);
        } else {
            err = new Error(`Campsite ${req.params.userId} not found`);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err => next(err));
})
.put((req, res, next) => {
    Users.findByIdAndUpdate(req.params.userId, {
        $set: req.body
    }, { new: true })
    .then(campsite => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campsite);
    })
    .catch(err => next(err));
})



module.exports = userRouter;