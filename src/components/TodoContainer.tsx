import useTodos from '../store/useTodos';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

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
            handleOnSubmit={async (todo: string) => await createTodo({ todo })}
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
