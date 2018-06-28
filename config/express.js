const app = require('express')();
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const port = process.env.PORT || 3000;

var log4js = require('log4js');
var logger = log4js.getLogger();

/** configure lo4js using JSON type file*/
log4js.configure(
    './config/log4js.json'
)

/** set options for app */
app.options("/*", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.send(204);
});

/** parse application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({
    extended: false
}))

/** parse application json */
app.use(bodyParser.json())

/** use expressValidator */
app.use(expressValidator());

/** use consign for autoload scripts */
consign({
        cwd: 'app'
    })
    .include('routes')
    .into(app);

/** server listening message */
app.listen(port, (err) => {
    if (err) {
        logger.error(`Failed to listen on port ${port}.`);
        return process.exit(1);
    }
    logger.info(`Listening on port ${port}.`);
});

/** * Express App. * @module app */
module.exports = app;