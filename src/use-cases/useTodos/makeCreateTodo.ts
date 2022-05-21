import { isValidTodo, Todo } from '../../domain/todo';
import type { TodosStore } from './types';

export const makeCreateTodo =
  ({ createTodo }: Pick<TodosStore, 'createTodo'>) =>
  (todo: Pick<Todo, 'todo'>) => {
    if (!isValidTodo(todo)) throw new Error('Invalid todo');
    return createTodo(todo);
  };
