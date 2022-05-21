import { isValidTodo, Todo } from '../../domain/todo';
import type { TodosStore } from './types';

export const makeToggleTodo =
  ({ updateTodo }: Pick<TodosStore, 'updateTodo'>) =>
  (todo: Todo) => {
    return updateTodo({ ...todo, completed: !todo.completed });
  };
