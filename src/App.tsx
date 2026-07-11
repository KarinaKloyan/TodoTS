import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store/store";
import { addTodo, deleteTodo, toggleTodo } from "./store/TodosSlice/TodosSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const [text, setText] = useState("");

  const todos = useSelector((state: RootState) => state.todos.todos);

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch(
      addTodo({
        id: Date.now(),
        title: text,
        isDone: false,
      }),
    );
    setText("");
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />

          <span>
            {todo.isDone ? "✅" : "⬜"} {todo.title}
          </span>

          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
