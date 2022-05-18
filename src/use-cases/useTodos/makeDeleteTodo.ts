import type { Todo } from '../../domain/todo';
import type { TodosStore } from './types';

export const makeDeleteTodo =
  ({ deleteTodo }: Pick<TodosStore, 'deleteTodo'>) =>
  async (todoId: Pick<Todo, 'id'>) => {
    return await deleteTodo(todoId);
  };
