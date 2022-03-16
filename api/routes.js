'use strict';
module.exports = function (app) {
    let productsCtrl = require('./controllers/ProductsController');
    let categoryCtrl = require('./controllers/CategoryController');

    app.route('/products')
        .get(productsCtrl.get)
        .post(productsCtrl.store);

    app.route('/products/lastest')
    .get(productsCtrl.getLastestProducts);

    app.route('/products/best-seller')
    .get(productsCtrl.getBestsellerProducts);

    app.route('/products/:productId')
        .get(productsCtrl.detail)
        .put(productsCtrl.update)
        .delete(productsCtrl.delete);


    app.route('/categories')
        .get(categoryCtrl.get);
        // .post(productsCtrl.store);
};