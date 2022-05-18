import { makeCreateTodo } from './makeCreateTodo';
import { makeDeleteTodo } from './makeDeleteTodo';
import { makeToggleTodo } from './makeToggleTodo';

import type { TodosStore } from './types';

export const makeUseTodos = (store: TodosStore) => ({
  isLoading: store.isLoading,
  todos: store.todos,
  createTodo: makeCreateTodo(store),
  toggleTodo: makeToggleTodo(store),
  deleteTodo: makeDeleteTodo(store),
});
