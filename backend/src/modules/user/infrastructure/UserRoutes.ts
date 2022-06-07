import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { PutUserControllerFactory } from './controllers/PutUserController';

import { createUser } from './repositories/createuser.mock';

export async function userRoutes(server: FastifyInstance): Promise<void> {
  server.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ user: 'user' });
  });

  server.post(
    '/create',
    async (request: FastifyRequest, reply: FastifyReply) => {
      const putUserController = PutUserControllerFactory(createUser);
      putUserController(request, reply);
    },
  );
}
