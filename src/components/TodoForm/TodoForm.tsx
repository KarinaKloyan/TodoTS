import { useState, ChangeEvent } from "react";


interface Props {
    addTodo: (text: string) => void
}


function TodoForm({addTodo}: Props) {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleAdd = () => {
    addTodo(text);
    setText("");
  };

  return (
    <>
      <input value={text} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}

export default TodoForm;
