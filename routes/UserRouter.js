const express = require('express');
const userRouter = express.Router();

userRouter.route('/')
.get((req, res) => {
    res.end('Will send all the users to you');
})


userRouter.route('/:userId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send a specific user to you');
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('will update a specific user' );
})



module.exports = userRouter;