import './modules/shared/utils/PrepareEnvironment';
import { getPortOrFail } from '@/modules/shared/utils/Server';
import { isDevelopment } from '@/modules/shared/utils/Environment';
import { handleFatalError } from '@/modules/shared/utils/Error';
import { FastifyInstance } from 'fastify';
import { buildServer } from '@/FastifyServer';
import dotEnv from 'dotenv';
dotEnv.config();
console.log(process.env.NODE_ENV);

buildServer({
  logger: {
    prettyPrint: isDevelopment,
  },
})
  .then((server: FastifyInstance) => {
    server.listen(getPortOrFail());
  })
  .catch(handleFatalError);
