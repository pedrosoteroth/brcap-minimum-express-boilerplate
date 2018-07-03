const request = require('supertest');
const { expect } = require('chai');

const app = require('../../../config/express');

describe('GET /orders', () => {
  it('validates order params', (done) => {
    request(app)
      .get('/orders')
      .query({ invalid_param: 'whatever_value' })
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.text).to.include('Error validating request');
        done();
      });
  });

  it('returns some orders', (done) => {
    request(app)
      .get('/orders')
      .query({ type: 'food' })
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.text).to.include('food');
        done();
      });
  });

});