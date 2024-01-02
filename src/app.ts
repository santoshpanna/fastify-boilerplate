import fastify from 'fastify';
import autoload from '@fastify/autoload';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import path from 'path';
import { fileURLToPath } from 'url';

import { env } from '@utils/env.js';

const server = fastify({
  logger: !!(process.env.NODE_ENV !== 'development'),
});

const dirname = path.dirname(fileURLToPath(import.meta.url));

server.register(helmet);
server.register(cors, {
  origin: env.CORS_ORIGIN.split(','),
  credentials: true,
});

server.register(autoload, {
  dir: path.join(dirname, 'routes/v1'),
  options: { prefix: '/api/v1' },
});

export default server;
