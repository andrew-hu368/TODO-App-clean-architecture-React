import type { Todo } from '../../domain/todo';

export interface TodosStore {
  createTodo: ({ todo }: Pick<Todo, 'todo'>) => Promise<Todo>;
  updateTodo: (todo: Todo) => Promise<Todo | undefined>;
  deleteTodo: ({ id }: Pick<Todo, 'id'>) => Promise<Todo | undefined>;
}
