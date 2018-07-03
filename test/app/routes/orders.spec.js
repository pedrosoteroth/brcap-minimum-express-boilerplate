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

describe('POST /orders', () => {
  it('validates params', (done) => {
    request(app)
      .post('/orders')
      .send({ type: 'invalid_type' })
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.text).to.include('Error validating request');
        done();
      });
  });

  it('receives an order', (done) => {
    request(app)
      .post('/orders')
      .send({ type: 'food', name: 'danoninho' })
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.text).to.include('Hi');
        expect(res.text).to.include('danoninho');
        done();
      });
  });
});