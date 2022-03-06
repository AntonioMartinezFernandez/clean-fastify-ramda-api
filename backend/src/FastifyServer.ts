import Fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyServerOptions,
} from 'fastify';

import cors from 'fastify-cors';

import { userServerRoutes } from './modules/user/infrastructure/UserRoutes';

export function setupFastifyServer(
  options?: FastifyServerOptions,
): FastifyInstance {
  options = options ?? {};
  return Fastify({
    ...options,
  });
}

const setupRoutes = async (server: FastifyInstance): Promise<void> => {
  server.get('/', (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: 'Message from API' });
  });

  await server.register(userServerRoutes, { prefix: '/user' });
};

export const buildServer = async (
  options?: FastifyServerOptions,
): Promise<FastifyInstance> => {
  const server = setupFastifyServer(options);
  server.register(cors, {});

  await setupRoutes(server);

  return server;
};
