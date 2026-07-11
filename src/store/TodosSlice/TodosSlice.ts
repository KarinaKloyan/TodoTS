import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  title: string;
  isDone: boolean;
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload;
    },
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    toggleTodo(state, action: PayloadAction<number>){
        const todo = state.todos.find(
            (todo) => todo.id === action.payload
        )
        if(todo){
            todo.isDone = !todo.isDone
        }
    }
  },
});

export const { setTodos, addTodo, deleteTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
