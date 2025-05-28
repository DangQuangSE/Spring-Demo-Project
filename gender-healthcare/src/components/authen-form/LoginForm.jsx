import React from "react";
import { Form, Input, Checkbox, message } from "antd";
import "./LoginForm.css";
import GradientButton from "../common/GradientButton";
import { Navigate } from "react-router-dom";
import axios from "axios";
const LoginForm = () => {
  const onFinish = async (values) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        values
      );
      localStorage.setItem("token", res.data.token); // lưu token nếu có
      message.success("Đăng nhập thành công!");
      Navigate("/homepage");
    } catch (error) {
      message.error("Email hoặc mật khẩu sai!");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login]-container">
      <div className="login-box">
        <div className="login-logo">
          <img src="./logo.svg" alt="Logo" />
        </div>
        <div className="login-header">
          <h2>Welcome back</h2>
          <p>Enter your credentials to access your account</p>
        </div>

        <Form
          name="login"
          layout="vertical"
          style={{ width: "100%" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <div className="login-extra">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="forgot-link" href="#">
              Forgot password?
            </a>
          </div>

          <Form.Item>
            <GradientButton htmlType="submit" block>
              Login
            </GradientButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
