import app from './app.js';
import { env } from '@/utils/env.js';

app.listen({ port: env.PORT });

console.log(`🚀  Fastify server running on port http://localhost:${env.PORT}`);
