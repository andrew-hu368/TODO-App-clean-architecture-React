import { useState } from 'react';

const TodoForm = ({
  handleOnSubmit,
}: {
  handleOnSubmit: (todo: string) => Promise<any>;
}) => {
  const [input, setInput] = useState('');

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await handleOnSubmit(input);
        setInput('');
      }}
    >
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button>➕ Add todo</button>
    </form>
  );
};

export default TodoForm;
