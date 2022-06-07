import {
  PutUserController,
  PutUserControllerFactory,
} from './PutUserController';
import { FastifyReply, FastifyRequest } from 'fastify';

let putUserController: ReturnType<typeof PutUserControllerFactory>;
let replyStatusSpy = jest.fn().mockReturnThis();
let replySendSpy = jest.fn();
let createUserSpy = jest.fn();

beforeEach(() => {
  putUserController = PutUserControllerFactory(createUserSpy);
});

async function callPutUserController(
  body: unknown,
): ReturnType<typeof putUserController> {
  return putUserController(
    {
      body,
    } as FastifyRequest,
    {
      status: replyStatusSpy.mockReturnThis(),
      send: replySendSpy,
    } as unknown as FastifyReply,
  );
}

it('"replyStatusSpy" should be called', async () => {
  await callPutUserController({});
  expect(replyStatusSpy).toBeCalledTimes(1);
});

it('"replyStatusSpy" should be called with status code"204"', async () => {
  await callPutUserController({});
  expect(replyStatusSpy).toBeCalledWith(201);
});
