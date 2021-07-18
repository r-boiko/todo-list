import React, { useState } from "react";

import ListComponent from "./component";

const List = () => {
  const [list, setList] = useState([]);

  const handleUpdateList = value => {
    setList([...list, value]);
  };

  const handleRemoveFromList = id => () => {
    const updatedList = list.filter((item) => item.id !== id);

    setList(updatedList);
  };

  const handleEditListItem = id => () => {
    const updatedList = list.map((item) => item.id === id ? { ...item, isEdit: !item.isEdit } : item);

    setList(updatedList);
  };

  const handleUpdateListItem = id => ({ target }) => {
    const updatedList = list.map((item) => item.id === id ? { ...item, text: target.value } : item);

    setList(updatedList);
  };

  const handleCheckListItem = id => () => {
    const updatedList = list.map((item) => item.id === id ? { ...item, isDone: !item.isDone } : item);

    setList(updatedList);
  };

  return (
    <ListComponent
      data={list}
      onUpdateList={handleUpdateList}
      onRemoveFromList={handleRemoveFromList}
      onEditListItem={handleEditListItem}
      onUpdateListItem={handleUpdateListItem}
      onCheckListItem={handleCheckListItem}
    />
  );
};

export default List;