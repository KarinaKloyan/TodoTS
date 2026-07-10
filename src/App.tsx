import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./components/TodoList/TodoList";
import type { RootState } from "./store/store";
import { getTodosAC, getTodosTC } from "./store/TodosReducer/TodosReducer";
getTodosAC

function App() {
  const dispatch = useDispatch();

  const todos = useSelector(
    (state: RootState) => state.todosPage.todos
  );

  useEffect(() => {
    dispatch(getTodosTC() as any);
  }, [dispatch]);

  const deleteTodo = (id: number) => {
    console.log("delete", id);
  };

  const toggleTodo = (id: number) => {
    console.log("toggle", id);
  };

  const editTodo = (id: number, title: string) => {
    console.log("edit", id, title);
  };

  return (
    <div>
      <h1>Todo App</h1>

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;