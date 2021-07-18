import React, { useState } from "react";

import ListHeaderComponent from "./component";

const ListHeader = ({ onUpdateList }) => {
  const [value, setValue] = useState("");

  const handleAddItem = () => {
    if (value.length === 0 ) return;
    
    onUpdateList({
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

export default ListHeader;