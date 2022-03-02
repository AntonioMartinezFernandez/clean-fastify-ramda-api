import Fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';

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
    return { pong: 'Work!' };
  });
};

export const buildServer = async (
  options?: FastifyServerOptions,
): Promise<FastifyInstance> => {
  const server = setupFastifyServer(options);

  await setupRoutes(server);

  return server;
};
