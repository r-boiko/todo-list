import React from "react";
import { connect } from "react-redux";

import { todoListSelector } from "../../store/todos/selectors";

import ListComponent from "./component";

const List = (props) => (
  <ListComponent
    {...props}
  />
);

const mapStateToProps = state => ({
 data: todoListSelector(state),
});

export default connect(mapStateToProps)(List);