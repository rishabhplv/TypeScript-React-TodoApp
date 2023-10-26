import { TodosType } from "../App";
import Todo from "./Todo";

interface TodoListProps {
  todos: TodosType[];
  showCompleted: boolean;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  setTodos: React.Dispatch<React.SetStateAction<TodosType[]>>;
}

const TodoList = ({
  todos,
  toggleComplete,
  deleteTodo,
  showCompleted,
  setTodos,
}: TodoListProps) => {
  function onEdit(id: number, newTodo: string) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id == id ? { ...todo, title: newTodo } : todo
      )
    );
  }

  const filterTodos = showCompleted
    ? todos
    : todos.filter((todo) => !todo.isCompleted);
  return (
    <ul>
      {filterTodos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;
