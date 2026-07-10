import { useState } from "react";
import type { ITodo } from "../../App";


interface Props {
  todo: ITodo;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, title: string) => void;
}

function TodoItem({
  todo,
  deleteTodo,
  toggleTodo,
  editTodo,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  const handleSave = () => {
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => toggleTodo(todo.id)}
      />

      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: todo.isDone
                ? "line-through"
                : "none",
            }}
          >
            {todo.title}
          </span>

          <button
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </>
      )}

      <button onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;