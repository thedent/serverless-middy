import type { APIGatewayProxyHandler, CreateTodoRequest } from '../types';
import middy from '@middy/core';
import jsonBodyParserMiddleware from '../middleware/jsonBodyParser';
import zodSchemaValidator from '../middleware/zodSchemaValidator';
import { createTodoRequestSchema } from '../schemas';

const baseHandler: APIGatewayProxyHandler<CreateTodoRequest> = async (
  event,
) => {
  const { description } = event.body; // description is now a valid property

  console.log({ description });

  return {
    statusCode: 200,
    body: 'success',
  };
};

const handler = middy()
  .use(jsonBodyParserMiddleware())
  .use(
    zodSchemaValidator({
      body: createTodoRequestSchema,
    }),
  )
  .handler(baseHandler);

export { handler };
