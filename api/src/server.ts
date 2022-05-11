import app from './app';
import { Server } from 'http';

const port = process.env.PORT || 5001;
const server = new Server(app);

server.listen(port, () => {
  console.info(`Listening on port ${port} `);
});
