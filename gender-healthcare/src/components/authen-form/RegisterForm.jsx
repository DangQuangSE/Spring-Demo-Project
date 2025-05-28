import React from "react";
import {
  Form,
  Input,
  Checkbox,
  DatePicker,
  Select,
  Row,
  Col,
  message,
} from "antd";
import GradientButton from "../common/GradientButton";
import "./RegisterForm.css";
import { Navigate } from "react-router-dom";
import axios from "axios";

const { Option } = Select;

const RegisterForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      // Gửi dữ liệu đến API
      await axios.post("http://localhost:8080/api/auth/register", values);
      message.success("Đăng ký thành công!");
      Navigate("/login"); // chuyển hướng sang trang đăng nhập
    } catch (error) {
      message.error("Đăng ký thất bại. Vui lòng thử lại!");
    }
  };

  return (
    <div className="register-screen">
      <div className="register-container">
        <div className="register-box">
          <div className="register-header-top">
            <img src="/logo.svg" alt="Logo" className="brand-logo" />
            <h2>Create Account</h2>
            <p className="register-subtitle">
              Join Gender Health for personalized healthcare services
            </p>
          </div>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            className="register-form"
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[{ required: true, message: "Enter your first name" }]}
                >
                  <Input placeholder="Enter your first name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[{ required: true, message: "Enter your last name" }]}
                >
                  <Input placeholder="Enter your last name" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: "Enter your email address" },
                { type: "email", message: "Invalid email format" },
              ]}
            >
              <Input placeholder="Enter your email address" />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Phone Number"
                  name="phone"
                  rules={[
                    { required: true, message: "Enter your phone number" },
                    {
                      pattern: /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/,
                      message: "Invalid Vietnamese phone number",
                    },
                  ]}
                >
                  <Input placeholder="(090) 123-4567" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Date of Birth"
                  name="dob"
                  rules={[{ required: true, message: "Pick your birth date" }]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: "Select your gender" }]}
            >
              <Select placeholder="Select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Enter your password" },
                    { min: 6, message: "Minimum 6 characters" },
                  ]}
                  hasFeedback
                >
                  <Input.Password placeholder="Create a strong password" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    { required: true, message: "Confirm your password" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject("Passwords do not match");
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="Confirm your password" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="terms"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("You must agree to the terms"),
                },
              ]}
            >
              <Checkbox>
                I agree to the <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>
              </Checkbox>
            </Form.Item>

            <Form.Item name="subscribe" valuePropName="checked">
              <Checkbox>
                Subscribe to health tips and updates (optional)
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <GradientButton block htmlType="submit">
                Create Account
              </GradientButton>
            </Form.Item>

            <div className="register-footer">
              Already have an account?{" "}
              <a href="/login" style={{ color: "#ff5a7d" }}>
                Sign in here
              </a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
