import {
  expect,
} from 'chai';

const request = require('supertest');
const app = require('../../../config/express');

describe('GET /health', () => {
  it('should say it is running fine', (done) => {
    request(app)
      .get('/health')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.text).to.include('running fine');
        done();
      });
  });
});