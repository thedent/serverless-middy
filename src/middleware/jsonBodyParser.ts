import middy from '@middy/core';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

const jsonBodyParserMiddleware = (): middy.MiddlewareObj<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
> => {
  const before: middy.MiddlewareFn<APIGatewayProxyEvent> = async ({
    event,
  }) => {
    event.body = JSON.parse(event.body!);
  };

  return {
    before,
  };
};

export default jsonBodyParserMiddleware;
