const getProjectName = function () {
    const pwd = process.env.PWD;
    const array = pwd.split('/');
    const projectName = array[array.length - 1];
    return projectName;
}
module.exports = (app) => {
    /** Health check route */
    app.get('/health', (req, res) => {
        res.status(200);
        return res.send(`The project ${getProjectName()} is running fine.`);
    });
};