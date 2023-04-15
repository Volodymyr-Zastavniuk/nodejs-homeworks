const app = require('../../../server');
const request = require('supertest');

describe('POST /users/register  // Signup controller test', () => {
  test('should return status 200, token, user: email and subscription', async () => {
    const testData = {
      email: 'test21@test.com',
      password: '1234$Asd',
    };
    const res = await request(app).post('/api/users/register').send(testData);

    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(
      expect.objectContaining({
        token: expect.any(String),
        user: expect.objectContaining({
          email: expect.any(String),
          subscription: expect.any(String),
        }),
      })
    );
    // expect(res.body.user).toHaveProperty('email', expect.any(String));
    // expect(res.body.user).toHaveProperty('subscription', expect.any(String));
  });
});
