import { useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";
import "./home.css";

import {
  HeartFilled,
  CalendarOutlined,
  MessageOutlined,
  StarFilled,
  UsergroupAddOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import GradientButton from "../../components/common/GradientButton";

const { Title, Text } = Typography;

const Header = () => {
  const navigate = useNavigate();
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Health Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo">
            <HeartFilled style={{ fontSize: 20, color: "white" }} />
            {/* <span className="logo-text">GenderCare+</span> */}
            <div className="home-logo">
              <img src="./logo.svg" alt="Logo" />
            </div>
          </a>
          <nav className="nav-menu">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}
          </nav>
          <div className="header-buttons">
            <Button type="text" onClick={() => navigate("/login")}>
              <a className="login-btn">Login</a>
            </Button>
            <GradientButton
              type="primary"
              onClick={() => navigate("/register")}
            >
              <a className="register-btn">Register</a>
            </GradientButton>
          </div>
        </div>
      </div>
    </header>
  );
};

const HeroSection = ({ onBookConsultation, onAskQuestion }) => (
  <section className="hero">
    <div className="container">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <HeartFilled style={{ fontSize: 16 }} /> Trusted by 10,000+ patients
          </div>
          <h1 className="hero-title">
            Comprehensive <span className="gradient-text">S-Healthcare</span>{" "}
            Services
          </h1>
          <p className="hero-description">
            Expert care for sexual health, reproductive wellness, and
            gender-affirming services.
          </p>
          <div className="hero-buttons">
            <GradientButton
              type="pink"
              size="large"
              icon={<CalendarOutlined />}
              onClick={onBookConsultation}
            >
              Book Consultation
            </GradientButton>
            <Button
              size="large"
              icon={<MessageOutlined />}
              onClick={onAskQuestion}
            >
              Ask Anonymous Question
            </Button>
          </div>
          <div className="hero-features">
            <div className="hero-feature">
              <SafetyOutlined style={{ fontSize: 20 }} /> 100% Confidential
            </div>
            <div className="hero-feature">
              <StarFilled style={{ fontSize: 20 }} /> Licensed Professionals
            </div>
            <div className="hero-feature">
              <UsergroupAddOutlined style={{ fontSize: 20 }} /> 24/7 Support
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
////////////////////////////////////////////////////////
//body
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <Text>
          © {new Date().getFullYear()} GenderCare+. All rights reserved.
        </Text>
        <div>
          <PhoneOutlined /> (555) 123-4567 &nbsp;
          <MailOutlined /> support@gendercare.com &nbsp;
          <EnvironmentOutlined /> Medical District
        </div>
      </div>
    </div>
  </footer>
);

const HomePage = () => {
  const handleBookConsultation = () => console.log("Book consultation");
  const handleAskQuestion = () => console.log("Ask question");

  return (
    <div className="homepage">
      <Header />
      <HeroSection
        onBookConsultation={handleBookConsultation}
        onAskQuestion={handleAskQuestion}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
