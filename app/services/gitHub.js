const tiny = require('tiny-json-http');

async function gitHub(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    const reposResponse = await tiny.get({
        url,
    });
    return reposResponse.body[1];
}

module.exports = gitHub;