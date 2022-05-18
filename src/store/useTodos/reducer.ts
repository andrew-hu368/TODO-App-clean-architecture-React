import type { Todo } from '../../domain/todo';
import {
  INIT_TODOS,
  INIT_TODOS_SUCCESS,
  CREATE_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  TodoActions,
} from './actions';

export interface TodoState {
  isLoading: boolean;
  todos: Todo[];
}

type Action =
  | INIT_TODOS
  | INIT_TODOS_SUCCESS
  | CREATE_TODO_SUCCESS
  | UPDATE_TODO_SUCCESS
  | DELETE_TODO_SUCCESS;

export const initialState = {
  isLoading: true,
  todos: [],
};

export const reducer: (state: TodoState, action: Action) => TodoState = (
  state,
  action
) => {
  switch (action.type) {
    case TodoActions.INIT_TODOS:
      return {
        ...state,
        isLoading: true,
      };
    case TodoActions.INIT_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload.todos,
      };
    case TodoActions.CREATE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.concat(action.payload.todo),
      };
    case TodoActions.UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.id !== action.payload.todo.id) return t;
          return action.payload.todo;
        }),
      };
    case TodoActions.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload.todo.id),
      };
  }
};
