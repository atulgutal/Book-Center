import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { withRouter } from "react-router-dom";

class Main extends Component {
  state = {
    showSignUpForm: false
  };

  toggleForms = () => {
    // this.p
    this.setState({
      showSignUpForm: !this.state.showSignUpForm
    });
  };

  render() {
    const { showSignUpForm } = this.state;
    return (
      <div>
        <Row justify="center" type="flex" style={{ marginTop: "50px" }}>
          <Col xs={20} md={12}>
            <Card
              title="Welcome to Book Center"
              style={{ textAlign: "center" }}
            >
              {showSignUpForm ? (
                <SignUp toggleForms={this.toggleForms} />
              ) : (
                <SignIn toggleForms={this.toggleForms} />
              )}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
