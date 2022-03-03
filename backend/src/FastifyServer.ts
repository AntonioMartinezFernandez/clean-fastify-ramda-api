import Fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import cors from 'fastify-cors';
//import { Server } from 'http';

export function setupFastifyServer(
  options?: FastifyServerOptions,
): FastifyInstance {
  options = options ?? {};
  return Fastify({
    ...options,
  });
}

const setupRoutes = async (server: FastifyInstance): Promise<void> => {
  server.get('/', async (request, reply) => {
    return { message: 'Message from API' };
  });
};

export const buildServer = async (
  options?: FastifyServerOptions,
): Promise<FastifyInstance> => {
  const server = setupFastifyServer(options);
  server.register(cors, {});

  await setupRoutes(server);

  return server;
};
