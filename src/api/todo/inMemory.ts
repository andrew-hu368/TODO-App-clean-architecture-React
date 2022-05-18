import type {
  ICreateRemoteTodo,
  IGetRemoteTodos,
  IDeleteRemoteTodo,
  IUpdateRemoteTodo,
} from './type';

import type { Todo } from '../../domain/todo';

let todos = [
  { id: '1', todo: 'Learn clean architecture', completed: true },
  { id: '2', todo: 'Read atomic habits', completed: false },
  { id: '3', todo: 'Learn React', completed: false },
  { id: '4', todo: 'Sing a song', completed: false },
  { id: '5', todo: 'Go to supermarket', completed: true },
  { id: '6', todo: 'Clean up your room', completed: false },
];

export const createRemoteTodo: ICreateRemoteTodo = async ({ todo }) => {
  const newTodo: Todo = {
    id: (todos.length + 1).toString(),
    todo,
    completed: false,
  };

  todos.push(newTodo);

  return newTodo;
};

export const updateRemoteTodo: IUpdateRemoteTodo = async (todo: Todo) => {
  const index = todos.findIndex((item) => item.id === todo.id);

  if (index < 0) return undefined;

  todos[index] = {
    ...todos[index],
    ...todo,
  };
  return todos[index];
};

export const deleteRemoteTodo: IDeleteRemoteTodo = async ({
  id,
}: Pick<Todo, 'id'>) => {
  const todo = todos.find((item) => item.id === id);

  if (!todo) return undefined;

  todos = todos.filter((item) => item.id !== id);
  return todo;
};

export const getRemoteTodos: IGetRemoteTodos = async () => {
  return todos;
};
