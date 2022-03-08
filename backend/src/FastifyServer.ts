import Fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyServerOptions,
} from 'fastify';
import cors from 'fastify-cors';

import { userRoutes } from './modules/user/infrastructure/UserRoutes';

const serverPlugins = async (server: FastifyInstance): Promise<void> => {
  server.register(cors);
};

const setupRoutes = async (server: FastifyInstance): Promise<void> => {
  server.get('/', (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: 'Message from API' });
  });

  await server.register(userRoutes, { prefix: '/user' });
};

export function setupFastifyServer(
  options?: FastifyServerOptions,
): FastifyInstance {
  options = options ?? {};
  return Fastify({
    ...options,
  });
}

export const buildServer = async (
  options?: FastifyServerOptions,
): Promise<FastifyInstance> => {
  const server = setupFastifyServer(options);

  await serverPlugins(server);

  await setupRoutes(server);

  return server;
};
