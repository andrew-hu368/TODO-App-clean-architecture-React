import type { Todo } from '../domain/todo';

const TodoItem = ({
  todo,
  toggleTodo,
  deleteTodo,
}: {
  todo: Todo;
  toggleTodo: () => Promise<void>;
  deleteTodo: () => Promise<void>;
}) => {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span onClick={toggleTodo}>{todo.todo}</span>{' '}
      <button onClick={deleteTodo}>🗑</button>
    </li>
  );
};

export default TodoItem;
