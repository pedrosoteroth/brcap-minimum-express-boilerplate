module.exports = (app) => {
    /** Health check route */
    app.get('/health', (req, res) => {
        const pwd = process.env.PWD;
        const array = pwd.split('/');
        const projectName = array[array.length - 1];
        res.status(200);
        return res.send(`The project ${projectName} is running fine.`);
    });
};