import type {
  Handler,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from 'aws-lambda';
import { z } from 'zod';
import { createTodoRequestSchema } from '../schemas';

type CreateTodoRequest = z.infer<typeof createTodoRequestSchema>;

type ParsedAPIGatewayProxyEvent<Tbody> = Omit<APIGatewayProxyEvent, 'body'> & {
  body: Tbody;
};

type APIGatewayProxyHandler<Tbody> = Handler<
  ParsedAPIGatewayProxyEvent<Tbody>,
  APIGatewayProxyResult
>;

export type { CreateTodoRequest, APIGatewayProxyHandler };
