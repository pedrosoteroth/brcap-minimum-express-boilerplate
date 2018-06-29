module.exports = (app) => {
    app.get('/', (req, res) => {
        res.status(200);
        res.send('HELLO GET');
        return;
    });

    app.post('/', (req, res) => {
        res.status(200);
        res.send('HELLO POST');
        return;
    });
};