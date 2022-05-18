import type { Todo } from './type';

export const isValidTodo: (todo: Pick<Todo, 'todo'>) => boolean = ({
  todo,
}) => {
  if (todo.length <= 3) return false;
  return true;
};
