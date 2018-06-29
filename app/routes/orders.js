const Joi = require('joi');
const validator = require('express-joi-validation')({});
const {
    getOrder,
    postOrder
} = require('../controller/orderController');

module.exports = (app) => {
    const orders = ['food', 'drinks', 'entertainment'];

    const querySchema = Joi.object({
        type: Joi.string().required().valid(orders)
    });

    const bodySchema = Joi.object({
        name: Joi.string().required(),
        type: Joi.string().required().valid(orders)
    })

    app.get('/orders', validator.query(querySchema), getOrder);

    app.post('/orders', validator.body(bodySchema), postOrder);
};