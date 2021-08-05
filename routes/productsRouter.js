const express = require('express');
const Products = require('../models/products');
const productRouter = express.Router();

productRouter.route('/')
.get((req, res, next) => {
    Products.find()
    .then(product => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(product);
    })
    .catch(err => next(err));
})



productRouter.route('/electronics')
.get((req, res, next) => {
    Products.findById(req.params.electronics)
    .then(campsite => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campsite);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Products.create(req.body)
    .then(prodcut => {
        console.log('product Created ', prodcut);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(prodcut);
    })
    .catch(err => next(err));
})



productRouter.route('/books')
.get((req, res, next) => {
    Products.findById(req.params.books)
    .then(product => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(product);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Products.create(req.body)
    .then(prodcut => {
        console.log('product Created ', prodcut);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(prodcut);
    })
    .catch(err => next(err));
})

module.exports = productRouter;