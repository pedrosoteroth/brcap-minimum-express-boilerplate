const request = require('supertest');

const app = require('../../../config/express');

describe('GET /', function() {
  it('respond text', function(done) {
    request(app)
      .get('/')
      //.set('Accept', 'application/json')
      //.expect('Content-Type', /json/)
      .expect(200, done);
  });
});
