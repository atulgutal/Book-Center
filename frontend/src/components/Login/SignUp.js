import React, { Component } from "react";
import { Form, Button, Input, Divider, message } from "antd";
import { withRouter } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    //console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRegister = () => {
    //console.log(this.state);

    const { name, email, password } = this.state;

    let data = {
      name,
      email,
      password
    };

    console.log(data);

    axios({
      method: "post",
      url: "/signup",
      data
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        message.error("Please enter all the details!");
        console.log(err);
      });
  };

  render() {
    const { name, email, password } = this.state;
    const { toggleForms } = this.props;

    const validateMessages = {
      required: "${name} is required!",
      types: {
        email: "${name} is not validate email!"
      }
    };

    return (
      <Form
        name="nest-messages"
        validateMessages={validateMessages}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          margin: "40px 30%"
        }}
      >
        <Form.Item
          name="name"
          onChange={this.handleChange}
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input name="name" value={name} placeholder="name" />
        </Form.Item>
        <Form.Item
          name="email"
          onChange={this.handleChange}
          rules={[
            {
              type: "email",
              required: true
            }
          ]}
        >
          <Input name="email" value={email} placeholder="email" />
        </Form.Item>
        <Form.Item
          name="password"
          onChange={this.handleChange}
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input
            name="password"
            type="password"
            value={password}
            placeholder="password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            ghost
            onClick={this.handleRegister}
            style={{ marginTop: "20px", width: "100%" }}
          >
            SignUp
          </Button>
          <Divider />
          <p>Already have an account?</p>
          <Button
            type="default"
            onClick={toggleForms}
            style={{ width: "100%" }}
          >
            SignIn
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default withRouter(SignUp);
