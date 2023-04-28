import { z } from 'zod';

const createTodoRequestSchema = z.object({
  description: z.string(),
});

export { createTodoRequestSchema };
