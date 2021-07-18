import React from "react";
import PropTypes from "prop-types";
import { List, Divider } from "antd";

import ListHeader from "./ListHeader";
import ListItem from "./ListItem";

const ListItemComponent = ({
  data,
}) => (
  <>
    <Divider orientation="left">TODO list</Divider>
    <List
      size="large"
      header={<ListHeader />}
      bordered
      dataSource={data}
      renderItem={item => (
        <ListItem
          {...item}
        />
      )}
    />
  </>
);

ListItemComponent.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ListItemComponent;