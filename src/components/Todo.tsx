import React, { useState } from "react";
import { TodosType } from "../App";

interface TodoProps {
  todo: TodosType;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  onEdit: (id: number, newTodo: string) => void;
}

const Todo: React.FC<TodoProps> = ({
  todo,
  toggleComplete,
  deleteTodo,
  onEdit,
}) => {
  const [newEditTodo, setNewEditTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit(id: number) {
    onEdit(id, newEditTodo);
    setIsEditing(false);
  }

  return (
    <li>
      {" "}
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newEditTodo}
            onChange={(e) => setNewEditTodo(e.target.value)}
          />
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            onClick={() => handleEdit(todo.id)}
          >
            Save
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      ) : (
        <div className="max-w-7xl bg-zinc-400 mt-6">
          <input
            className="w-8 h-8 bg-blue-500 border border-blue-700 rounded-lg mr-2 mt-3"
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => toggleComplete(todo.id)}
          />
          <span className="p-2 m-6 mb-4  text-2xl  w-100 font-bold ">
            {todo.title}
          </span>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            onClick={() => setIsEditing(true)}
          >
            Edit Todo
          </button>{" "}
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
};

export default Todo;
