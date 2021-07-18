import React, { useState } from "react";
import { connect } from "react-redux";

import { addTodo } from "../../../store/todos/actions";

import ListHeaderComponent from "./component";

const ListHeader = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleAddItem = () => {
    if (value.length === 0 ) return;

    addTodo({
      id: Math.random(),
      text: value,
      isEdit: false,
      isDone: false,
    });

    setValue("");
  };

  const handleInputChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <ListHeaderComponent
      value={value}
      onAddItem={handleAddItem}
      onInputChange={handleInputChange}
    />
  );
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(ListHeader);