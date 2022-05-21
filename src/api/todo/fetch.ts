import type {
  ICreateRemoteTodo,
  IGetRemoteTodos,
  IDeleteRemoteTodo,
  IUpdateRemoteTodo,
} from './type';

import type { Todo } from '../../domain/todo';

const url = 'https://jsonplaceholder.typicode.com/todos';

export const createRemoteTodo: ICreateRemoteTodo = async (body) => {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
  });

  return res.json();
};

export const updateTodo: IUpdateRemoteTodo = async (todo: Todo) => {
  const res = await fetch(url + `/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
  });

  return res.json();
};

export const deleteTodo: IDeleteRemoteTodo = async ({ id }) => {
  const res = await fetch(url + `/${id}`, {
    method: 'DELETE',
  });

  return res.json();
};

export const fetchAllTodos: IGetRemoteTodos = async () => {
  const res = await fetch(url, {
    method: 'GET',
  });

  return res.json();
};
