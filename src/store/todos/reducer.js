import { combineReducers } from "redux";

import * as types from "./types";

const todoList = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, action.todo];
    case types.REMOVE_TODO:
      return state.filter((item) => item.id !== action.todoId);
    case types.EDIT_TODO:
      return state.map((item) => item.id === action.todoId ? { ...item, isEdit: !item.isEdit } : item);
    case types.UPDATE_TODO:
      return state.map((item) => item.id === action.todoId ? { ...item, text: action.todoText } : item);
    case types.CHECK_TODO:
      return state.map((item) => item.id === action.todoId ? { ...item, isDone: !item.isDone } : item);
    default:
      return state;
  }
};

const todosReducer = combineReducers({
  todoList,
});

export default todosReducer;
