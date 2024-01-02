import { FastifyReply, FastifyRequest } from "fastify";

const getHealth = async (_: FastifyRequest, reply: FastifyReply) => {
  reply.status(200).send({ date: new Date().getTime() });
};

export default {
  getHealth,
};