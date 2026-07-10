import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { todosReducer } from "./TodosReducer/TodosReducer";
todosReducer

const rootReducer = combineReducers({
  todosPage: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export type AppDispatch = typeof store.dispatch;