import React, { Component } from "react";
import { Alert, Button, Input, Divider, message } from "antd";
import { withRouter } from "react-router-dom";
import Icon from "@ant-design/icons";

// import Header from "../Header/Header";

class SignIn extends Component {
  state = {
    useremail: "",
    password: ""
  };

  handleChange = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = () => {
    message.error("Please enter all the details!");
    console.log("handle login");
  };

  render() {
    const { useremail, password } = this.state;
    const { toggleForms } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          margin: "40px 30%"
        }}
      >
        <Input
          value={useremail}
          type="email"
          onChange={this.handleChange}
          name="useremail"
          placeholder="email"
          prefix={<Icon type="home" />}
          style={{ textAlign: "center", marginBottom: "20px" }}
        />
        <Input
          value={password}
          type="password"
          onChange={this.handleChange}
          name="password"
          placeholder="password"
          style={{ textAlign: "center" }}
        />
        <Button
          type="primary"
          ghost
          onClick={this.handleLogin}
          style={{ marginTop: "20px" }}
        >
          SignIn
        </Button>
        <Divider />
        <Button onClick={toggleForms}>Register</Button>
      </div>
    );
  }
}

export default withRouter(SignIn);
