import useTodos from '../store/useTodos';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { Todo } from '../domain/todo';

const TodoContainer = () => {
  const { isLoading, todos, createTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <>
      <h1>TODO List</h1>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <TodoForm
            handleOnSubmit={(todo: Todo['todo']) => createTodo({ todo })}
          />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </>
      )}
    </>
  );
};

export default TodoContainer;
