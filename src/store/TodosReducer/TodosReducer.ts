import type { Dispatch } from "redux";
import type { ITodo, todosAPI } from "../../api";


const GET_TODOS = "getTodos";


const initialState = {
  todos: [] as ITodo[],
};

type InitialState = typeof initialState;

export const todosReducer = (
  state: InitialState = initialState,
  action: ActionsType,
): InitialState => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};
export const getTodosAC = (todos: ITodo[]) =>
  ({
    type: GET_TODOS,
    payload: todos,
  }) as const;

type ActionsType = ReturnType<typeof getTodosAC>;

export const getTodosTC = () => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await todosAPI.getTodos();
      dispatch(getTodosAC(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};
