import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export async function userRoutes(server: FastifyInstance): Promise<void> {
  server.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ user: 'user' });
  });
}
