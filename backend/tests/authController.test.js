const request = require('supertest');
const { app } = require('../server');

describe('Auth Controller', () => {
  describe('POST /api/auth/signup', () => {
    it('should create a new user and return a token', async () => {
      const res = await request(app)
        .post('/api/auth/signup')
        .send({
          username: 'newuser',
          email: 'newuser@example.com',
          password: 'password'
        });

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('token');
    });
  });

  describe('POST /api/auth/login', () => {
    it('should log in an existing user and return a token', async () => {
      await request(app)
        .post('/api/auth/signup')
        .send({
          username: 'existinguser',
          email: 'existinguser@example.com',
          password: 'password'
        });

      const res = await request(app)
        .post('/api/auth/login')
        .send({
          username: 'existinguser',
          password: 'password'
        });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('token');
    });
  });
});
