import React from "react";
import { Layout } from "antd";

import logo from "../../logo.svg";

const HeaderComponent = () => (
  <Layout.Header>
    <img
      style={{ maxWidth: "50px" }}
      src={logo}
      alt="React"
    />
  </Layout.Header>
);

export default HeaderComponent;