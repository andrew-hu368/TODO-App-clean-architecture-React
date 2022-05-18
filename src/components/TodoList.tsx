import { Todo } from '../domain/todo';
import TodoItem from './TodoItem';

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
}: {
  todos: Todo[];
  toggleTodo: (todo: Todo) => Promise<any>;
  deleteTodo: (todo: Todo) => Promise<any>;
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          toggleTodo={() => toggleTodo(todo)}
          deleteTodo={() => deleteTodo(todo)}
        />
      ))}
    </ul>
  );
}
