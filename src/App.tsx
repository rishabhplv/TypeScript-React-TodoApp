import { useState } from "react";
import TodoList from "./components/TodoList";

export interface TodosType {
  id: number;
  title: string;
  isCompleted: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<TodosType[]>([]);
  const [todo, setTodo] = useState<string>("");
  const [showCompleted, setShowCompleted] = useState(false);

  function addTodo() {
    if (todo.trim() !== "") {
      const newTodo: TodosType = {
        id: Date.now(),
        title: todo,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleComplete(id: number) {
    const updatedTodos = todos.map((todo) =>
      todo.id == id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  }

  return (
    <div className="app text-center bg-slate-400">
      <h2 className="text-6xl text-pink-900 font-bold">Mastu's TodoApp</h2>
      <div className="mt-5">
        <input
          className="border border-gray-400 rounded-lg py-2 px-4  focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Add a new Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      <br />
      <button
        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 mt-5"
        onClick={() => setShowCompleted(!showCompleted)}
      >
        {showCompleted ? "Hide Completed" : "Show Completed"}
      </button>
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        showCompleted={showCompleted}
        setTodos={setTodos}
      />
    </div>
  );
}
