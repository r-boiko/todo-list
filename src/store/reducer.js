import { combineReducers } from "redux";

import todosReducer from "./todos";
import { RESET_STORE } from "./types";

export const appReducer = combineReducers({
  todos: todosReducer,
});

export default (state, action) => {
  if (action.type === RESET_STORE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};