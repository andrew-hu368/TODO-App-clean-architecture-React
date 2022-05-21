import type { Todo } from '../../domain/todo';
import type { TodosStore } from './types';

export const makeDeleteTodo =
  ({ deleteTodo }: Pick<TodosStore, 'deleteTodo'>) =>
  (todoId: Pick<Todo, 'id'>) => {
    return deleteTodo(todoId);
  };
