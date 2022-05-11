import app from '../../src/app';
import request from 'supertest';
import { Server } from 'http';
describe('/', () => {
  let server: Server;
  let token: string;
  
  beforeAll((done) => {
    server = new Server(app);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('GET /:id', () => {
    it('should run the initial test', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });
  });
});
