/** @function getProjectName */
const getProjectName = () => {
  const pwd = process.env.PWD;
  const array = pwd.split('/');
  const projectName = array[array.length - 1];
  return projectName;
};

/** @function health */
const health = (req, res) => {
  res.status(200);
  return res.send(`The project ${getProjectName()} is running fine.`);
};

/** @exports health */
module.exports = (app) => {
  /** Health check route */
  app.get('/health', health);
};
