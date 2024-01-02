import type { FastifyInstance } from "fastify";

import HealthController from '@controllers/healthController.js';
import { AutoLoadNext, AutoLoadOptions } from "@/types/fastify/autoload.js";

const healthRoutes = (ctx: FastifyInstance, _: AutoLoadOptions, next: AutoLoadNext) => {
  ctx.get("/health", HealthController.getHealth);

  next();
}

export default healthRoutes;