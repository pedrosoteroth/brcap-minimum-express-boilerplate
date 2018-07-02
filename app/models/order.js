const Joi = require('joi');

const orders = ['food', 'drinks', 'entertainment'];

/**
 *  JOI Scheme for query request.
 */
const querySchema = Joi.object({
    type: Joi.string().required().valid(orders),
});

/**
 *  JOI Scheme for body request.
 */
const bodySchema = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().required().valid(orders),
});

module.exports = {
    querySchema,
    bodySchema,
};