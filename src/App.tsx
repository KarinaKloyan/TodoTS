import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store/store";
import { addTodo, deleteTodo, toggleTodo } from "./store/TodosSlice/TodosSlice";

import {
  Box,
  Button,
  Checkbox,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

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
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Todo App
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 3,
        }}
      >
        <TextField
          fullWidth
          label="Enter todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </Box>

      {todos.map((todo) => (
        <Paper
          key={todo.id}
          sx={{
            p: 2,
            mb: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Checkbox
              checked={todo.isDone}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />

            <Typography
              sx={{
                textDecoration: todo.isDone ? "line-through" : "none",
              }}
            >
              {todo.isDone ? "✅" : "⬜"} {todo.title}
            </Typography>
          </Box>

          <Button
            variant="outlined"
            color="error"
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </Button>
        </Paper>
      ))}
    </Container>
  );
}

export default App;
