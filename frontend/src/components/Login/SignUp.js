import React, { Component } from "react";
import { Form, Button, Input, Divider, message } from "antd";
import { withRouter } from "react-router-dom";
import Icon from "@ant-design/icons";

// import Header from "../Header/Header";

class SignUp extends Component {
  state = {
    name: "",
    useremail: "",
    password: ""
  };

  handleChange = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRegister = () => {
    console.log("handle register");
    console.log(this.state);
  };

  render() {
    const { name, useremail, password } = this.state;
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
          value={name}
          onChange={this.handleChange}
          name="name"
          placeholder="name"
          style={{ textAlign: "center", marginBottom: "20px" }}
        />
        <Input
          value={useremail}
          onChange={this.handleChange}
          name="useremail"
          placeholder="email"
          rules={[
            {
              type: "email"
            }
          ]}
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
          onClick={this.handleRegister}
          style={{ marginTop: "20px" }}
        >
          SignUp
        </Button>
        <Divider />
        <p>Already have an account?</p>
        <Button type="default" onClick={toggleForms}>
          SignIn
        </Button>
      </div>
    );
  }
}

export default withRouter(SignUp);
