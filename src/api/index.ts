import axios from "axios";

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const todosAPI = {
  getTodos() {
    return instance.get<ITodo[]>("/todos");
  },
};