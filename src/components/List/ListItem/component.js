import React from "react";
import PropTypes from "prop-types";
import {Input, List, Button, Checkbox, Typography} from "antd";

const ListComponent = ({
  id,
  text,
  isEdit,
  isDone,
  onRemoveFromList,
  onEditListItem,
  onUpdateListItem,
  onCheckListItem
}) => (
  <List.Item>
    <Checkbox checked={isDone} onChange={onCheckListItem(id)} />
    {isEdit
      ? <Input value={text} onChange={onUpdateListItem(id)} disabled={isDone} />
      : <Typography.Text delete={isDone}>{text}</Typography.Text>
    }
    <Button danger onClick={onRemoveFromList(id)}>Remove</Button>
    {!isDone && (
      <Button onClick={onEditListItem(id)}>{isEdit ? "Save" : "Edit"}</Button>
    )}
  </List.Item>
);

ListComponent.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired,
  isDone: PropTypes.bool.isRequired,
  onRemoveFromList: PropTypes.func.isRequired,
  onEditListItem: PropTypes.func.isRequired,
  onUpdateListItem: PropTypes.func.isRequired,
  onCheckListItem: PropTypes.func.isRequired,
};

export default ListComponent;