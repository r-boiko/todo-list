import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";

import Header from "../Header";
import Footer from "../Footer";

const LayoutComponent = ({ children }) => (
  <Layout className="layout">
    <Header />
    <Layout.Content style={{ padding: "0 50px" }}>
      <div
        className="site-layout-content"
        style={{ minHeight: "calc(100vh - 134px)" }}
      >
        {children}
      </div>
    </Layout.Content>
    <Footer />
  </Layout>
);

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutComponent;