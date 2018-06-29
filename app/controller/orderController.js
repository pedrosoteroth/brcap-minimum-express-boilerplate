const getOrder = (req, res, callback) => {
    res.status(200);
    res.send(`Hello current order ${req.query.type}`);
}

const postOrder = (req, res, callback) => {
    res.status(200);
    res.send(`Hi ${req.body.name } you order ${req.body.type}`);
}

module.exports = {
    getOrder,
    postOrder
}