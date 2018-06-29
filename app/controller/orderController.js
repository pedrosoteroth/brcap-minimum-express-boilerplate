/**
 * Module for orders
 * @param {*} req 
 * @param {*} res 
 * @param {*} callback 
 */

/** GET order. */
const getOrder = (req, res, callback) => {
    res.status(200);
    return res.send(`Hello yout current order type is ${req.query.type}`);
}

/** POST order */
const postOrder = (req, res, callback) => {
    res.status(200);
    return res.send(`Hi ${req.body.name } you order ${req.body.type}`);
}

/**
 * @exports getOrder 
 * @exports postOrder
 */
module.exports = {
    getOrder,
    postOrder
}