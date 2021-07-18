import * as types from "./types";

export const addTodo = todo => ({
  type: types.ADD_TODO,
  todo,
});

export const removeTodo = todoId => ({
  type: types.REMOVE_TODO,
  todoId,
});

export const editTodo = todoId => ({
  type: types.EDIT_TODO,
  todoId,
});

export const updateTodo = (todoId, todoText) => ({
  type: types.UPDATE_TODO,
  todoId,
  todoText,
});

export const checkTodo = todoId => ({
  type: types.CHECK_TODO,
  todoId,
});
