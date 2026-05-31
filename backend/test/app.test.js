import assert from 'node:assert/strict';
import test from 'node:test';
import request from 'supertest';
import app from '../src/app.js';

test('GET /api/health returns backend health status', async () => {
  const response = await request(app).get('/api/health').expect(200);

  assert.deepEqual(response.body, {
    status: 'ok',
    service: 'easyflow-backend'
  });
});

test('GET /api/message returns the EasyFlow API message', async () => {
  const response = await request(app).get('/api/message').expect(200);

  assert.equal(response.body.message, 'Hello from EasyFlow API');
});

