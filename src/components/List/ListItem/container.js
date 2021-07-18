import React from "react";
import { connect } from "react-redux";

import { removeTodo, editTodo, updateTodo, checkTodo } from "../../../store/todos/actions";

import ListItemComponent from "./component";

const ListItem = (props) => {
  const handleRemoveFromList = id => () => {
    const { removeTodo } = props;

    removeTodo(id);
  };

  const handleEditListItem = id => () => {
    const { editTodo } = props;

    editTodo(id);
  };

  const handleUpdateListItem = id => ({ target }) => {
    const { updateTodo } = props;

    updateTodo(id, target.value);
  };

  const handleCheckListItem = id => () => {
    const { checkTodo } = props;

    checkTodo(id);
  };

  return (
    <ListItemComponent
      {...props}
      onRemoveFromList={handleRemoveFromList}
      onEditListItem={handleEditListItem}
      onUpdateListItem={handleUpdateListItem}
      onCheckListItem={handleCheckListItem}
    />
  );
};

const mapDispatchToProps = {
  removeTodo,
  editTodo,
  updateTodo,
  checkTodo,
};

export default connect(null, mapDispatchToProps)(ListItem);