import type { ITodo } from "../../api";
import TodoItem from "../TodoItem/TodoItem";
TodoItem


interface Props {
  todos: ITodo[];
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, title: string) => void;
}

function TodoList({ todos,deleteTodo,
  toggleTodo,
  editTodo, }: Props) {
  return (
      <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;