import { FormEvent } from 'react';

import type { Todo } from '../domain/todo';

const TodoForm = ({
  handleOnSubmit,
}: {
  handleOnSubmit: (todo: Todo['todo']) => Promise<any>;
}) => {
  const handleOnFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleOnSubmit((e.target as any)['todo'].value);
    (e.target as any)['todo'].value = '';
  };

  return (
    <form onSubmit={handleOnFormSubmit}>
      <input name="todo" />
      <button>➕ Add todo</button>
    </form>
  );
};

export default TodoForm;
