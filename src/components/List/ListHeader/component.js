import React from "react";
import PropTypes from "prop-types";
import { Input, Button} from "antd";

const ListHeaderComponent = ({ value, onInputChange, onAddItem }) => (
  <div style={{ display: "flex" }}>
    <Input value={value} onChange={onInputChange} />
    <Button onClick={onAddItem}>Add item</Button>
  </div>
);

ListHeaderComponent.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onAddItem: PropTypes.func.isRequired,
};

export default ListHeaderComponent;