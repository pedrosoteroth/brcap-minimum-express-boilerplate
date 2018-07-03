const {
    countFromThree,
    gitHub,
} = require('../controllers/ayncAwaitExample');

module.exports = (app) => {
    app.get('/async', countFromThree);
    app.get('/github/:username', gitHub);
};