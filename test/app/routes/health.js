const request = require('supertest');
const expect = require('chai').expect;

const app = require('../../../config/express');

describe('GET /health', function() {
  it('should say it is running fine', function(done) {
    request(app)
      .get('/health')
      .end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.text).to.include('running fine');
        done(); 
      });
  });
});
