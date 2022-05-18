import type { Todo } from '../../domain/todo';

export enum TodoActions {
  INIT_TODOS,
  INIT_TODOS_SUCCESS,
  CREATE_TODO,
  CREATE_TODO_SUCCESS,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
}

export type INIT_TODOS = {
  type: TodoActions.INIT_TODOS;
};

export type INIT_TODOS_SUCCESS = {
  type: TodoActions.INIT_TODOS_SUCCESS;
  payload: {
    todos: Todo[];
  };
};

export type CREATE_TODO_SUCCESS = {
  type: TodoActions.CREATE_TODO_SUCCESS;
  payload: {
    todo: Todo;
  };
};
export type UPDATE_TODO_SUCCESS = {
  type: TodoActions.UPDATE_TODO_SUCCESS;
  payload: {
    todo: Todo;
  };
};
export type DELETE_TODO_SUCCESS = {
  type: TodoActions.DELETE_TODO_SUCCESS;
  payload: {
    todo: Todo;
  };
};

export const initTodo: () => INIT_TODOS = () => ({
  type: TodoActions.INIT_TODOS,
});
export const initTodoSuccess: (todos: Todo[]) => INIT_TODOS_SUCCESS = (
  todos: Todo[]
) => ({
  type: TodoActions.INIT_TODOS_SUCCESS,
  payload: {
    todos,
  },
});
export const createTodoSuccess: (todo: Todo) => CREATE_TODO_SUCCESS = (
  todo
) => ({
  type: TodoActions.CREATE_TODO_SUCCESS,
  payload: {
    todo,
  },
});
export const updateTodoSuccess: (todo: Todo) => UPDATE_TODO_SUCCESS = (
  todo
) => ({
  type: TodoActions.UPDATE_TODO_SUCCESS,
  payload: {
    todo,
  },
});
export const deleteTodoSuccess: (todo: Todo) => DELETE_TODO_SUCCESS = (
  todo
) => ({
  type: TodoActions.DELETE_TODO_SUCCESS,
  payload: {
    todo,
  },
});
