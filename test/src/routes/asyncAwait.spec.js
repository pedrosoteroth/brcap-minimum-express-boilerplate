const request = require('supertest');
const { expect } = require('chai');

const app = require('../../../src');

describe('GET /async', () => {
  it('returns 200 ok', (done) => {
    request(app)
      .get('/async')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.text).to.include('DONE');
        done();
      });
  });
});

describe('GET /github', () => {
  it('returns an object', (done) => {
    request(app)
      .get('/github/asd')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.a('object');
        done();
      });
  });

  it('returns a repo with the correct properties', (done) => {
    const user = 'graciano';
    request(app)
      .get(`/github/${user}`)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.own.property('name');
        expect(res.body).to.have.own.property('owner');
        const { owner } = res.body;
        expect(owner).to.deep.include({ login: user });
        done();
      });
  });
});