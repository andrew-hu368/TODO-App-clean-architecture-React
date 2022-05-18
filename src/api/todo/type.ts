import type { Todo } from '../../domain/todo';

export type ICreateRemoteTodo = (todo: Pick<Todo, 'todo'>) => Promise<Todo>;
export type IGetRemoteTodos = () => Promise<Todo[]>;
export type IUpdateRemoteTodo = (
  updatedTodo: Todo
) => Promise<Todo | undefined>;
export type IDeleteRemoteTodo = (
  todoId: Pick<Todo, 'id'>
) => Promise<Todo | undefined>;
