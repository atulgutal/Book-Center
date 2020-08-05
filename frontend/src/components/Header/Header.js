import React, { Component } from "react";
import { Layout } from "antd";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header>Header</Header>
        </Layout>
      </div>
    );
  }
}

export default withRouter(Header);
