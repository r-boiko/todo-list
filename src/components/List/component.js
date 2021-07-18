import React from "react";
import PropTypes from "prop-types";
import { List, Divider } from "antd";

import ListHeader from "./ListHeader";
import ListItem from "./ListItem";

const ListItemComponent = ({
  data,
  onUpdateList,
  onRemoveFromList,
  onEditListItem,
  onUpdateListItem,
  onCheckListItem
}) => (
  <>
    <Divider orientation="left">TODO list</Divider>
    <List
      size="large"
      header={<ListHeader onUpdateList={onUpdateList} />}
      bordered
      dataSource={data}
      renderItem={item => (
        <ListItem
          {...item}
          onRemoveFromList={onRemoveFromList}
          onEditListItem={onEditListItem}
          onUpdateListItem={onUpdateListItem}
          onCheckListItem={onCheckListItem}
        />
      )}
    />
  </>
);

ListItemComponent.propTypes = {
  data: PropTypes.array.isRequired,
  onUpdateList: PropTypes.func.isRequired,
  onRemoveFromList: PropTypes.func.isRequired,
  onEditListItem: PropTypes.func.isRequired,
  onUpdateListItem: PropTypes.func.isRequired,
  onCheckListItem: PropTypes.func.isRequired,
};

export default ListItemComponent;