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
    Products.find()
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



productRouter.route('/books')
.get((req, res, next) => {
    Products.find()
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


    // productRouter.route('/electronics/:elcetronicsId')
    // .get((req, res, next) => {
    //     Products.findById(req.params.elcetronicsId)
    
    //     .then(product => {
    //         if (product) {
    //             res.statusCode = 200;
    //             res.setHeader('Content-Type', 'application/json');
    //             res.json(product);
    //         } else {
    //             err = new Error(`Campsite ${req.params.elcetronicsId} not found`);
    //             err.status = 404;
    //             return next(err);
    //         }
    //     })
    //     .catch(err => next(err));
    // })
    // .post((req, res, next) => {
    //     Products.findById(req.params.elcetronicsId)
    //     .then(product => {
    //         if (product) {
    //             product.comments.push(req.body);
    //             Products.save()
    //             .then(product => {
    //                 res.statusCode = 200;
    //                 res.setHeader('Content-Type', 'application/json');
    //                 res.json(product);
    //             })
    //             .catch(err => next(err));
    //         } else {
    //             err = new Error(`Campsite ${req.params.elcetronicsId} not found`);
    //             err.status = 404;
    //             return next(err);
    //         }
    //     })
    //     .catch(err => next(err));
    // })
    // .put((req, res) => {
    //     res.statusCode = 403;
    //     res.end(`PUT operation not supported on /campsites/${req.params.elcetronicsId}/comments`);
    // })
    // .delete((req, res, next) => {
    //     Products.findById(req.params.elcetronicsId)
    //     .then(product => {
    //         if (product) {
    //             for (let i = (product.comments.length-1); i >= 0; i--) {
    //                 product.comments.id(campsite.comments[i]._id).remove();
    //             }
    //             Products.save()
    //             .then(product => {
    //                 res.statusCode = 200;
    //                 res.setHeader('Content-Type', 'application/json');
    //                 res.json(product);
    //             })
    //             .catch(err => next(err));
    //         } else {
    //             err = new Error(`Campsite ${req.params.elcetronicsId} not found`);
    //             err.status = 404;
    //             return next(err);
    //         }
    //     })
    //     .catch(err => next(err));
    // });

// productRouter.route('/books/:booksId')
// .get((req, res, next) => {
//     Products.findById(req.params.booksId)
//     .then(product => {
//         if (product) {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'application/json');
//             res.json(product.review);
//         } else {
//             err = new Error(`Campsite ${req.params.booksId} not found`);
//             err.status = 404;
//             return next(err);
//         }
//     })
//     .catch(err => next(err));
// })
// .post((req, res, next) => {
//     Products.findById(req.params.booksId)
//     .then(product => {
//         if (product) {
//             product.comments.push(req.body);
//             Products.save()
//             .then(product => {
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'application/json');
//                 res.json(product);
//             })
//             .catch(err => next(err));
//         } else {
//             err = new Error(`Campsite ${req.params.elcetronicsId} not found`);
//             err.status = 404;
//             return next(err);
//         }
//     })
//     .catch(err => next(err));
// })
// .put((req, res) => {
//     res.statusCode = 403;
//     res.end(`PUT operation not supported on /campsites/${req.params.elcetronicsId}/comments`);
// })
// .delete((req, res, next) => {
//     Products.findById(req.params.elcetronicsId)
//     .then(product => {
//         if (product) {
//             for (let i = (product.comments.length-1); i >= 0; i--) {
//                 product.comments.id(campsite.comments[i]._id).remove();
//             }
//             Products.save()
//             .then(product => {
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'application/json');
//                 res.json(product);
//             })
//             .catch(err => next(err));
//         } else {
//             err = new Error(`Campsite ${req.params.elcetronicsId} not found`);
//             err.status = 404;
//             return next(err);
//         }
//     })
//     .catch(err => next(err));
// });



module.exports = productRouter;