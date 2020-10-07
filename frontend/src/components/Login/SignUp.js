import React, { Component } from "react";
import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { withRouter } from "react-router-dom";
import axios from "axios";

function SignUp({ signUptoggleForms }) {
  const [form] = Form.useForm();
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [useremail, setUseremail] = useState("");
  // const [userpassword, setUserpassword] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState(0);
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [country, setCountry] = useState("");
  // const [zipcode, setZipcode] = useState("");

  const onFinish = async values => {
    //console.log("Received values of form: ", values);

    try {
      const res = await axios.post("/v1/signup", values);
      console.log(res);
      if (res.data.statusCode == 200) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form form={form} name="register" onFinish={onFinish}>
      <Form.Item
        name="firstname"
        rules={[
          {
            required: true,
            message: "Please input your firstname!"
          }
        ]}
      >
        <Input
          placeholder="firstname"
          // value={firstname}
          // onChange={e => setFirstname(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="lastname"
        rules={[
          {
            required: true,
            message: "Please input your lastname!"
          }
        ]}
      >
        <Input
          placeholder="lastname"
          // value={lastname}
          // onChange={e => setLastname(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="useremail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!"
          },
          {
            required: true,
            message: "Please input your E-mail!"
          }
        ]}
      >
        <Input
          placeholder="email"
          // value={useremail}
          // onChange={e => setUseremail(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="userpassword"
        rules={[
          {
            required: true,
            message: "Please input your password!"
          }
        ]}
      >
        <Input.Password
          placeholder="password"
          // value={userpassword}
          // onChange={e => setUserpassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Please input your phone number!"
          }
        ]}
      >
        <Input
          placeholder="phone number"
          // value={phoneNumber}
          // onChange={e => setPhoneNumber(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="address"
        rules={[
          {
            required: true,
            message: "Please input your address!"
          }
        ]}
      >
        <Input
          placeholder="address"
          // value={address}
          // onChange={e => setAddress(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="city"
        rules={[
          {
            required: true,
            message: "Please input your city!"
          }
        ]}
      >
        <Input
          placeholder="city"
          // value={city}
          // onChange={e => setCity(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="country"
        rules={[
          {
            required: true,
            message: "Please input your country!"
          }
        ]}
      >
        <Input
          placeholder="country"
          // value={country}
          // onChange={e => setCountry(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="zipcode"
        rules={[
          {
            required: true,
            message: "Please input your zipcode!"
          }
        ]}
      >
        <Input
          placeholder="zipcode"
          // value={zipcode}
          // onChange={e => setZipcode(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default withRouter(SignUp);
