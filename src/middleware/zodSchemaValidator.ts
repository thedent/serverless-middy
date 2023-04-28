import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import middy from '@middy/core';
import { z } from 'zod';

interface Options {
  body: z.ZodObject<any>;
}

const zodSchemaValidator = (
  options?: Options,
): middy.MiddlewareObj<APIGatewayProxyEvent, APIGatewayProxyResult> => {
  const before: middy.MiddlewareFn<APIGatewayProxyEvent> = async ({
    event,
  }) => {
    if (options?.body) {
      options.body.parse(event.body);
    }
  };

  return {
    before,
  };
};

export default zodSchemaValidator;
