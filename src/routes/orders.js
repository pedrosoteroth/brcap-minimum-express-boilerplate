const validator = require('express-joi-validation')({});

const {
  getOrder,
  postOrder,
} = require('../controllers/orderController');
const {
  querySchema,
  bodySchema,
} = require('../validations/order');

module.exports = (app) => {
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