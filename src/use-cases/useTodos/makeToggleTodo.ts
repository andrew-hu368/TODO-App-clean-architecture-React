import { isValidTodo, Todo } from '../../domain/todo';
import type { TodosStore } from './types';

export const makeToggleTodo =
  ({ updateTodo }: Pick<TodosStore, 'updateTodo'>) =>
  async (todo: Todo) => {
    return await updateTodo({ ...todo, completed: !todo.completed });
  };
