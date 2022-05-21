import { useReducer, useEffect, useCallback, useMemo } from 'react';

import { reducer, initialState } from './reducer';
import {
  initTodo,
  initTodoSuccess,
  createTodoSuccess,
  updateTodoSuccess,
  deleteTodoSuccess,
} from './actions';
import {
  getRemoteTodos,
  createRemoteTodo,
  updateRemoteTodo,
  deleteRemoteTodo,
} from '../../api/todo';
import type { Todo } from '../../domain/todo';
import { makeUseTodos } from '../../use-cases/useTodos/makeUseTodos';

const store = () => {
  const [{ isLoading, todos }, dispatch] = useReducer(reducer, initialState);
  const useTodosFn = useMemo(
    () =>
      makeUseTodos({
        createTodo: async (todoProp: Pick<Todo, 'todo'>) => {
          const todo = await createRemoteTodo(todoProp);
          dispatch(createTodoSuccess(todo));
          return todo;
        },
        updateTodo: async (todo: Todo) => {
          const newTodo = await updateRemoteTodo(todo);

          if (newTodo) {
            dispatch(updateTodoSuccess(newTodo));
          }
          return newTodo;
        },
        deleteTodo: async (todoId: Pick<Todo, 'id'>) => {
          const todo = await deleteRemoteTodo(todoId);

          if (todo) {
            dispatch(deleteTodoSuccess(todo));
          }
          return todo;
        },
      }),
    []
  );

  useEffect(() => {
    const getTodos = async () => {
      dispatch(initTodo());
      const todos = await getRemoteTodos();
      dispatch(initTodoSuccess(todos));
    };

    getTodos();
  }, []);

  return {
    isLoading,
    todos,
    ...useTodosFn,
  };
};

export default store;
