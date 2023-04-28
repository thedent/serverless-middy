import type { APIGatewayProxyHandler } from 'aws-lambda';
import middy from '@middy/core';
import jsonBodyParserMiddleware from '../middleware/jsonBodyParser';
import zodSchemaValidator from '../middleware/zodSchemaValidator';
import { createTodoRequestSchema } from '../schemas';

const baseHandler: APIGatewayProxyHandler = async (event) => {
  console.log(event.body);
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
