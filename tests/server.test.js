const request = require('supertest');
const app = require('../src/server');

describe('GET /', () => {
  it('should return home message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from Node CI/CD Pipeline 🚀');
  });
});
