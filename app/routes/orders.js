module.exports = (app) => {
    const Joi = require('joi');
    const validator = require('express-joi-validation')({});

    const orders = ['food', 'drinks', 'entertainment'];

    const querySchema = Joi.object({
        type: Joi.string().required().valid(orders)
    });

    const bodySchema = Joi.object({
        name: Joi.string().required(),
        type: Joi.string().required().valid(orders)
    })

    app.get('/orders', validator.query(querySchema), (req, res) => {
        res.status(200);
        res.send('HELLO GET');
        return;
    });

    app.post('/orders', validator.body(bodySchema), (req, res) => {
        res.status(200);
        res.send('HELLO POST');
        return;
    });
};