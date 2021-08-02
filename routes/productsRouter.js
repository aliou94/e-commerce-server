const express = require('express');
const productRouter = express.Router();

productRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

.get((req, res) => {
    res.end('Will send all the products to you');
})




productRouter.route('/electronics')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end('Will send all the electronic products to you');
})



productRouter.route('/books')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end('Will send all the book products to you');
})





module.exports = productRouter;