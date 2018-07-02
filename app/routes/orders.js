const Joi = require('joi');
const validator = require('express-joi-validation')({});
const {
  getOrder,
  postOrder,
} = require('../controller/orderController');

module.exports = (app) => {
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

    /**
     *  GET orders.
     *  @param {string} type - The type of order valid [ food, drinks, entertainment ].
     *  @return {string} The current order type.
     */
  app.get('/orders', validator.query(querySchema), getOrder);

  /**
     *  POST orders.
     *  @param {string} type - The type of order valid [ food, drinks, entertainment ].
     *  @param {string} name - The name of customer.
     *  @return {string} The current order type and customer name.
     */
  app.post('/orders', validator.body(bodySchema), postOrder);
};
