module.exports = (app) => {
    app.get('/', (req, res) => {
        res.status(200);
        res.send('Hello minimal express boilerplate');
        return;
    });
};