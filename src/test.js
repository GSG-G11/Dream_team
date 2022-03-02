/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// const test = require('tape');
const request = require('supertest');
const app = require('./app');

describe('Test Server', () => {
  test('Route / status 200', (done) => {
    request(app)
      .get('/')
      .expect(200)
      // .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });
  test('status 200 for html file', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });
  test('Get CSS Style file status 200', (done) => {
    request(app)
      .get('/css/style.css')
      .expect(200)
      .expect('Content-Type', /css/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });
  test('Get CSS error style file status 200', (done) => {
    request(app)
      .get('/css/errorStyle.css')
      .expect(200)
      .expect('Content-Type', /css/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });
  test('Get js dom file status 200', (done) => {
    request(app)
      .get('/js/dom.js')
      .expect(200)
      .expect('Content-Type', /javascript/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });
  test('Route /500 status 500 Server Error', (done) => {
    request(app)
      .get('/500')
      .expect(500)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(500);
        return done();
      });
  });
  describe('Add player', () => {
    test('Route add player status 200', (done) => {
      request(app)
        .post('/search-form/player')
        .expect(200)
        .expect('Content-Type', 'text/plain; charset=utf-8')
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).toBe(200);
          return done();
        });
    });
  });
});
