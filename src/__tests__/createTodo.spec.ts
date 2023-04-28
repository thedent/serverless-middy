import { handler } from '../handlers/createTodo';

describe('Create Todo', () => {
  it('should create a new todo item', async () => {
    const body = { description: 'Clean the kitchen' };
    const { statusCode } = await handler(
      { body: JSON.stringify(body) } as any,
      {} as any,
      () => {},
    )!;

    expect(statusCode).toBe(200);
  });
});
