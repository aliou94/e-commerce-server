const express = require('express');
const orderRouter = express.Router();

orderRouter.route('/')
.get((req, res) => {
    res.end('Will send all the orders to you');
})

.post((req, res) => {
    res.end(`Will add the purchase: ${req.body.name} with description: ${req.body.description}`);
})


.delete((req, res) => {
    res.end('Deleting all purchase');
});



orderRouter.route('/:purchaseId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send a specific  purchase to you');
})

.post((req, res) => {
    res.end(`Will add the purchase: ${req.body.name} with purchase: ${req.body.description}`);
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('will update a specific purchase' );
})

.delete((req, res) => {
    res.end('Deleting a specific  purchase');
});




module.exports = orderRouter;