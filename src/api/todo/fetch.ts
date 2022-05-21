import type {
  ICreateRemoteTodo,
  IGetRemoteTodos,
  IDeleteRemoteTodo,
  IUpdateRemoteTodo,
} from './type';

import type { Todo } from '../../domain/todo';

interface UnformattedTodo {
  id: string;
  completed: boolean;
  title: string;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const createRemoteTodo: ICreateRemoteTodo = async (body) => {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      title: body.todo,
    }),
  });
  // api only returns an ID, the just ensures we are passing TS-check
  const unformattedTodo: UnformattedTodo = await res.json();

  return {
    ...unformattedTodo,
    todo: body.todo,
    completed: false,
  };
};

export const updateRemoteTodo: IUpdateRemoteTodo = async (todo: Todo) => {
  const res = await fetch(url + `/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      ...todo,
      title: todo.todo,
    }),
  });
  // api only returns an ID
  await res.json();

  return {
    ...todo,
  };
};

export const deleteRemoteTodo: IDeleteRemoteTodo = async ({ id }) => {
  const res = await fetch(url + `/${id}`, {
    method: 'DELETE',
  });
  // api only returns an ID, the just ensures we are passing TS-check
  const unformattedTodo: UnformattedTodo = await res.json();

  return {
    ...unformattedTodo,
    todo: unformattedTodo.title,
    id,
  };
};

export const getRemoteTodos: IGetRemoteTodos = async () => {
  const res = await fetch(url, {
    method: 'GET',
  });
  const unformattedTodos: UnformattedTodo[] = await res.json();

  return unformattedTodos.map((item) => ({
    ...item,
    todo: item.title,
  }));
};
