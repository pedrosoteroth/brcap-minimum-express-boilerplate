async function sleep(forHowLong) {
    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    await timeout(forHowLong);
}

async function countFromThree(req, res) {
    await sleep(0);
    console.log(3);
    await sleep(1000);
    console.log(2);
    await sleep(1000);
    console.log(1);
    await sleep(1000);
    console.log('DONE');
    res.status(200);
    res.send('DONE');
}

const gitHubService = require('../services/gitHub');

const response = (res, data) => {
    res.status(200);
    res.send(data);
};

async function gitHub(req, res) {
    gitHubService(req.params.username).then(data => response(res, data));
}

module.exports = {
    countFromThree,
    gitHub,
};