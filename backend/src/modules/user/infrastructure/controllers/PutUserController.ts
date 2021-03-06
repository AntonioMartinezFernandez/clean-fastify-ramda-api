import { FastifyReply, FastifyRequest } from 'fastify';
import { requestBodyParser } from '../fastify/RequestBodyParser';

export type User = Record<string, unknown>;
export type CreateUser = (userOptions: User) => Promise<User | null>;

export async function PutUserController(
  createUser: CreateUser,
  { request, reply }: { request: FastifyRequest; reply: FastifyReply },
): Promise<void> {
  const userCreated = await createUser(request.json ?? {});
  console.log(userCreated);
  reply.status(201).send('OK');
}

export function PutUserControllerFactory(
  createUser: CreateUser,
): (
  request: FastifyRequest,
  reply: FastifyReply,
) => ReturnType<typeof PutUserController> {
  return async function (
    request: FastifyRequest,
    reply: FastifyReply,
  ): ReturnType<typeof PutUserController> {
    request.json = requestBodyParser(request.body);
    return PutUserController(createUser, { request, reply });
  };
}
